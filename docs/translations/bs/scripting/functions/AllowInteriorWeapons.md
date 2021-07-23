---
title: AllowInteriorWeapons
description: O(ne)mogućava da li je korištenje oružja u enterijerima dozvoljeno ili nije.
tags: []
---

## Deskripcija

O(ne)mogućava da li je korištenje oružja u interijerima dozvoljeno ili nije.

| Ime   | Deskripcija                                                                                                                 |
| ----- | --------------------------------------------------------------------------------------------------------------------------- |
| allow | 1 da odobrite oružja u enterijerima (Po zadanim postavkama je odobreno), 0 da onemogućite korištenje oružja u enterijerima. |

## Returns

Ova funkcija ne return-a nikakve specifične vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    // Ovo dozvoljava da se oružja koriste u enterijerima.
    AllowInteriorWeapons(1);
    return 1;
}
```

## Zabilješke

:::warning

Ova funkcija ne radi u trenutnoj verziji SA:MP-a!

:::

## Srodne Funkcije

- [SetPlayerInterior](SetPlayerInterior.md): Postavi igraču enterijer.
- [GetPlayerInterior](GetPlayerInterior.md): Doznaj igračev trenutni enterijer.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange.md): Pozvan kada igrač promijeni enterijer.
