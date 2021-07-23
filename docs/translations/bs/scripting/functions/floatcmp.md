---
title: floatcmp
description: floatcmp se može koristiti za međusobno uspoređivanje vrijednosti plutajućeg stanja, kako bi se potvrdila usporedba.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

floatcmp se može koristiti za međusobno uspoređivanje vrijednosti plutajućeg stanja, kako bi se potvrdila usporedba.

| Ime   | Deskripcija                          |
| ----- | ------------------------------------ |
| oper1 | Prva float vrijednost za usporedbu.  |
| oper2 | Druga float vrijednost za usporedbu. |

## Returns

0 ako se vrijednost podudara, 1 ako je prva vrijednost veća i -1 ako je druga vrijednost veća.

## Primjeri

```c
floatcmp(2.0, 2.0); // Vraća 0 jer se podudaraju.
floatcmp(1.0, 2.0) // Vraća -1 jer je druga vrijednost veća.
floatcmp(2.0, 1.0) // Vraća 1 jer je prva vrijednost veća.
```

## Srodne Funkcije
