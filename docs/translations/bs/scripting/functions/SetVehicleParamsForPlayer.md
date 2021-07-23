---
title: SetVehicleParamsForPlayer
description: Postavi parametre vozila za igrača.
tags: ["player", "vehicle"]
---

## Deskripcija

Postavi parametre vozila za igrača.

| Ime         | Deskripcija                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| vehicle     | ID vozila za postaviti parametre.                                                                   |
| playerid    | ID igrača za kojeg treba postaviti parametre vozila.                                                |
| objective   | 0 da onemogućite cilj (objective) ili 1 da ga prikažete. Ovo je klimava žuta strelica iznad vozila. |
| doorslocked | 0 za otključati vrata ili 1 da ih zaključate.                                                       |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač i/ili vozilo ne postoje.

## Primjeri

```c
// nekad ranije:
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, 1, 0);

// nekad kasnije kada želite respawnovati auto:
new
    iEngine, iLights, iAlarm,
    iDoors, iBonnet, iBoot,
    iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, 0);
// Zaključava svoje vozilo za sve igrače, osim igrača koji je koristio komandu.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext,"/lock",true))
    {
        if (!IsPlayerInAnyVehicle(playerid)) return SendClientMessage(playerid,0xFFFFFFAA,"Moraš biti unutar vozila.");
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

public OnGameModeInit() //ili drugi callback
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //ID 1
    iVehicleObjective[temp][0] = 1; //Marker
    iVehicleObjective[temp][1] = 0; //Zaklujčavanje vrata
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
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //Npr: Black Landstalker u blizini Blueberry Acres-a
    return 1;
}

//Gdje god želite
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, 1, 0); // marker može biti vidljiv samo ako je vozilo učitano za igrača
    }
    return 1;
}
```

## Zabilješke

:::tip

Vozila se moraju respawnovati kako bi se 'objective' uklonio.

:::

:::warning

Od 0.3a verzije morati ćete ponovo primijeniti ovu funkciju kada je OnVehicleStreamIn pozvan.

:::

## Srodne Funkcije

- [SetVehicleParamsEx](SetVehicleParamsEx): Postavlja parametre vozila za sve igrače.
