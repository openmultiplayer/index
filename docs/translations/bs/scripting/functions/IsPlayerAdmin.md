---
title: IsPlayerAdmin
description: Provjerite je li igrač prijavljen kao RCON administrator.
tags: ["administration"]
---

## Deskripcija

Provjerite je li igrač prijavljen kao RCON administrator.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru. |

## Returns

1: Igrač je RCON administrator. 0: Igrač NIJE RCON administrator.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "Admin se spawnovao/stvorio.");
    }
    return 1;
}
```

## Srodne Funkcije

- [SendRconCommand](SendRconCommand): Šalje naredbu RCON putem skripte.

## Srodni Callback-ovi (Povratni pozivi)

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Pozvano kada se napravi pokušaj prijavljivanja u RCON.
