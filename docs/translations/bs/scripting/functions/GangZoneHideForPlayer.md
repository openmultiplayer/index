---
title: GangZoneHideForPlayer
description: Skriva gangzonu za igrača.
tags: ["player", "gangzone"]
---

## Deskripcija

Skriva gangzonu za igrača.

| Ime      | Deskripcija                   |
| -------- | ----------------------------- |
| playerid | ID igrača za skriti gangzonu. |
| zone     | ID zone za skriti.            |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

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
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFF0000FF);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    GangZoneHideForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## Srodne Funkcije

- [GangZoneCreate](GangZoneCreate): Kreiraj gangzonu.
- [GangZoneDestroy](GangZoneDestroy): Uništi gang zonu.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Prikaži gang zonu za igrača.
- [GangZoneShowForAll](GangZoneShowForAll): Prikaži gang zonu za sve igrače.
- [GangZoneHideForAll](GangZoneHideForAll): Sakrij gangzonu za sve igrače.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Kreiraj bljeskalicu gang zone za igrača.
- [GangZoneFlashForAll](GangZoneFlashForAll): Kreiraj bljeskalicu gang zone za sve igrače.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Zaustavi gang zonu da bljeska za igrača.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Zaustavi gang zonu da bljeska za sve igrače.
