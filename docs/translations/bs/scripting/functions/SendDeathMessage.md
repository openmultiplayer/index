---
title: SendDeathMessage
description: Dodaje smrt 'killfeedu' s desne strane ekrana za sve igrače.
tags: []
---

## Deskripcija

Dodaje smrt 'killfeedu' s desne strane ekrana za sve igrače.

| Ime      | Deskripcija                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| killer   | ID ubice (može biti INVALID_PLAYER_ID).                                                                               |
| playerid | ID igrača koji je umro.                                                                                               |
| weapon   | Razlog (ne uvijek oružje) smrti žrtve. Specijalne se ikonice također mogu koristiti (ICON_CONNECT i ICON_DISCONNECT). |

## Returns

Ova funkcija uvijek returna (vraća) 1, bilo da se funkcija neuspješno izvrši. Funkcija će neuspješno da se izvrši (neće se prikazati poruka o smrti) ako je 'playerid' nevažeći. Ako je 'reason' nevažeći, prikazana je generička ikona lobanje i kostiju. 'killerid' nevažeći (INVALID_PLAYER_ID) je važeći.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    SendDeathMessage(killerid, playerid, reason);
    return 1;
}
```

## Zabilješke

:::tip

Poruke smrti mogu se obrisati upotrebom važećeg ID-a igrača za 'playerid' koji nije povezan. Da biste prikazali smrtnu poruku samo za jednog igrača, koristite SendDeathMessageToPlayer. NPC-ove možete koristiti za stvaranje vlastitih razloga smrti.

:::

## Srodne Funkcije

- [SendDeathMessageToPlayer](SendDeathMessageToPlayer): Dodaj ubistvo na listu smrti za igrača.
- [OnPlayerDeath](../callbacks/OnPlayerDeath): Pozvano kada igrač umre.
