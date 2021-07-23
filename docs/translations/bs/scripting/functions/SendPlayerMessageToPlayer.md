---
title: SendPlayerMessageToPlayer
description: Pošalji poruku u ime drugog igrača nekom drugom igraču na serveru.
tags: ["player"]
---

## Deskripcija

Pošalji poruku u ime drugog igrača nekom drugom igraču na serveru. Poruka će se pojaviti u chat boxu ali će je vidjeti samo igrač naveden kao 'playerid'. Linija će početi sa imenom pošiljaoca u njegovoj boji, prateći poruku u bijeloj boji.

| Ime             | Deskripcija                                               |
| --------------- | --------------------------------------------------------- |
| playerid        | ID igrača koji će primiti poruku.                         |
| senderid        | ID pošiljatelja. Ako je nevažeći, poruka se neće poslati. |
| const message[] | Poruka koja će biti poslana.                              |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!"); // Poslati će poruku korisniku sa ID-em 0 u igri u ime igrača koji je napisao '/hello'.
        // Pod pretpostavkom da se 'playerid' zove Tenpenny, izlaz će biti 'Tenpenny: Hello ID 0!'
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Izbjegavajte koristiti specifikatore formata u svojim porukama bez formatiranja poslanog stringa. U suprotnom će rezultirati padovima.

:::

## Srodne Funkcije

- [SendPlayerMessageToAll](SendPlayerMessageToAll): Prisilite igrača da pošalje tekst za sve igrače.
- [SendClientMessage](SendClientMessage): Pošalji poruku određenom igraču.
- [SendClientMessageToAll](SendClientMessageToAll): Pošalji poruku svim igračima.
- [OnPlayerText](../callbacks/OnPlayerText): Pozvano kada igrač pošalje poruku putem chata.
