---
title: DestroyPickup
description: Uništava pickup kreiran sa CreatePickup.
tags: []
---

## Deskripcija

Uništava pickup kreiran sa CreatePickup.

| Ime    | Deskripcija                                           |
| ------ | ----------------------------------------------------- |
| pickup | ID pickup-a koji se unišava (kreiran sa CreatePickup) |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Kreira pickup za pancir.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

//nekoliko trenutaka kasnije...
DestroyPickup(pickup_armour);
```

## Srodne Funkcije

- [CreatePickup](CreatePickup): Kreiraj pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Pozvano kada igrač pokupi pickup.
