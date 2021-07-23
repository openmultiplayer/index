---
title: AddStaticVehicleEx
description: Dodaje 'statično' vozilo (modeli su unaprijed učitani za igrač) u gamemode-u.
tags: ["vehicle"]
---

## Deskripcija

Dodaje 'statično' vozilo (modeli su unaprijed učitani za igrač) u gamemode-u. Od `AddStaticVehicle` razlikuje se u tome što dozvoljava da se postavi proizvoljno respawn vrijeme za bozilo kada igrač napusti mjesto vozača.

| Ime                                      | Deskripcija                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid                                  | ID modela za vozilo.                                                                                                                                          |
| Float:spawn_X                            | X kordinata za vozilo.                                                                                                                                        |
| Float:spawn_Y                            | Y kordinata za vozilo.                                                                                                                                        |
| Float:spawn_Z                            | Z kordinata za vozilo.                                                                                                                                        |
| Float:z_angle                            | Pravac vozila - angle.                                                                                                                                        |
| [color1](../resources/vehiclecolorid.md) | ID primarne boje. -1 za random.                                                                                                                               |
| [color2](../resources/vehiclecolorid.md) | ID sekundarne boje. -1 za random.                                                                                                                             |
| respawn_delay                            | Vrijeme za koje će se vozilo respawnovati bez vozila, u sekundama.                                                                                            |
| addsiren                                 | Dodano u 0.3.7; neće raditi u ranijim verzijama. Zadana (default) vrijednost mu je 0. Omogućava vozilu da ima sirenu, pod uslovom da vozilo ima sirenu(horn). |

## Returns

ID vozila koje je kreirano (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) je vozilo koje nije kreirano (limit vozila je dostignut ili je proslijeđen nevažeći model ID vozila).

## Primjeri

```c
public OnGameModeInit()
{
    // Dodaj Hydru (520) u igru koja će se respawnovati 15 sekundi nakon što bude napuštena
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Srodne Funkcije

- [AddStaticVehicle](AddStaticVehicle.md): Dodaj statično vozilo.
- [CreateVehicle](CreateVehicle.md): Kreiraj vozilo.
