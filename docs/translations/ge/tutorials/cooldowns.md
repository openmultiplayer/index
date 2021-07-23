---
title: Cooldowns
description: A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers.
---

This tutorial covers writing a commonly used gameplay mechanic in action games: cooldowns. A cooldown is a tool to limit the frequency at which a player can do something. This may be something like using an ability such as healing or writing chat messages. It allows you to slow the rate at which players do things either for gameplay balancing purposes or to prevent spam.

First I'll example the _bad_ way of doing a cooldown by using `SetTimer` to update state.

## Using Timers

Say for example you have a specific action that can only be performed once every so many seconds, I see a lot of people (including Southclaws, many years ago) doing something like this:

```c
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* This can be any sort of input event a player makes such as:
 *  Entering a command
 *  Picking up a pickup
 *  Entering a checkpoint
 *  Pressing a button
 *  Entering an area
 *  Using a dialog
 */
{
    // This only works when the player is allowed to
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // Do the thing the player requested
        DoTheThingThePlayerRequested();

        // Disallow the player
        IsPlayerAllowedToDoThing[playerid] = false;

        // Allow the player to do the thing again in 10 seconds
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

        return 0;
    }
}

// Called 10 seconds after the player does the thing
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "You are allowed to do the thing again! :D");
}
```

Now this is all well and good, it works, the player won't be able to do that thing again for 10 seconds after he uses it.

Take another example here, this is a stopwatch that measures how long it takes for a player to do a simple point to point race:

```c
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // Calls a function every second
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // Increment the seconds counter
    StopWatchTotalTime[playerid]++;
}

OnPlayerFinishRace(playerid)
{
    new str[128];

    format(str, 128, "You took %d seconds to do that", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);

    KillTimer(StopWatchTimerID[playerid]);
}
```

These two examples are common and they may work fine. However, there is a much better way of achieving both of these outcomes, which is more way accurate and can give stopwatch timings down to the millisecond!

## Using `GetTickCount()` and `gettime()`

`GetTickCount()` is a function that gives you the time in milliseconds since the server process was opened. `gettime()` returns the number of seconds since January 1st 1970, also known as a Unix Timestamp.

If you call either of these functions at two different times, and subtract the first time from the second you suddenly have an interval between those two events in milliseconds or seconds respectively! Take a look at this example:

### A Cooldown

```c
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // This only works when the current tick minus the last tick is above 10000.
   // In other words, it only works when the interval between the actions is over 10 seconds.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // Update the tick count with the latest time.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

Or, alternatively the `gettime()` version:

```c
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // This only works when the current seconds minus the last seconds is above 10.
   // In other words, it only works when the interval between the actions is over 10 seconds.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // Update the seconds count with the latest time.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

There's a lot less code there, no need for a public function or a timer. If you really want to, you can put the remaining time in the error message:

(I'm using SendFormatMessage in this example)

```c
SendFormatMessage(
    playerid,
    -1,
    "You are not allowed to do that yet! You can again in %d ms",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

That's a very basic example, it would be better to convert that MS value into a string of `minutes:seconds.milliseconds` but I'll post that code at the end.

### A Stopwatch

Hopefully you can see how powerful this is to get intervals between events, let's look at another example

```c
static Stopwatch[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}

OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

In this example, the tick count is saved to the player variable when he starts the race. When he finishes it, the current tick (of when he finished) has that initial tick (The smaller value) subtracted from it and thus leaves us with the amount of milliseconds in between the start and the end of the race.

#### Breakdown

Now lets break the code down a bit.

```c
new Stopwatch[MAX_PLAYERS];
```

This is a global variable, we need to use this so we can save the tick count and retrieve the value at another point in time (in other words, use it in another function, later on)

```c
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

This is when the player starts the race, the tick count of now is recorded, if this happens is 1 minute after the server started, the value of that variable will be 60,000 because it is 60 seconds and each second has a thousand milliseconds.

Okay, we now have that player's variable set at 60,000, now he finishes the race 1 minute 40 seconds later:

```c
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

Here is where the calculation of the interval happens, well, I say calculation, it's just subtracting two values!

GetTickCount() returns the current tick count, so it will be bigger than the initial tick count which means you subtract the initial tick count from the current tick count to get your interval between the two measures.

So, as we said the player finishes the race 1 minute and 40 seconds later (100 seconds, or 100,000 milliseconds), GetTickCount will return 160,000. Subtract the initial value (Which is 60,000) from the new value (Which is 160,000) and you get 100,000 milliseconds, which is 1 minute 40 seconds, which is the time it took the player to do the race!

## Recap and Notes

So! We learned that:

- GetTickCount returns the amount of time in milliseconds since the computer system that the server is running on started.
- And we can use that by calling it at two intervals, saving the first to a variable and comparing the two values can give you an accurate interval in milliseconds between those two events.

Last of all, you don't want to be telling your players time values in milliseconds! What if they take an hour to complete a race?

It's best to use a function that takes the milliseconds and converts it to a readable format, for instance, the earlier example the player took 100,000 milliseconds to do the race, if you told the player he took that long, it would take longer to read that 100,000 and figure out what it means in human-readable time.

[This package](https://github.com/ScavengeSurvive/timeutil) contains a function to format milliseconds into a string.

I hope this helped! I wrote it because I've helped a few people out recently who didn't know how to use `GetTickCount()` or `gettime()` as an alternative for timers or for getting intervals etc.
