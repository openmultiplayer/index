---
title: SetPlayerScore
description: Postavite rezultat (score) igrača.
tags: ["player"]
---

## Deskripcija

Postavite rezultat (score) igrača. Rezultati igrača prikazuju se na scoreboardu (prikazuje se držanjem tipke TAB).

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| playerid | ID igrača za postaviti rezultat (score). |
| score    | Vrijednost za postaviti.                 |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Dodaj 1 na rezultat (score) ubice. Moramo provjeriti da li je validan prvo.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerScore](GetPlayerScore): Dobijte rezultat/score igrača.
