---
title: TogglePlayerClock
description: Toggle the in-game clock (top-right corner) for a specific player.
tags: ["player"]
---

## Description

Toggle the in-game clock (top-right corner) for a specific player. When this is enabled, time will progress at 1 minute per second. Weather will also interpolate (slowly change over time) when set using SetWeather/SetPlayerWeather.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The player whose clock you want to enable/disable |
| toggle   | 1 to show and 0 to hide. Hidden by default.       |

## Returns

1: The function executed successfully.

0: The function failed to execute. The specified player does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, 1); // Show the clock
    return 1;
}
```

## Notes

:::tip

Time will automatically advance 6 hours when the player dies.

:::

## Related Functions

- [GetPlayerTime](GetPlayerTime): Get the time of a player.
- [SetPlayerTime](SetPlayerTime): Set a player's time.
- [SetWorldTime](SetWorldTime): Set the global server time.
