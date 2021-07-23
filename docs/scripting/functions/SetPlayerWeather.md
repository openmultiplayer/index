---
title: SetPlayerWeather
description: Set a player's weather.
tags: ["player"]
---

## Description

Set a player's weather.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The ID of the player whose weather to set.     |
| weather  | The [weather](../resources/weatherid) to set.  |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly. There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

:::

## Related Functions

- [SetWeather](SetWeather): Set the global weather.
- [SetGravity](SetGravity): Set the global gravity.
