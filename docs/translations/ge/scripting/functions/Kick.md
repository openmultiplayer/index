---
title: Kick
description: Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.
tags: ["administration"]
---

## Description

Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.

| Name     | Description                   |
| -------- | ----------------------------- |
| playerid | The ID of the player to kick. |

## Returns

This function always returns 1, even if the function failed to execute (player specified doesn't exist).

## Notes

:::warning

As of SA-MP 0.3x, any action taken directly before Kick() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the kick.

:::

## Examples

```c
// In order to display a message (eg. reason) for the player before the connection is closed
// you have to use a timer to create a delay. This delay only needs to be a few milliseconds long,
// but this example uses a full second just to be on the safe side.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Kick the player who executed this command.

        // First, send them a message.
        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");

        // Actually kick them a second later on a timer.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Related Functions

- [Ban](Ban): Ban a player from playing on the server.
- [BanEx](BanEx): Ban a player with a custom reason.
