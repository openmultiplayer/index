---
title: SetVehicleHealth
description: Set a vehicle's health.
tags: ["vehicle"]
---

## Description

Set a vehicle's health. When a vehicle's health decreases the engine will produce smoke, and finally fire when it decreases to less than 250 (25%).

| Name         | Description                                 |
| ------------ | ------------------------------------------- |
| vehicleid    | The ID of the vehicle to set the health of. |
| Float:health | The health, given as a float value.         |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the vehicle does not exist.

## Examples

```c
if (strcmp("/fixengine", cmdtext, true) == 0)
{
    new
        vehicleid = GetPlayerVehicleID(playerid);

    SetVehicleHealth(vehicleid, 1000);
    SendClientMessage(playerid, COLOUR_WHITE, "The vehicles engine has been fully repaired.");
    return 1;
}
```

## Notes

:::tip

Full vehicle health is 1000. Higher values are possible. For more information on health values, see [this](../resources/vehiclehealth) page.

:::

## Related Functions

- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle): Fully repair a vehicle.
- [SetPlayerHealth](SetPlayerHealth): Set a player's health.
- [OnVehicleDeath](../callbacks/OnVehicleDeath): Called when a vehicle is destroyed.
