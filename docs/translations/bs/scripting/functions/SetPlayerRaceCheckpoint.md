---
title: SetPlayerRaceCheckpoint
description: Kreira race (trkački) checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Deskripcija

Kreira race (trkački) checkpoint. Kada igrač uđe u njega, callback OnPlayerEnterRaceCheckpoint se poziva.

| Ime         | Deskripcija                                                                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID igrača za postaviti race checkpoint.                                                                                                                                                                                                           |
| type        | Tip checkpointa. 0-Normal, 1-Finish, 2-Ništa(checkpoint bez ičeg na sebi), 3-Air normal, 4-Air finish, 5-Air (rotira se i zaustavi), 6-Air (povećava se, smanjuje i nestaje), 7-Air (ljulja se prema dolje i gore), 8-Air (ljulja se gore-dolje). |
| Float:x     | X-kordinata.                                                                                                                                                                                                                                      |
| Float:y     | Y-kordinata.                                                                                                                                                                                                                                      |
| Float:z     | Z-kordinata.                                                                                                                                                                                                                                      |
| Float:nextx | X-kordinata sljedeće točke, za strelicu usmjerenu prema pravcu.                                                                                                                                                                                   |
| Float:nexty | Y-kordinata sljedeće točke, za strelicu usmjerenu prema pravcu.                                                                                                                                                                                   |
| Float:nextz | Z-kordinata sljedeće točke, za strelicu usmjerenu prema pravcu.                                                                                                                                                                                   |
| Float:size  | Veličina (promjer) checkpointa.                                                                                                                                                                                                                   |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
//Iz Yagu-ove trkačke filterskripte, (c) by Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
     if (next == -1 && Airrace == 0)
         SetPlayerRaceCheckpoint(playerid,1,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         0.0,0.0,0.0,CPsize);
     else if (next == -1 && Airrace == 1)
         SetPlayerRaceCheckpoint(playerid,4,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         0.0,0.0,0.0,CPsize);
     else if (Airrace == 1)
         SetPlayerRaceCheckpoint(playerid,3,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         RaceCheckpoints[next][0],RaceCheckpoints[next][1],RaceCheckpoints[next][2],CPsize);
     else
         SetPlayerRaceCheckpoint(playerid,0,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         RaceCheckpoints[next][0],RaceCheckpoints[next][1],RaceCheckpoints[next][2],CPsize);
}
```

## Zabilješke

:::warning

Race checkpointi su asinhroni, što znači da se odjednom može prikazivati ​​samo jedan. Za 'streamovanje' race checkpointa (pokažite ih samo kad su igrači dovoljno blizu), upotrijebite streamer za provjeru checkpointa.

:::

## Srodne Funkcije

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Pozvano kada igrač uđe u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Pozvano kada igrač napusti checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Pozvano kada igrač uđe u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Pozvano kada igrač napusti race checkpoint.
