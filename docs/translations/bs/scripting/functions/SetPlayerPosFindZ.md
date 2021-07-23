---
title: SetPlayerPosFindZ
description: Ovo postavlja poziciju igrača a potom prilagođava igračevu Z-kordinatu na najbliže čvrsto tlo ispod pozicije (položaja).
tags: ["player"]
---

## Deskripcija

Ovo postavlja poziciju igrača a potom prilagođava igračevu Z-kordinatu na najbliže čvrsto tlo ispod pozicije (položaja).

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za postaviti poziciju.     |
| Float:x  | X kordinata za pozicionirati igrača. |
| Float:y  | X kordinata za pozicionirati igrača. |
| Float:z  | Z kordinata za pozicionirati igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
SetPlayerPosFindZ(playerid, 1234.5, 1234.5, 1000.0);
```

## Zabilješke

:::warning

Ova funkcija ne radi ako su nove kordinate mnogo daleko od pozicije na kojima je igrač trenutno. Z visina će biti 0 što će igrača u većini slučajeva staviti pod zemlju. Vrlo je preporučljivo da koristite MapAndreas ili ColAndreas plugine umjesto ovoga.

:::

## Srodne Funkcije

- [SetPlayerPos](SetPlayerPos): Postavite poziciju igrača.
- [OnPlayerClickMap](../callbacks/OnPlayerClickMap): Pozvano kada igrač postavi marker ili target na mapi u pause meniju.
