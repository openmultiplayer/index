---
title: GivePlayerWeapon
description: Dajte igraču oružje sa određenom količinom streljiva.
tags: ["player"]
---

## Deskripcija

Dajte igraču oružje sa određenom količinom streljiva.

| Ime      | Deskripcija                        |
| -------- | ---------------------------------- |
| playerid | ID igrača za dati oružje.          |
| weaponid | ID oružja za dati igraču.          |
| ammo     | Količina streljiva za dati igraču. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
GivePlayerWeapon(playerid, 26, 64); // Dajte igraču sačmaricu sa 64 streljiva
```

## Srodne Funkcije

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Postavite igračevo "armed" oružje.
- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
