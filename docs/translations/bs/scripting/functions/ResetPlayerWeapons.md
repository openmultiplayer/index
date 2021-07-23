---
title: ResetPlayerWeapons
description: Uklanja sva oružja od igrača.
tags: ["player"]
---

## Deskripcija

Uklanja sva oružja od igrača.

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| playerid | ID igrača čija će oružja biti uklonjena. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Ukloni oružja ubice
    ResetPlayerWeapons(killerid);
    return 1;
}
```

## Zabilješke

:::tip

Da biste uklonili pojedinačno oružje sa igrača, postavite njegovu municiju na 0 pomoću SetPlayerAmmo.

:::

## Srodne Funkcije

- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
