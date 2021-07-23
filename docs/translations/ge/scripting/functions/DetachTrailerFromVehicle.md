---
title: DetachTrailerFromVehicle
description: Detach the connection between a vehicle and its trailer, if any.
tags: ["vehicle"]
---

## Description

Detach the connection between a vehicle and its trailer, if any.

| Name      | Description                |
| --------- | -------------------------- |
| vehicleid | ID of the pulling vehicle. |

## Returns

This function does not return any specific values.

## Examples

```c
DetachTrailerFromVehicle(vehicleid);
```

## Related Functions

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
