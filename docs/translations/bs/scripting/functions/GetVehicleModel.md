---
title: GetVehicleModel
description: Dobij ID modela vozila.
tags: ["vehicle"]
---

## Deskripcija

Dobij ID modela vozila.

| Ime       | Deskripcija                |
| --------- | -------------------------- |
| vehicleid | ID vozila za dobiti Model. |

## Returns

ID modela vozila, ili 0 ako vozilo ne postoji.

## Primjeri

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 je model Infernusa
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerVehicleID](GetPlayerVehicleID): Dobij ID vozila u kojem je igrač trenutno.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
- [GetVehicleZAngle](GetVehicleZAngle): Provjerite trenutni ugao vozila.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
