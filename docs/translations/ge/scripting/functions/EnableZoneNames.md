---
title: EnableZoneNames
description: This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area.
tags: []
---

## Description

This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area. This is a gamemode option and should be set in the callback OnGameModeInit.

| Name   | Description                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| enable | A toggle option for whether or not you'd like zone names on or off. 0 is off and 1 is on. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableZoneNames(1);
    return 1;
}
```

## Notes

:::warning

This function was removed in SA-MP 0.3. This was due to crashes it caused.

:::

## Related Functions
