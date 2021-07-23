---
title: DetachTrailerFromVehicle
description: Razdvaja vozilo i prikolicu, ukoliko postoji.
tags: ["vehicle"]
---

## Deskripcija

Razdvaja vozilo i prikolicu, ukoliko postoji.

| Ime       | Deskripcija                |
| --------- | -------------------------- |
| vehicleid | ID vozilo koji vuče        |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
DetachTrailerFromVehicle(vehicleid);
```

## Srodne Funkcije

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Prikvači prikolicu za vozilo.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Provjeri da li je prikolica prikvačena za vozilo.
- [GetVehicleTrailer](GetVehicleTrailer): Provjeri koju prikolicu vozilo vuče.
