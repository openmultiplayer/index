---
title: SetVehicleHealth
description: Postavlja helte (zdravlje/health) vozila.
tags: ["vehicle"]
---

## Deskripcija

Postavlja helte (zdravlje/health) vozila. Kada se health stanje vozila smanji, motor će stvoriti dim, a na kraju i vatru kada padne na manje od 250 (25%).

| Ime          | Deskripcija                            |
| ------------ | -------------------------------------- |
| vehicleid    | ID vozila za postaviti stanje healtha. |
| Float:health | Health, dat kao float vrijednost.      |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da vozilo ne postoji.

## Primjeri

```c
if (strcmp("/fixengine", cmdtext, true) == 0)
{
    new
        vehicleid = GetPlayerVehicleID(playerid);

    SetVehicleHealth(vehicleid, 1000);
    SendClientMessage(playerid, COLOUR_WHITE, "Motor vozila je u potpunosti popravljen.");
    return 1;
}
```

## Zabilješke

:::tip

Ukupan health vozila je 1000. Veće vrijednosti su moguće. Za više informacija o vrijednostima healtha, pogledaj [ovu](../resources/vehiclehealth) stranicu.

:::

## Srodne Funkcije

- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [RepairVehicle](RepairVehicle): U potpunosti popravite vozilo.
- [SetPlayerHealth](SetPlayerHealth): Postavlja igraču helte.
- [OnVehicleDeath](../callbacks/OnVehicleDeath): Pozvano kada vozilo biva uništeno.
