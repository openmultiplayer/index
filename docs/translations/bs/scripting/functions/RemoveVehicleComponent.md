---
title: RemoveVehicleComponent
description: Ukloni komponentu sa vozila.
tags: ["vehicle"]
---

## Deskripcija

Ukloni komponentu sa vozila.

| Ime         | Deskripcija                |
| ----------- | -------------------------- |
| vehicleid   | ID vozila.                 |
| componentid | ID komponente za ukloniti. |

## Returns

0 - Komponenta nije uklonjena jer vozilo ne postoji.

1 - Komponenta je uspješno uklonjena sa vozila.

## Primjeri

```c
//ukloni Nitro sa vozila broj 1
RemoveVehicleComponent(1, 1010);
```

## Srodne Funkcije

- [AddVehicleComponent](AddVehicleComponent): Dodaje komponentu na vozilo.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Provjeri koje komponente vozilo ima.
- [GetVehicleComponentType](GetVehicleComponentType): Provjeri tip komponente preko ID-a.
- [OnVehicleMod](../callbacks/OnVehicleMod): Pozvano kada vozilo biva nadograđeno.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Pozvano kada vozilo uđe ili izađe iz mod shopa.
