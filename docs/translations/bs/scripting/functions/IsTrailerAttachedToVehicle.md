---
title: IsTrailerAttachedToVehicle
description: Provjerava ako vozilo ima prikvačenu prikolicu za sebe.
tags: ["vehicle"]
---

## Deskripcija

Provjerava ako vozilo ima prikvačenu prikolicu za sebe. Koristi GetVehicleTrailer da dobiješ ID vozila prikolice (ako ima).

| Ime       | Deskripcija                               |
| --------- | ----------------------------------------- |
| vehicleid | ID vozila za provjeriti ima li prikolicu. |

## Returns

1: Vozilo ima prikvačenu prikolicu.

0: Vozilo nema prikvačenu prikolicu.

## Primjeri

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vozilo %i ima prikolicu!", vehicleid);
}
```

## Srodne Funkcije

- [GetVehicleTrailer](GetVehicleTrailer): Provjeri koju prikolicu vozilo vuče.
- [AttachTrailerToVehicle](AttachTrailerToVehicle): Prikvači prikolicu za vozilo.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Odvojite prikolicu od vozila.
