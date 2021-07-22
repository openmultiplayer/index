---
title: OnPlayerEnterCheckpoint
description: Callback ini terpanggil ketika seorang pemain memasuki checkpoint untuk pemain itu.
tags: ["player", "checkpoint"]
---

## Deskripsi

Callback ini terpanggil ketika seorang pemain memasuki checkpoint untuk pemain itu.

| Nama     | Deskripsi                          |
| -------- | ---------------------------------- |
| playerid | ID pemain yang memasuki checkpoint |

## Returns

Selalu terpanggil pertama di filterscript.

## Contoh

```c
// Dalam contoh ini, sebuah checkpoint dibuat untuk pemain saat spawn,
// yang membuat kendaraan dan menonaktifkan checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Catatan

<TipNPCCallbacks />

## Fungsi Terkait

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Membuat sebuah checkpoint untuk pemain.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Menonaktifkan checkpoint pemain saat ini.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Memeriksa apakah pemain berada di dalam checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Membuat sebuah checkpoint balapan untuk pemain.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Menonaktifkan checkpoint balapan pemain saat ini.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Memeriksa apakah pemain berada di dalam checkpoint balapan.
