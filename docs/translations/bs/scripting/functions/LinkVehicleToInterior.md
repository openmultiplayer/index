---
title: LinkVehicleToInterior
description: Povezuje vozilo za enterijer.
tags: ["vehicle"]
---

## Deskripcija

Povezuje vozilo za enterijer. Vozila mogu biti vidljiva samo igračima u istom enterijeru (SetPlayerInterior).

| Ime        | Deskripcija                                          |
| ---------- | ---------------------------------------------------- |
| vehicleid  | ID vozila za povezati sa enterijerom.                |
| interiorid | [Interior ID](../resources/interiorids) za povezati. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da vozilo ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicleId, 6);
}
```

## Srodne Funkcije

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Postavi virtualni svijet vozila.
- [SetPlayerInterior](SetPlayerInterior): Postavlja igraču enterijer
