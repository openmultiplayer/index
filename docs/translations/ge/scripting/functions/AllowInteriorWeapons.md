---
title: AllowInteriorWeapons
description: Toggle whether the usage of weapons in interiors is allowed or not.
tags: []
---

## Description

Toggle whether the usage of weapons in interiors is allowed or not.

| Name  | Description                                                                               |
| ----- | ----------------------------------------------------------------------------------------- |
| allow | 1 to enable weapons in interiors (enabled by default), 0 to disable weapons in interiors. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    // This will allow weapons inside interiors.
    AllowInteriorWeapons(1);
    return 1;
}
```

## Notes

:::warning

This function does not work in the current SA:MP version!

:::

## Related Functions

- [SetPlayerInterior](SetPlayerInterior): Set a player's interior.
- [GetPlayerInterior](GetPlayerInterior): Get the current interior of a player.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Called when a player changes interior.
