---
title: RepairVehicle
description: U potpunosti popravlja vozilo, uključujući vidljivu štetu (neravnine, udubljenja, ogrebotine, puknute gume itd.).
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

U potpunosti popravlja vozilo, uključujući vidljivu štetu (neravnine, udubljenja, ogrebotine, puknute gume itd.).

| Ime       | Deskripcija             |
| --------- | ----------------------- |
| vehicleid | ID vozila za popraviti. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeno vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "Nisi u vozilu!");
        }

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "Tvoje vozilo je popravljeno!");
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
