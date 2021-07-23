---
title: SetWeather
description: Set the world weather for all players.
tags: []
---

## Description

Set the world weather for all players.

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| weatherid | The [weather](../resources/weatherid) to set. |

## Returns

This function does not return any specific values.

## Examples

```c
if (!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## Notes

:::tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly. There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

:::

## Related Functions

- [SetPlayerWeather](SetPlayerWeather): Set a player's weather.
- [SetGravity](SetGravity): Set the global gravity.
