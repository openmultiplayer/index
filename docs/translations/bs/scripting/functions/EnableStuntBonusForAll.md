---
title: EnableStuntBonusForAll
description: Omogućuje ili onemogućava stunt bonuse za sve igrače.
tags: []
---

## Deskripcija

Omogućuje ili onemogućava stunt bonuse za sve igrače. Ako je omogućeno, igrači će primati nagrade kada izvedu neki stunt u vozilu (npr. wheelie).

| Ime    | Deskripcija                                       |
| ------ | ------------------------------------------------- |
| enable | 1 da uključite stunt bonuse i 0 da ih isključite. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(0);
    return 1;
}
```

## Srodne Funkcije

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): Omogućuje ili onemogućava stunt bonuse za igrača.
