---
title: GetPlayerPoolSize
description: Gets the highest playerid currently in use on the server.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Gets the highest playerid currently in use on the server.

## Examples

```c
FreezeAll()
{
    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```

## Related Functions

- [GetVehiclePoolSize](GetVehiclePoolSize): Gets the highest vehicleid currently in use on the server.
- [GetMaxPlayers](GetMaxPlayers): Gets the maximum number of players that can join the server.
