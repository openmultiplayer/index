---
title: funcidx
description: Ova funkcija vraća ID javne funkcije po imenu.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija vraća ID javne funkcije po imenu.

| Ime          | Deskripcija                           |
| ------------ | ------------------------------------- |
| const name[] | Ime javne funkcije za dobivanje ID-a. |

## Returns

ID funkcije (ID-ovi počinju na 0). -1 ako funkcija ne postoji.

## Primjeri

```c
public OnFilterScriptInit()
{
    printf("ID od OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```

## Srodne Funkcije

- [CallLocalFunction](CallLocalFunction): Pozovite funkciju u skripti.
- [CallRemoteFunction](CallRemoteFunction): Pozovite funkciju u bilo kojoj učitanoj skripti.
