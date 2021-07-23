---
title: SetVehicleParamsEx
description: Sets a vehicle's parameters for all players.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3c' />

## Description

Sets a vehicle's parameters for all players.

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the parameters of.                 |
| engine    | Engine status. 0 - Off, 1 - On.                                 |
| lights    | Light status. 0 - Off, 1 - On.                                  |
| alarm     | Vehicle alarm status. If on, the alarm starts. 0 - Off, 1 - On. |
| doors     | Door lock status. 0 - Unlocked, 1 - Locked.                     |
| bonnet    | Bonnet (hood) status. 0 - Closed, 1 - Open.                     |
| boot      | Boot/trunk status. 0 - Closed, 1 - Open.                        |
| objective | Toggle the objective arrow above the vehicle. 0 - Off, 1 - On.  |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the vehicle does not exist.

## Examples

```c
// On top of our script, declaring a global variable
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {-1, ...};

// If setting a single parameter, you should obtain the current parameters so they aren't ALL changed
new
    engine, lights, alarm, doors, bonnet, boot, objective;

// Somewhere where you create the vehicle..
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // ONLY the engine param was changed to VEHICLE_PARAMS_ON (1)

// The function
SetVehicleParamsEx_Fixed(vehicleid, &engine, &lights, &alarm, &doors, &bonnet, &boot, &objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // Kill the timer, reset the timer identifier and then restart it if it was already running
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = -1;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        engine, lights, alarm, doors, bonnet, boot, objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    // Reset the timer identifier
    gVehicleAlarmTimer[vehicleid] = -1;
}
```

## Notes

:::tip

The alarm will not reset when finished, you'll need to reset it by yourself with this function. Lights also operate during the day (Only when ManualVehicleEngineAndLights is enabled).

:::

## Related Functions

- [GetVehicleParamsEx](GetVehicleParamsEx): Get a vehicle's parameters.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Set the parameters of a vehicle for a player.
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Update the vehicle damage.
