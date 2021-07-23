---
title: GetPlayerSurfingObjectID
description: Vraća ID objekta na kojem igrač surfa.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R3 i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća ID objekta na kojem igrač surfa.

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| playerid | ID igrača za dobiti objekat. |

## Returns

ID objekta u pokretu kojim igrač surfuje. Ako igrač ne surfuje pokretnim objektom, vratit će INVALID_OBJECT_ID

## Primjeri

```c
/* kada igrač napše 'objectsurfing' u chat box, vidjeti će ovo.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[30];

        format(szMessage, sizeof(szMessage), "Ti surfaš na objektu #%d.", GetPlayerSurfingObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## Srodne Funkcije
