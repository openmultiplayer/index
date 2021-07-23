---
title: SetWorldTime
description: Sets the world time (for all players) to a specific hour.
tags: []
---

## Description

Sets the world time (for all players) to a specific hour.

| Name | Description            |
| ---- | ---------------------- |
| hour | The hour to set (0-23) |

## Returns

This function does not return any specific values.

## Examples

```c
// Set the time to 12 o'clock (noon)
SetWorldTime(12);
```

## Notes

:::tip

This function is only relevant for players that do not use a passing clock - see TogglePlayerClock.

:::

:::tip

To set the minutes and/or to set the time for individual players, see SetPlayerTime.

:::

## Related Functions

- [SetPlayerTime](SetPlayerTime): Set a player's time.
- [SetWeather](SetWeather): Set the global weather.
- [SetGravity](SetGravity): Set the global gravity.
