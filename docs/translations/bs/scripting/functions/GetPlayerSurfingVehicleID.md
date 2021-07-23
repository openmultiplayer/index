---
title: GetPlayerSurfingVehicleID
description: Dobij ID vozila na kojem igrač surfa (zapeo za krovu vozila).
tags: ["player", "vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij ID vozila na kojem igrač surfa (zapeo za krovu vozila).

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | ID igrača za kojeg želite znati ID vozila za surfanje. |

## Returns

ID vozila kojim igrač surfuje. Ako ne surfaju vozilom ili ako vozilo surfa nema vozača, INVALID_VEHICLE_ID. Ako navedeni uređaj nije povezan, INVALID_VEHICLE_ID također.

## Primjeri

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId == INVALID_VEHICLE_ID)
{
    SendClientMessage(playerid, COLOR_RED, "Ne surfaš.");
}
```

## Srodne Funkcije

- [GetPlayerVehicleID](GetPlayerVehicleID): Dobij ID vozila u kojem je igrač trenutno.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
