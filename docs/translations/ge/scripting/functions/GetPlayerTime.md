---
title: GetPlayerTime
description: Get the player's current game time.
tags: ["player"]
---

## Description

Get the player's current game time. Set by SetWorldTime, or by the game automatically if TogglePlayerClock is used.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player to get the game time of.                  |
| &hour    | A variable in which to store the hour, passed by reference.    |
| &minute  | A variable in which to store the minutes, passed by reference. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player specified does not exist.

The current game time is stored in the specified variables.

## Examples

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "The time is 13:37!");
}
```

## Related Functions

- [SetPlayerTime](SetPlayerTime): Set a player's time.
- [SetWorldTime](SetWorldTime): Set the global server time.
- [TogglePlayerClock](TogglePlayerClock): Toggle the clock in the top-right corner.
