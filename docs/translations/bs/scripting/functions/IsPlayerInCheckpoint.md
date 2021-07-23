---
title: IsPlayerInCheckpoint
description: Provjerite je li igrač trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport tačke.
tags: ["player", "checkpoint"]
---

## Deskripcija

Provjerite je li igrač trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport tačke.

| Ime      | Deskripcija                         |
| -------- | ----------------------------------- |
| playerid | Igrač za kojeg želite znati status. |

## Returns

false/lažno ako igrač nije u checkpointu/markeru, uostalom true/tačno

## Primjeri

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## Srodne Funkcije

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Kreiraj race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
