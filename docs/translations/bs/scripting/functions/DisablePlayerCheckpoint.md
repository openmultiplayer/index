---
title: DisablePlayerCheckpoint
description: Onemogućava (skriva/uništava) checkpoint postavljenog za igrača.
tags: ["player", "checkpoint"]
---

## Deskripcija

Onemogućava (skriva/uništava) checkpoint postavljenog za igrača. Igrači mogu odjednom postaviti samo jedan checkpoint. Prije postavljanja drugog ne treba onemogućavati checkpointe.

| Ime      | Deskripcija                                  |
| -------- | -------------------------------------------- |
| playerid | ID igrača čiji checkpoint treba onemogućiti. |

## Returns

1: Funkcija uspješno izvršena. Uspješno se također returna/vraća ako igrač nema trenutno prikazan checkpoint

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
public OnPlayerEnterCheckpoint(playerid)
{
    GivePlayerMoney(playerid, 10000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Kreiraj race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
