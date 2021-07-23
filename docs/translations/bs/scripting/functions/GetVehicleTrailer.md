---
title: GetVehicleTrailer
description: Dobij ID prikolice prikvačene za vozilo.
tags: ["vehicle"]
---

## Deskripcija

Dobij ID prikolice prikvačene za vozilo.

| Ime       | Deskripcija                    |
| --------- | ------------------------------ |
| vehicleid | ID vozila za dobiti prikolicu. |

## Returns

ID vozila prikolice ili 0 ako nije prikvačena prikolica.

## Primjeri

```c
new
    trailerId = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerId);
```

## Zabilješke

:::warning

Ova funkcija ne radi za vozove.

:::

## Srodne Funkcije

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Prikvači prikolicu za vozilo.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Odvojite prikolicu od vozila.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Provjeri da li je prikolica prikvačena za vozilo.
