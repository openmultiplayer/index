---
title: ConnectNPC
description: Konektuj NPC-a na server.
tags: ["npc"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.a i ne radi u nižim verzijama!

:::

## Deskripcija

Konektuj NPC-a na server.

| Ime      | Deskripcija                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| Ime[]    | Ime sa kojim će se NPC konektovati. Mora poštovati ista pravila kao i ime igrača. |
| script[] | Naziv NPC skripte koji se nalazi u mapi npcmodes (bez nastavka .amx).             |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Primjeri

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Zabilješke

:::tip

NPC-evi nemaju nametagove. Ovo može biti iskriptano sa Attach3DTextLabelToPlayer.

:::

## Srodne Funkcije

- [IsPlayerNPC](IsPlayerNPC): Provjeri da li je igrač NPC ili pravi igrač.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Pozvano kada se igrač konektuje na server.
