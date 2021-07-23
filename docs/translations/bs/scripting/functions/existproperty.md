---
title: existproperty
description: Provjeri da li imovina postoji.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Provjeri da li imovina postoji.

| Ime    | Deskripcija                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| id     | Virtualna mašina za upotrebu. Trebali biste ovo držati kao nulu.             |
| name[] | Ime imovine, trebali biste ovo ostaviti prazno ("").                         |
| value  | Jedinstveni ID imovine. Upotrijebite hash-funkciju za izračunavanje iz niza. |

## Returns

Tačno (true) ako imovina postoji, uostalom netačno (false).

## Primjeri

```c
if ( existproperty(0, "", 123984334) )
{
    //imovina postoji, radi nešto
}
```

## Zabilješke

:::tip

Preporučljivo je da koristite PVars/SVars ili GVar plugin umjesto ovih native-a zbog njihove brzine (spori su).

:::

## Srodne Funkcije

- [setproperty](setproperty): Postavi imovinu.
- [getproperty](getproperty): Dobij vrijednost imovine.
- [deleteproperty](deleteproperty): Obriši imovinu.
