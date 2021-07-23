---
title: SetGravity
description: Set the gravity for all players.
tags: []
---

## Description

Set the gravity for all players.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Float:gravity | The value that the gravity should be set to (between -50 and 50). |

## Returns

This function always returns 1, even when it fails to execute if the gravity is out of the limits (lower than -50 or high than +50).

## Examples

```c
public OnGameModeInit()
{
    // Set moon-like gravity
    SetGravity(0.001);

    return 1;
}
```

## Notes

:::warning

Default gravity is 0.008.

:::

## Related Functions

- [GetGravity](GetGravity): Get the currently set gravity.
- [SetWeather](SetWeather): Set the global weather.
- [SetWorldTime](SetWorldTime): Set the global server time.
