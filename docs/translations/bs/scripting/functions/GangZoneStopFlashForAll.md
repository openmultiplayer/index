---
title: GangZoneStopFlashForAll
description: Zaustavlja treptanje gangzone za sve igrače.
tags: ["gangzone"]
---

## Deskripcija

Zaustavlja treptanje gangzone za sve igrače.

| Ime  | Deskripcija                                                          |
| ---- | -------------------------------------------------------------------- |
| zone | ID zone za prestati treptati. Returnovana/vraćena od GangZoneCreate. |

## Returns

1: Funkcija uspješno izvršena. Izvještava se o uspjehu čak i ako zona bandi za početak nije treptala.

0: Funkcija neuspješno izvršena. Navedeni gangzone ne postoji.

## Primjeri

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneStopFlashForAll(gGangZoneId);
    return 1;
}
```

## Srodne Funkcije

- [GangZoneCreate](GangZoneCreate): Kreiraj gangzonu.
- [GangZoneDestroy](GangZoneDestroy): Uništi gang zonu.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Prikaži gang zonu za igrača.
- [GangZoneShowForAll](GangZoneShowForAll): Prikaži gang zonu za sve igrače.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Sakrij gangzonu za igrača.
- [GangZoneHideForAll](GangZoneHideForAll): Sakrij gangzonu za sve igrače.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Kreiraj bljeskalicu gang zone za igrača.
- [GangZoneFlashForAll](GangZoneFlashForAll): Kreiraj bljeskalicu gang zone za sve igrače.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Zaustavi gang zonu da bljeska za igrača.
