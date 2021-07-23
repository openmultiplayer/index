---
title: GetVehicleZAngle
description: Get the rotation of a vehicle on the Z axis (yaw).
tags: ["vehicle"]
---

## Description

Get the rotation of a vehicle on the Z axis (yaw).

| Name           | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| vehicleid      | The ID of the vehicle to get the Z angle of.                            |
| &Float:z_angle | A float variable in which to store the Z rotation, passed by reference. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle does not exist.

The vehicle's rotation is stored in the specified variable.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               currentVeh,
               Float: rotZ,
               clientMessage[40];

          currentVeh = GetPlayerVehicleID(playerid);
          GetVehicleZAngle(currentVeh, rotZ);
          format(clientMessage, sizeof(clientMessage), "The current vehicle rotation is: %.0f", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);

          return 1;
     }

     return 0;
}
```

## Related Functions

- [GetVehicleRotationQuat](GetVehicleRotationQuat): Get the quaternion rotation of a vehicle.
- [SetVehicleZAngle](SetVehicleZAngle): Set the direction of a vehicle.
- [GetVehiclePos](GetVehiclePos): Get the position of a vehicle.
- [GetPlayerFacingAngle](GetPlayerFacingAngle): Check where a player is facing.
