---
title: IsPlayerInRaceCheckpoint
description: Provjerava ako je igrač unutar njihovog trenutno postavljenog race checkpointa/markera (SetPlayerRaceCheckpoint).
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Deskripcija

Provjerava ako je igrač unutar njihovog trenutno postavljenog race checkpointa/markera (SetPlayerRaceCheckpoint).

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru. |

## Returns

0: Igrač nije u race checkpointu/markeru.

1: Igrač jeste u race checkpointu/markeru.

## Primjeri

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100);
}
```

## Srodne Funkcije

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Kreiraj race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
