---
title: SetVehicleAngularVelocity
description: Sets the angular X, Y and Z velocity of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3b' />

:::info

This function is in _world_ space not _local_ space. If you want to make local space angular velocity adjustments, you must apply a rotation matrix based on the [vehicle rotation quat](GetVehicleRotationQuat).

:::

## Description

Sets the angular X, Y and Z velocity of a vehicle

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the velocity of.       |
| Float:X   | The amount of velocity in the angular X direction.  |
| Float:Y   | The amount of velocity in the angular Y direction . |
| Float:Z   | The amount of velocity in the angular Z direction.  |

## Returns

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
        }
        return 1;
    }
}
```

## Notes

:::warning

This function has no effect on unoccupied vehicles and does not affect trains.

:::

## Related Functions

- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [GetVehicleVelocity](GetVehicleVelocity): Get a vehicle's velocity.
