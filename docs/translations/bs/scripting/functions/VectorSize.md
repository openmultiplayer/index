---
title: VectorSize
description: Vraća normu (dužinu) navedenog vektora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća normu (dužinu) navedenog vektora.

| Ime     | Deskripcija                |
| ------- | -------------------------- |
| Float:X | Veličina vektora na X osi. |
| Float:Y | Veličina vektora na Y osi. |
| Float:Z | Veličina vektora na Z osi. |

## Returns

Norma (dužina) predviđenog vektora kao float.

## Primjeri

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```

## Srodne Funkcije

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Dobij razmak između igrača i tačke.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Dobij razmak između vozila i tačke.
- [floatsqroot](floatsqroot): Izračunajte kvadratni korijen float vrijednosti.
