---
title: GetServerVarAsString
description: Dobij string vrijednost server varijable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsString

:::

## Deskripcija

Dobij string vrijednost server varijable.

| Ime             | Deskripcija                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | Ime string varijable za dobiti vrijednost.            |
| buffer[]        | Niz za pohraniti vrijednost, proslijeđeno referencom. |
| len             | Dužina stringa koji će biti pohranjen.                |

## Returns

Dužina returnovanog/vraćenog stringa. 0 ako navedena varijabla servera nije string ili ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new hostname[64];
    GetServerVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## Zabilješke

:::tip

Kad su filterskripte ili plugini navedeni kao ime var, ova funkcija vraća samo ime prve navedene filterskripte ili plugina. Ovo je bug.

:::

:::tip

Napiši 'varlist' u server konzoli da prikažeš listu dostupnih server varijabli i njihovih tipova.

:::

:::warning

Korištenje ove funkcije na bilo čemu osim stringa (cijeli broj, bool ili float) ili nepostojeće varijable servera srušit će vaš server! Ovo je bug.

:::

## Srodne Funkcije

- [GetServerVarAsInt](GetServerVarAsInt): Dohvatite server varijablu kao cijeli broj.
- [GetServerVarAsBool](GetServerVarAsBool): Dohvaćanje varijable poslužitelja kao logičke vrijednosti (boolean).
