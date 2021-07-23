---
title: ResetPlayerMoney
description: Resetiraj igračev novac na $0.
tags: ["player"]
---

## Deskripcija

Resetiraj igračev novac na $0.

| Ime      | Deskripcija                    |
| -------- | ------------------------------ |
| playerid | ID igrača za resetovati novac. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "Umro si i izgubio si sav svoj novac!");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerMoney](GetPlayerMoney): Provjeri koliko novca igrač ima.
- [GivePlayerMoney](GivePlayerMoney): Dajte igraču novac.
