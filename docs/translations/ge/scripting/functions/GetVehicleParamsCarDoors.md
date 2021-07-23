---
title: GetVehicleParamsCarDoors
description: Allows you to retrieve the current state of a vehicle's doors.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Allows you to retrieve the current state of a vehicle's doors

| Name       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| vehicleid  | The ID of the vehicle                                                   |
| &driver    | The integer to save the state of the driver's door to.                  |
| &passenger | The integer to save the state of the passenger's door to.               |
| &backleft  | The integer to save the state of the rear left door to (if available).  |
| &backright | The integer to save the state of the rear right door to (if available). |

## Returns

The vehicle's doors state is stored in the specified variables.

## Notes

:::tip

The values returned in each variable are as follows:

-1: Door state not set 1: Open 0: Closed

:::

## Related Functions

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Open and close the doors of a vehicle.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Open and close the windows of a vehicle.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Retrive the current state of a vehicle's windows
