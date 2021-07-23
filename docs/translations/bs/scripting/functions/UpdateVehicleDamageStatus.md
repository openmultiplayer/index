---
title: UpdateVehicleDamageStatus
description: Postavlja različite statuse vizuelnog oštećenja vozila, kao što su ispucale gume, slomljena svjetla i oštećeni paneli.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

:::tip

Za neke korisne funkcije za rad s vrijednostima oštećenja vozila pogledajte [ovdje](../resources/damagestatus).

:::

## Deskripcija

Postavlja različite statuse vizuelnog oštećenja vozila, kao što su ispucale gume, slomljena svjetla i oštećeni paneli.

| Ime       | Deskripcija                                       |
| --------- | ------------------------------------------------- |
| vehicleid | ID vozila za utvrđivanje štete.                   |
| panels    | Skup bitova koji sadrže status oštećenja panela.  |
| doors     | Skup bitova koji sadrže status oštećenja vrata.   |
| lights    | Skup bitova koji sadrže status oštećenja svjetla. |
| tires     | Skup bitova koji sadrže status oštećenja guma.    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new
    panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, 15); // Stavljajući gume na 15 biće probušene
```

## Srodne Funkcije

- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [RepairVehicle](RepairVehicle): U potpunosti popravite vozilo.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Dobij status oštečenja za svaki dio posebno.
- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Pozvano kada se stanje oštećenja vozila promijeni.
