---
title: AttachTrailerToVehicle
description: Attach a vehicle to another vehicle as a trailer.
tags: ["vehicle"]
---

## Description

Attach a vehicle to another vehicle as a trailer.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| trailerid | The ID of the vehicle that will be pulled.        |
| vehicleid | The ID of the vehicle that will pull the trailer. |

## Returns

This function always returns 1, even if neither of the vehicle IDs passed are valid.

## Examples

```c
new vehicleId = CreateVehicle(...);
new trailerId = CreateVehicle(...);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## Notes

:::warning

This will only work if both vehicles are streamed in for a player (check [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Related Functions

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Detach a trailer from a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
