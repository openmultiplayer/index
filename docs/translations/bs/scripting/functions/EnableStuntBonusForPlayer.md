---
title: EnableStuntBonusForPlayer
description: Omogućuje ili onemogućava stunt bonuse za igrača.
tags: ["player"]
---

## Deskripcija

Omogućuje ili onemogućava stunt bonuse za igrača. Omogućeno po zadanim postavkama.

| Ime      | Deskripcija                                              |
| -------- | -------------------------------------------------------- |
| playerid | ID igrača za kojeg se uključuju/isključuju stunt bonusi. |
| enable   | 1 da uključite stunt bonuse i 0 da ih isključite.        |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
   EnableStuntBonusForPlayer(playerid, 0); // Onemogućite stunt bonuse kad se igrač konektuje na server.
}
```

## Srodne Funkcije

- [EnableStuntBonusForAll](EnableStuntBonusForAll): Omogućuje ili onemogućava stunt bonuse za sve igrače.
