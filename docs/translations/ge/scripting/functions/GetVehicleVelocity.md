---
title: GetVehicleVelocity
description: Get the velocity of a vehicle on the X, Y and Z axes.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Get the velocity of a vehicle on the X, Y and Z axes.

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the velocity of.                                        |
| &Float:x  | A float variable in to which to store the vehicle's X velocity, passed by reference. |
| &Float:y  | A float variable in to which to store the vehicle's Y velocity, passed by reference. |
| &Float:z  | A float variable in to which to store the vehicle's Z velocity, passed by reference. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

The vehicle's velocity is stored in the specified variables.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext) && IsPlayerInAnyVehicle(playerid))
    {
        new
            Float: vehVelocity[3],
            clientMessage[80];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        format(clientMessage, sizeof(clientMessage), "You are going at a velocity of X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

This function can be used to retrieve a vehicle's speed (km/h, m/s or mph). For more info look here.

:::

## Related Functions

- [GetPlayerVelocity](GetPlayerVelocity): Get a player's velocity.
- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [SetPlayerVelocity](SetPlayerVelocity): Set a player's velocity.
