---
title: TogglePlayerControllable
description: Uključuje / isključuje da li igrač može kontrolirati svog lika ili ne.
tags: ["player"]
---

## Deskripcija

Uključuje / isključuje da li igrač može kontrolirati svog lika ili ne.

| Ime      | Deskripcija                                       |
| -------- | ------------------------------------------------- |
| playerid | ID igrača za prebacivanje mogućnosti upravljanja. |
| toggle   | 0 da ne mogu kontrolisati, 1 da mogu.             |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     // Zaledi igrača kada napiše /freezeme
     if (strcmp(cmdtext, "/freezeme", true) == 0)
     {
          TogglePlayerControllable(playerid,0);
          return 1;
     }
     // Odledi igrača kada napiše /unfreezeme
     if (strcmp(cmdtext, "/unfreezeme", true) == 0)
     {
          TogglePlayerControllable(playerid,1);
          return 1;
     }
     return 0;
}
```

## Srodne Funkcije
