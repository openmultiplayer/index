---
title: deleteproperty
description: Izbriši prethodno postavljenu imovinu (setproperty).
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Izbriši prethodno postavljenu imovinu (setproperty).

| Ime   | Deskripcija                                                                  |
| ----- | ---------------------------------------------------------------------------- |
| id    | Virtualna mašina za upotrebu. Trebali biste ovo držati kao nulu.             |
| Ime[] | Ime imovine, trebali biste ovo ostaviti prazno ("").                         |
| value | Jedinstveni ID imovine. Upotrijebite hash-funkciju za izračunavanje iz niza. |

## Returns

Vrijednost imovine. Ako imovina ne postoji, funkcija returna/vrača 0.

## Primjeri

```c
deleteproperty(0, "", 123984334);
```

## Zabilješke

:::tip

Preporučljivo je da koristite PVars/SVars ili GVar plugin umjesto ovih native-a zbog njihove brzine (spori su).

:::

## Srodne Funkcije

- [setproperty](setproperty): Postavi imovinu.
- [getproperty](getproperty): Dobij vrijednost imovine.
- [existproperty](existproperty): Provjeri da li imovina postoji.
