---
title: SetGameModeText
description: Postavi ime gamemode-a, koje se pojavljuje u pretraživaču servera (server listi).
tags: []
---

## Deskripcija

Postavi ime gamemode-a, koje se pojavljuje u pretraživaču servera (server listi).

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| string[] | Ime gamemode-a za prikazati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    SetGameModeText("dDOT-GM v1.0");
    return 1;
}
```

## Srodne Funkcije
