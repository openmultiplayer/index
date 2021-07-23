---
title: GetVehicleVirtualWorld
description: Get the virtual world of a vehicle.
tags: ["vehicle"]
---

## Description

Get the virtual world of a vehicle.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the virtual world of. |

## Returns

The virtual world that the vehicle is in.

## Examples

```c
new
	vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```

## Related Functions

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Set the virtual world of a vehicle.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Check what virtual world a player is in.
