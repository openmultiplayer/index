---
title: GetPlayerVehicleID
description: Ova funkcija dobija ID vozila u kojem je igrač trenutno.
tags: ["player", "vehicle"]
---

## Deskripcija

Ova funkcija dobija ID vozila u kojem je igrač trenutno. Zabilješka: NE ID modela vozila. Pogledaj GetVehicleModel za to.

| Ime      | Deskripcija                                             |
| -------- | ------------------------------------------------------- |
| playerid | ID player in the vehicle that you want to get the ID of |

## Returns

ID vozila ili 0 ako nije u vozilu.

## Primjeri

```c
// Dodaj 10x Nitro ako je igrač u vozilu. Može biti pozvan u komandi.
new vehicleId;
vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## Srodne Funkcije

- [IsPlayerInVehicle](IsPlayerInVehicle): Provjerite je li igrač u određenom vozilu.
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Provjerite je li igrač u bilo kojem vozilu.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
- [GetVehicleModel](GetVehicleModel): Dobij ID modela vozila.
