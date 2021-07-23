---
title: SendDeathMessageToPlayer
description: Dodaje smrt 'killfeedu' s desne strane ekrana za jednog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.z R2-2 i ne radi u nižim verzijama!

:::

## Deskripcija

Dodaje smrt 'killfeedu' s desne strane ekrana za jednog igrača.

| Ime      | Deskripcija                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| playerid | ID igrača za poslati smrt killfeedu.                                                                                  |
| killer   | ID ubice (može biti INVALID_PLAYER_ID).                                                                               |
| killee   | ID igrača koji je umro.                                                                                               |
| weapon   | Razlog (ne uvijek oružje) smrti žrtve. Specijalne se ikonice također mogu koristiti (ICON_CONNECT i ICON_DISCONNECT). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Pošalji smrtnu poruku "playerid" prikazuje da je "killerid" ubio "playerid" zbog "reason"
    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);

    return 1;
}
```

## Srodne Funkcije

- [SendDeathMessage](SendDeathMessage): Dodaj ubistvo na listu smrti.
- [OnPlayerDeath](../callbacks/OnPlayerDeath): Pozvano kada igrač umre.
