---
title: RemovePlayerAttachedObject
description: Ukloni prikvačeni objekat sa igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Ukloni prikvačeni objekat sa igrača.

| Ime      | Deskripcija                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | ID igrača od kojeg treba ukloniti prikvačeni objekat.              |
| index    | Index objekta za ukloniti (postavljen sa SetPlayerAttachedObject). |

## Returns

1 uspješno, 0 pri grešci.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strmp(cmdtext, "/remao", true)) // Ukloni prikvačene objekte
    {
        for(new i=0; i<MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if (IsPlayerAttachedObjectSlotUsed(playerid, i)) RemovePlayerAttachedObject(playerid, i);
        }
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Prikvači objekat za igrača
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Provjeri da li je objekat prikvačen za igrača u oređenom indexu.
