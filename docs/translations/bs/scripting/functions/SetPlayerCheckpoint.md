---
title: SetPlayerCheckpoint
description: Postavi checkpoint (crveni cilindar) za igrača.
tags: ["player", "checkpoint"]
---

## Deskripcija

Postavi checkpoint (crveni cilindar) za igrača. Također prikazuje crvenu bljeskalicu na radaru/mapi. Kada igrač uđe u checkpoint, poziva se OnPlayerEnterCheckpoint i određene akcije se mogu izvršiti.

| Ime        | Deskripcija                          |
| ---------- | ------------------------------------ |
| playerid   | ID igrača za postaviti checkpoint.   |
| Float:x    | X kordinata za postaviti checkpoint. |
| Float:y    | Y kordinata za postaviti checkpoint. |
| Float:z    | Z kordinata za postaviti checkpoint. |
| Float:size | Veličina checkpointa.                |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
// U ovom primjeru igračev checkpoint će se postaviti kada se igrač spawnuje.
// Prilikom ulaska u checkpoint dobiti će $1000 i checkpoint će se ugasiti.

new bool: gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // ake je true/tačno
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## Zabilješke

:::warning

Checkpointi su asinhroni, što znači da se odjednom može prikazivati ​​samo jedan. Za 'streamanje' checkpointa (pokažite ih samo kada su igrači dovoljno blizu), upotrijebite streamer za provjeru checkpointa.

:::

## Srodne Funkcije

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Kreiraj race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
