---
title: GetVehicleModel
description: Gets the model ID of a vehicle.
tags: ["vehicle"]
---

## Description

Gets the model ID of a vehicle.

| Name      | Description                                |
| --------- | ------------------------------------------ |
| vehicleid | The ID of the vehicle to get the model of. |

## Returns

The vehicle's model ID, or 0 if the vehicle doesn't exist.

## Examples

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 is the Infernus model
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## Related Functions

- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [GetVehiclePos](GetVehiclePos): Get the position of a vehicle.
- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
