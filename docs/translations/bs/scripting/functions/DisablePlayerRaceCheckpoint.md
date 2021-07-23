---
title: DisablePlayerRaceCheckpoint
description: Onemogućite inicijalizirane race checkpointe za određenog igrača, jer u svakom trenutku možete imati samo jednu.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Deskripcija

Onemogućite inicijalizirane race checkpointe za određenog igrača, jer u svakom trenutku možete imati samo jednu.

| Ime      | Deskripcija                                                  |
| -------- | ------------------------------------------------------------ |
| playerid | Igrač za kojeg se vrši onemogućavanje trenutnog checkpointa. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Kreiraj race checkpoint za igrača.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
