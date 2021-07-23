---
title: SendClientMessageToAll
description: Prikazuje poruku u chatu za sve igrače.
tags: []
---

## Deskripcija

Prikazuje poruku u chatu za sve igrače. Ovo je ekvivalent SendClientMessage za više igrača.

| Ime             | Deskripcija                              |
| --------------- | ---------------------------------------- |
| color           | Boja poruke (0xRRGGBBAA Hex format).     |
| const message[] | Poruka za prikazati (max 144 karaktera). |

## Returns

Ova funkcija ubijek vraća true/uspješno (1).

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Pošalji poruku svima
        SendClientMessageToAll(-1, "Zdravo!");
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

- [SendClientMessage](SendClientMessage): Pošalji poruku određenom igraču.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Prisilite igrača da pošalje tekst za sve igrače.
