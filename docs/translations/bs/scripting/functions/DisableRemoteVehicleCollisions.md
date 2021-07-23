---
title: DisableRemoteVehicleCollisions
description: Igraču onemogućava sudare između zauzetih vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Igraču onemogućava sudare između zauzetih vozila.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača kojem želite da onemogućite sudaranje. |
| disable  | 1 da onemogućite sudare, 0 da omogućite sudare.  |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Sudar vozila za vas je sada '%s'", (GetPVarInt(playerid, "vehCollision") != 1) ? ("Disabled") : ("Enabled"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        SetPVarInt(playerid, "vehCollision", !GetPVarInt(playerid, "vehCollision"));

        DisableRemoteVehicleCollisions(playerid, GetPVarInt(playerid, "vehCollision"));
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije
