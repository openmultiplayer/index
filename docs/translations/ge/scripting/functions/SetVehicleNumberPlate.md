---
title: SetVehicleNumberPlate
description: Set a vehicle numberplate.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3c' />

## Description

Set a vehicle numberplate.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | The ID of the vehicle to set the number plate of.      |
| numberplate | The text that should be displayed on the number plate. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist

## Examples

```c
new
	vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```

## Notes

:::tip

This function has no internal error checking. Do not assign custom number plates to vehicles without plates (boats, planes, etc) as this will result in some unneeded processing time on the client. The vehicle must be re-spawned or re-streamed for the changes to take effect. There's a limit of 32 characters on each number plate (including embedded colors). The text length that can be seen on the number plate is around 9 to 10 characters, more characters will cause the text to split. Some vehicle models has a backward number plate, e.g. Boxville (498) (as an alternative to this vehicle you can use vehicle model ID 609, which is a duplicated Boxville (aka Boxburg), but with a regular number plate). This function only works in versions 0.2.1, 0.2.2, 0.2x and 0.3c (and beyond).

:::

:::tip

You can use color embedding on the number plate text.

:::

## Related Functions

- [SetVehicleToRespawn](SetVehicleToRespawn): Respawn a vehicle.
- [ChangeVehicleColor](ChangeVehicleColor): Set the color of a vehicle.
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Change the paintjob on a vehicle.
