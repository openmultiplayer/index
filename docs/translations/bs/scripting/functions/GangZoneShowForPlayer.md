---
title: GangZoneShowForPlayer
description: Prikaži gang zonu za igrača.
tags: ["player", "gangzone"]
---

## Deskripcija

Prikaži gang zonu za igrača. Prvo mora biti kreirana sa GangZoneCreate.

| Ime      | Deskripcija                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| playerid | ID igrača kojem želite prikazati gangzonu.                                                               |
| zone     | ID gang zone koju želite prikazati igrači. Returnovana/vraćena od GangZoneCreate                         |
| color    | Boja za bljeskanje gangzone, kao cijeli broj ili hex u RGBA formatu boja. Podržana alfa transparentnost. |

## Returns

1 ako je gangzona prikazana, usotalom 0 (ne postoji).

## Primjeri

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);
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
