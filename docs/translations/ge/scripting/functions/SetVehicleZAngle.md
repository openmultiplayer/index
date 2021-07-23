---
title: SetVehicleZAngle
description: Set the Z rotation (yaw) of a vehicle.
tags: ["vehicle"]
---

## Description

Set the Z rotation (yaw) of a vehicle.

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| vehicleid     | The ID of the vehicle to set the rotation of. |
| Float:z_angle | The Z angle to set.                           |

## Returns

1: The function executed successfully.

0: The function failed to execute. The vehicle specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            currentVehicle,
            Float: angle;
        currentVehicle = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(currentVehicle, angle);
        SetVehicleZAngle(currentVehicle, angle);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");
        return 1;
    }

     return 0;
}
```

## Notes

:::**tip**

A vehicle's X and Y (pitch and roll) rotation will be reset when this function is used. The X and Y rotations can not be set. This function does not work on unoccupied vehicles (It is believed to be a GTA limitation).

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [SetVehiclePos](SetVehiclePos): Set the position of a vehicle.
