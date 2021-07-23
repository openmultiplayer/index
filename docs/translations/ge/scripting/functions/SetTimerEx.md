---
title: SetTimerEx
description: Sets a timer to call a function after the specified interval.
tags: ["timer"]
---

## Description

Sets a timer to call a function after the specified interval. This variant ('Ex') can pass parameters (such as a player ID) to the function.

| Name           | Description                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| funcname[]     | The name of a public function to call when the timer expires.                                                                              |
| interval       | Interval in milliseconds (1 second = 1000 MS).                                                                                             |
| repeating      | Boolean (true/false (or 1/0)) that states whether the timer should be called repeatedly (can only be stopped with KillTimer) or only once. |
| format[]       | Special format indicating the types of values the timer will pass.                                                                         |
| {Float,\_}:... | Indefinite number of arguments to pass (must follow format specified in previous parameter).                                               |

## Returns

The ID of the timer that was started. Timer IDs start at 1 and are never reused. There are no internal checks to verify that the parameters passed are valid (e.g. duration not a minus value). Y_Less' 'fixes2' plugin implements these checks and also vastly improves the accuracy of timers, and also adds support for array/string passing.

## Examples

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - The function that will be called
// 5000 - 5000 MS (5 seconds). This is the interval. The timer will be called after 5 seconds.
// false - Not repeating. Will only be called once.
// "i" - I stands for integer (whole number). We are passing an integer (a player ID) to the function.
// playerid - The value to pass. This is the integer specified in the previous parameter.
// The event callback (OnPlayerSpawn) - we will start a timer here
public OnPlayerSpawn(playerid)
{
    // Anti-Spawnkill (5 seconds)

    // Set their health very high so they can't be killed
    SetPlayerHealth(playerid, 999999);

    // Notify them
    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");

    // Start a 5 second timer to end the anti-spawnkill
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// Forward (make public) the function so the server can 'see' it
forward EndAntiSpawnKill(playerid);
// The timer function - the code to be executed when the timer is called goes here
public EndAntiSpawnKill(playerid)
{
    // 5 seconds has passed, so let's set their health back to 100
    SetPlayerHealth(playerid, 100);

    // Let's notify them also
    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");
    return 1;
}
```

## Notes

:::tip

Timer ID variables should be initialized to -1 when they can to minimise the chance of accidentally killing timer ID 0 by mistake (or use timer ID 0 up at the start of OnGameModeInit). Timer intervals are not accurate (roughly 25% off). There are fixes available here and here. The function to be called must be public. That means it has to be forwarded.

:::

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [KillTimer](KillTimer): Stop a timer.
- [CallLocalFunction](CallLocalFunction): Call a function in the script.
- [CallRemoteFunction](CallRemoteFunction): Call a function in any loaded script.
