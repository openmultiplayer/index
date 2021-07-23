---
title: IsPlayerNPC
description: Provjerava ako je igrač pravi igrač ili NPC.
tags: ["player", "npc"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako je igrač pravi igrač ili NPC.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru. |

## Returns

1: Igrač je NPC.

0: Igrač nije NPC (pravi je igrač).

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "NPC se konektovao!");
        return 1;
    }

    // Drugi kod ovdje neće biti izvršen osim ako je igrač
}
```

## Srodne Funkcije

- [ConnectNPC](ConnectNPC): Konektujte NPC-a.
- [IsPlayerAdmin](IsPlayerAdmin): Provjerava da li je igrač prijavljen/ulogovan u RCON.
