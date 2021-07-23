---
title: IsPlayerAttachedObjectSlotUsed
description: Provjeri da li igrač ima prikvačen objekat u određenom indexu (slotu).
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Provjeri da li igrač ima prikvačen objekat u određenom indexu (slotu).

| Ime      | Deskripcija               |
| -------- | ------------------------- |
| playerid | ID igrača za provjeru.    |
| index    | Index (slot) za provjeru. |

## Returns

1: Navedeni slot koristi se za prikvačeni objekt.

0: Navedeni slot se ne koristi za prikvačeni objekt.

## Primjeri

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for(new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}
```

## Srodne Funkcije

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Prikvači objekat za igrača
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Ukloni prikvačeni objekat sa igrača
