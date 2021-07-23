---
title: GangZoneShowForAll
description: Prikazuje gangzonu sa željenom bojom svim igračima.
tags: ["gangzone"]
---

## Deskripcija

Prikazuje gangzonu sa željenom bojom svim igračima.

| Ime   | Deskripcija                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------- |
| zone  | ID gangzone za prikazati (returnovana/vraćena od GangZoneCreate).                                        |
| color | Boja za bljeskanje gangzone, kao cijeli broj ili hex u RGBA formatu boja. Podržana alfa transparentnost. |

## Returns

1: Funkcija uspješno izvršena. Gangzona je prikazana svim igračima.

0: Funkcija neuspješno izvršena. Gangzona ne postoji.

## Primjeri

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, COLOR_RED);
    }
    return 1;
}
```

## Srodne Funkcije

- [GangZoneCreate](GangZoneCreate): Kreiraj gangzonu.
- [GangZoneDestroy](GangZoneDestroy): Uništi gang zonu.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Prikaži gang zonu za igrača.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Sakrij gangzonu za igrača.
- [GangZoneHideForAll](GangZoneHideForAll): Sakrij gangzonu za sve igrače.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Kreiraj bljeskalicu gang zone za igrača.
- [GangZoneFlashForAll](GangZoneFlashForAll): Kreiraj bljeskalicu gang zone za sve igrače.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Zaustavi gang zonu da bljeska za igrača.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Zaustavi gang zonu da bljeska za sve igrače.
