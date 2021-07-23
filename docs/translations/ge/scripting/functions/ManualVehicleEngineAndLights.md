---
title: ManualVehicleEngineAndLights
description: Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3c' />

## Description

Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.

## Examples

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();

    return 1;
}
```

## Notes

:::tip

Is it not possible to reverse this function after it has been used. You must either use it or not use it.

:::

## Related Functions

- [SetVehicleParamsEx](SetVehicleParamsEx): Sets a vehicle's params for all players.
- [GetVehicleParamsEx](GetVehicleParamsEx): Get a vehicle's parameters.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Set the parameters of a vehicle for a player.
