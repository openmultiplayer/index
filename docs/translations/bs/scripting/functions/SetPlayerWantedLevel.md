---
title: SetPlayerWantedLevel
description: Postavi wanted level igrača (6 smeđih zvjetdica ispod HUD-a).
tags: ["player"]
---

## Deskripcija

Postavi wanted level igrača (6 smeđih zvjetdica ispod HUD-a).

| Ime      | Deskripcija                             |
| -------- | --------------------------------------- |
| playerid | ID igrača za postaviti wanted level.    |
| level    | Wanted level za postaviti igraču (0-6). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
{
    SetPlayerWantedLevel(playerid, 6);
    SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerWantedLevel](GetPlayerWantedLevel): Provjeri wanted level igrača.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Pusti krivičnu prijavu za igrača.
