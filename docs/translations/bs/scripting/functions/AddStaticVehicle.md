---
title: AddStaticVehicle
description: Dodaje 'statično' vozilo (modeli su unaprijed učitani za igrač) u gamemode-u.
tags: ["vehicle"]
---

## Deskripcija

Dodaje 'statično' vozilo (modeli su unaprijed učitani za igrač) u gamemode-u.

| Ime                                      | Deskripcija                       |
| ---------------------------------------- | --------------------------------- |
| modelid                                  | ID modela za vozilo.              |
| Float:spawn_X                            | X kordinata za vozilo.            |
| Float:spawn_Y                            | Y kordinata za vozilo.            |
| Float:spawn_Z                            | Z kordinata za vozilo.            |
| Float:z_angle                            | Pravac vozila - angle.            |
| [color1](../resources/vehiclecolorid.md) | ID primarne boje. -1 za random.   |
| [color2](../resources/vehiclecolorid.md) | ID sekundarne boje. -1 za random. |

## Returns

ID vozila koje je kreirano (između 1 i MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) je vozilo koje nije kreirano (limit vozila je dostignut ili je proslijeđen nevažeći model ID vozila).

## Primjeri

```c
public OnGameModeInit()
{
    // Dodaj Hydru u igru
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Srodne Funkcije

- [AddStaticVehicleEx](AddStaticVehicleEx.md): Dodaj statično vozilo na server sa proizvoljnim respawn vremenom.
- [CreateVehicle](CreateVehicle.md): Kreiraj vozilo.
- [DestroyVehicle](DestroyVehicle.md): Uništi vozilo.
