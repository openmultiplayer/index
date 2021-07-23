---
title: GivePlayerMoney
description: Dajte novac igraču ili ga uzmite.
tags: ["player"]
---

## Deskripcija

Dajte novac igraču ili ga uzmite.

| Ime      | Deskripcija                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| playerid | ID igrača za dati ili oduzeti novac.                                                     |
| money    | Količina novca za dati igraču. Koristi minus vrijednost da mu uzmeš novac (npr. -10000). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
       // Nagradi $1000 ubicu
       GivePlayerMoney(killerid, 1000);
       SendClientMessage(killerid, -1, "Nagrađen si sa $1000 za kill.");
    }

    // Uzmi $500 od igrača koji je umro.
    GivePlayerMoney(playerid, -500);
}
```

## Srodne Funkcije

- [ResetPlayerMoney](ResetPlayerMoney): Postavite novac igrača na $0.
- [GetPlayerMoney](GetPlayerMoney): Provjeri koliko novca igrač ima.
