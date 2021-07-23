---
title: SetPlayerInterior
description: Postavlja igraču enterijer
tags: ["player"]
---

## Deskripcija

Postavlja igraču enterijer. Lista trenutno poznatih enterijera i njihovih pozicija možete pronaći ovdje.

| Ime        | Deskripcija                                                               |
| ---------- | ------------------------------------------------------------------------- |
| playerid   | ID igrača za postaviti enterijer.                                         |
| interiorid | [ID enterijera](../resources/interiorids) u kojeg treba postaviti igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
// Postavi igraču zadani enterijer (napolju)
SetPlayerInterior(playerid, 0);
```

## Srodne Funkcije

- [GetPlayerInterior](GetPlayerInterior): Dobij trenutni enterijer igrača.
- [LinkVehicleToInterior](LinkVehicleToInterior): Promijeni enterijer u kojem je vozilo vidljivo.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Pozvano kada igrač promijeni enterijer.
