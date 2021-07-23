---
title: IsTrailerAttachedToVehicle
description: Checks if a vehicle has a trailer attached to it.
tags: ["vehicle"]
---

## Description

Checks if a vehicle has a trailer attached to it. Use GetVehicleTrailer to get the vehicle ID of the trailer (if any).

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | The ID of the vehicle to check for trailers. |

## Returns

1: The vehicle has a trailer attached.

0: The vehicle does not have a trailer attached.

## Examples

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vehicle %i has a trailer!", vehicleid);
}
```

## Related Functions

- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
- [AttachTrailerToVehicle](AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Detach a trailer from a vehicle.
