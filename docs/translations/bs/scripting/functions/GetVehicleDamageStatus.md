---
title: GetVehicleDamageStatus
description: Dohvatite status oštećenja vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

:::tip

Za neke korisne funkcije za rad sa vrijednostima oštećenja vozila pogledajte [ovdje](../resources/damagestatus).

:::

## Deskripcija

Dohvatite status oštećenja vozila.

| Ime       | Deskripcija                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| vehicleid | ID vozila za dobiti status oštećenja.                                          |
| panels    | Varijabla za pohraniti podatke o oštećenjima panela, proslijeđeno referencom.  |
| doors     | Varijabla za pohraniti podatke o oštećenjima vrata, proslijeđeno referencom.   |
| lights    | Varijabla za pohraniti podatke o oštećenjima svjetla, proslijeđeno referencom. |
| tires     | Varijabla za pohraniti podatke o oštećenjima guma, proslijeđeno referencom.    |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeno vozilo ne postoji.

## Primjeri

```c
new
    panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
printf("Vehicle Status: [Paneli]: %d - [Vrata]: %d - [Svjetla]: %d - [Gume]: %d", panels, doors, lights, tires);
```

## Srodne Funkcije

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Ažurirajte štetu na vozilu.
- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [RepairVehicle](RepairVehicle): U potpunosti popravite vozilo.
- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Pozvano kada se stanje oštećenja vozila promijeni.
