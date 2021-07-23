---
title: AttachTrailerToVehicle
description: Prikvačite vozilo za drugo vozilo kao prikolicu.
tags: ["vehicle"]
---

## Deskripcija

Prikvačite vozilo za drugo vozilo kao prikolicu.

| Ime       | Deskripcija                                       |
| --------- | ------------------------------------------------- |
| trailerid | ID vozila koje će se vući.                        |
| vehicleid | ID vozila koje će vući.                           |

## Returns

Ova funkcija uvijek returna(vraća) 1, bilo da ni jedan od ID-eva vozila koji su proslijeđeni ne budu validni.

## Primjeri

```c
new vehicleId = CreateVehicle(...);
new trailerId = CreateVehicle(...);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## Zabilješke

:::warning

To će funkcionirati samo ako su oba vozila učitana (streamovana) za igrača (check [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Srodne Funkcije

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Odvojite prikolicu od vozila.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Provjeri da li je prikolica prikvačena za vozilo.
- [GetVehicleTrailer](GetVehicleTrailer): Provjerite koju prikolicu vuče vozilo.
