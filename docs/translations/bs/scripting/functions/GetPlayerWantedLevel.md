---
title: GetPlayerWantedLevel
description: Dobija wanted level igrača.
tags: ["player"]
---

## Deskripcija

Dobija wanted level igrača.

| Ime      | Deskripcija                       |
| -------- | --------------------------------- |
| playerid | ID igrača za dobiti wanted level. |

## Returns

Wanted level igrača.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // Dobija trenutni wanted level, čuva ga u varijablu wantedlevel
          //i onda govori igraču njegov wanted level u klijent poruci.

          new
               wantedLevel = GetPlayerWantedLevel(playerid),
               message[64];

          format(message, sizeof(message), "Tvoj trenutni wanted level je: %i", wantedlevel);
          SendClientMessage(playerid, 0xFF0000FF, message);

          return 1;
     }
    return 0;
}
```

## Srodne Funkcije

- [SetPlayerWantedLevel](SetPlayerWantedLevel): Postavi igraču wanted level.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Pusti krivičnu prijavu za igrača.
