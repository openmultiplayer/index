---
title: CreateVehicle
description: Creates a vehicle in the world.
tags: ["vehicle"]
---

## Deskripcija

Creates a vehicle in the world. Can be used in place of AddStaticVehicleEx at any time in the script.

| Ime                                   | Deskripcija                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicletype                           | Model vozila.                                                                                                                                        |
| Float:X                               | X kordinata vozila.                                                                                                                                  |
| Float:Y                               | Y kordinata vozila.                                                                                                                                  |
| Float:Z                               | Z kordinata vozila.                                                                                                                                  |
| Float:rotation                        | Rotacija/smjer vozila.                                                                                                                               |
| [color1](../resources/vehiclecolorid) | ID Primarne boje.                                                                                                                                    |
| [color2](../resources/vehiclecolorid) | ID Sekundarne boje                                                                                                                                   |
| respawn_delay                         | Razmak do ponovnog respawnovanja automobila bez vozača u sekundi. Korištenjem -1 spriječit će ponovno respawnovanje vozila.                          |
| addsiren                              | Dodano u 0.3.7; neće raditi u ranijim verzijama. Ima zadanu vrijednost 0. Omogućuje vozilu da ima sirenu, pod uvjetom da vozilo ima sirenu(trubu H). |

## Returns

ID vozila koji je kreiran (1 do MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) ako vozilo nije kreirano (dostignut je limit vozila ili unesen nevažeći model vozila).

0 Ako vozilo nije kreirano (Prošla su vozila 538 ili 537, a to su vozovi).

## Primjeri

```c
public OnGameModeInit()
{
    // Dodaj Hydra (520) u igru sa respawn vremenom od 60 sekundi
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## Zabilješke

:::warning

Vozovi se mogu dodati samo sa AddStaticVehicle i AddStaticVehicleEx.

:::

## Srodne Funkcije

- [DestroyVehicle](DestroyVehicle): Uništi vozilo.
- [AddStaticVehicle](AddStaticVehicle): Dodaj statično vozilo.
- [AddStaticVehicleEx](AddStaticVehicleEx): Dodaj statično vozilo sa prilagođenim vremenom respawnovanja.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): Provjeri da li je sirena vozila upaljena ili ugašena.
- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): Pozvano kada se vozilo respawnuje.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): Pozvano kada se sirena vozila upali ili ugasi.
