---
title: SetVehicleParamsForPlayer
description: Set the parameters of a vehicle for a player.
tags: ["player", "vehicle"]
---

## Description

Set the parameters of a vehicle for a player.

| Name        | Description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| vehicle     | The ID of the vehicle to set the parameters of.                                               |
| playerid    | The ID of the player to set the vehicle's parameters for.                                     |
| objective   | 0 to disable the objective or 1 to show it. This is a bobbing yellow arrow above the vehicle. |
| doorslocked | 0 to unlock the doors or 1 to lock them.                                                      |

## Returns

1: The function executed successfully.

0: The function failed to execute. The player and/or vehicle specified do not exist.

## Examples

```c
// sometime earlier:
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, 1, 0);

// sometime later when you want the vehicle to respawn:
new
    iEngine, iLights, iAlarm,
    iDoors, iBonnet, iBoot,
    iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, 0);
// Locks own car for all players, except the player who used the command.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext,"/lock",true))
    {
        if (!IsPlayerInAnyVehicle(playerid)) return SendClientMessage(playerid,0xFFFFFFAA,"You have to be inside a vehicle.");
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (i == playerid) continue;
            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid),i,0,1);
        }
        return 1;
    }
    return 0;
}
// Will show vehicle markers for players streaming in for 0.3a+
new iVehicleObjective[MAX_VEHICLES][2];

public OnGameModeInit() //Or another callback
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //ID 1
    iVehicleObjective[temp][0] = 1; //Marker
    iVehicleObjective[temp][1] = 0; //Door Lock
    return 1;
}

stock SetVehicleParamsForPlayerEx(vehicleid, playerid, objective, doorslocked)
{
    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
    iVehicleObjective[vehicleid][0] = objective;
    iVehicleObjective[vehicleid][1] = doorslocked;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);
}
//Top
new myMarkedCar;

public OnGameModeInit() //Or another callback
{
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //For example: Black Landstalker near Blueberry Acres
    return 1;
}

//Whatever your want
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, 1, 0); // marker can be visible only if the vehicle streamed for player
    }
    return 1;
}
```

## Notes

:::tip

Vehicles must be respawned for the 'objective' to be removed.

:::

:::warning

Since 0.3a you will have to reapply this function when OnVehicleStreamIn is called.

:::

## Related Functions

- [SetVehicleParamsEx](SetVehicleParamsEx): Sets a vehicle's params for all players.
