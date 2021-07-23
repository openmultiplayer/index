---
title: GetVehicleComponentInSlot
description: Dohvaća ID instalirane komponente (modshop mod(ifikacija)) na vozilu u određenom slotu.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvaća ID instalirane komponente (modshop mod(ifikacija)) na vozilu u određenom slotu.

| Ime       | Deskripcija                                                              |
| --------- | ------------------------------------------------------------------------ |
| vehicleid | ID vozila za provjeriti komponentu.                                      |
| slot      | [Slot komponente](../resources/Componentslots) za provjeriti komponente. |

## Returns

ID instalirane komponente u određenom slotu. Returna/vraća 0 ako nema komponente u određenom slotu tog vozila, ili vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext) && IsPlayerInAnyVehicle(playerid))
    {
        new
            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);

        if (component == 1049)
        {
            SendClientMessage(playerid, -1, "Imaš Alien spoiler instaliran na vaš Elegy!");
        }
    }
}
```

## Zabilješke

:::warning

Poznati Bug(ovi): Ne radi za CARMODTYPE_STEREO. Dijelove prednjeg branika spremljeni su u slot CARMODTYPE_FRONT_BUMPER. Ako su u vozilu instalirana oba, ova funkcija vraća samo ono zadnje instalirano. I stražnji branici spremljeni su u slot CARMODTYPE_REAR_BUMPER. Ako su u vozilu instalirana oba, ova funkcija vraća samo ono zadnje instalirano. Lijevi i desni "skirt" spremljeni su u slot CARMODTYPE_SIDESKIRT. Ako su u vozilu instalirana oba, ova funkcija vraća samo ono zadnje instalirano.

:::

## Srodne Funkcije

- [AddVehicleComponent](AddVehicleComponent): Dodaje komponentu na vozilo.
- [GetVehicleComponentType](GetVehicleComponentType): Provjeri tip komponente preko ID-a.
- [OnVehicleMod](../callbacks/OnVehicleMod): Pozvano kada vozilo biva nadograđeno.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Pozvano kada vozilo uđe ili izađe iz mod shopa.
