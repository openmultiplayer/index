---
title: SendPlayerMessageToAll
description: Pošalji poruku u ime drugog igrača svim drugim igračima na serveru.
tags: ["player"]
---

## Deskripcija

Pošalji poruku u ime drugog igrača svim drugim igračima na serveru. Linija će početi sa imenom pošiljaoca u njegovoj boji, prateći poruku u bijeloj boji.

| Ime             | Deskripcija                                               |
| --------------- | --------------------------------------------------------- |
| senderid        | ID pošiljatelja. Ako je nevažeći, poruka se neće poslati. |
| const message[] | Poruka koja će biti poslana.                              |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
    // formatiraj poruku da bi sadržala njegov ID pored imena
    new
        string[128];

    format(string, sizeof(string), "(%d): %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    return 0; // return 0 sprečava slanje originalne poruke

    // Pod pretpostavkom da je 'playerid' 0 i da se igrač zove Tenpenny, Izlaz će biti 'Tenpenny:(0) <message>'
}
```

## Zabilješke

:::warning

Izbjegavajte koristiti specifikatore formata u svojim porukama bez formatiranja poslanog stringa. U suprotnom će rezultirati padovima.

:::

## Srodne Funkcije

- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Prisilite igrača da pošalje tekst za jednog igrača.
- [SendClientMessageToAll](SendClientMessageToAll): Pošalji poruku svim igračima.
- [OnPlayerText](../callbacks/OnPlayerText): Pozvano kada igrač pošalje poruku putem chata.
