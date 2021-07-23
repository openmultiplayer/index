---
title: IsPlayerInRangeOfPoint
description: Provjerava ako je igrač u dometu/blizini određene tačke.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako je igrač u blizinu određene tačke. Ova izvorna funkcija je brža od implementacije PAWN-a koristeći formulu udaljenosti.

| Ime         | Deskripcija                                                         |
| ----------- | ------------------------------------------------------------------- |
| playerid    | ID igrača.                                                          |
| Float:range | Najdalja udaljenost koju igrač može biti od točke da bude u dometu. |
| Float:x     | X kordinata točke do koje treba provjeriti domet.                   |
| Float:y     | Y kordinata točke do koje treba provjeriti domet.                   |
| Float:z     | Z kordinata točke do koje treba provjeriti domet.                   |

## Returns

true - Igrač je u dometu/blizini točke.

false - Igrač nije u dometu/blizini točke.

## Primjeri

```c
if (!strcmp("/stadium", cmdtext))
{
    if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
    {
        SendClientMessage(playerid,0xFFFFFFFF,"Ti si u blizini ulaza u stadion!");
    }

    return 1;
}
```

## Srodne Funkcije

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Dobij razmak između igrača i tačke.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Dobij razmak između vozila i tačke.
- [GetPlayerPos](GetPlayerPos): Dobij poziciju igrača.
