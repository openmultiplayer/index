---
title: SetVehicleToRespawn
description: Sets a vehicle back to the position at where it was created.
tags: ["vehicle"]
---

## Description

Sets a vehicle back to the position at where it was created.

| Name      | Description                      |
| --------- | -------------------------------- |
| vehicleid | The ID of the vehicle to respawn |

## Returns

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist

## Examples

```c
// Respawns the first vehicle.
SetVehicleToRespawn(1);
for(new i = GetVehiclePoolSize(); i > 0; i--)
{
    SetVehicleToRespawn(i);
}
```

## Related Functions

- [CreateVehicle](CreateVehicle): Create a vehicle.
- [DestroyVehicle](DestroyVehicle): Destroy a vehicle.
