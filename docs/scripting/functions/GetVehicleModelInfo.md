---
title: GetVehicleModelInfo
description: Retrieve information about a specific vehicle model such as the size or position of seats.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Retrieve information about a specific vehicle model such as the size or position of seats

| Name         | Description                          											|
| ------------ | ------------------------------------------------------------------------------ |
| vehiclemodel | The vehicle model to get info of.    											|
| infotype     | The [type of information](../resources/vehicleinformationtypes) to retrieve.	|
| &Float:X     | A float to store the X value.        											|
| &Float:Y     | A float to store the Y value.        											|
| &Float:Z     | A float to store the Z value.        											|

## Returns

The vehicle info is stored in the specified variables.

## Examples

```c
new
	Float: x, Float: y, Float: z;
//Get the size of vehicle model 411 (Infernus)
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);
//Prints "The infernus is 2.3m wide, 5.7m long and 1.3m high" into the console
printf("The infernus is %.1fm wide, %.1fm long and %.1fm high", X, Y, Z);
```

## Related Functions

- [GetVehicleModel](GetVehicleModel): Get the model id of a vehicle.
