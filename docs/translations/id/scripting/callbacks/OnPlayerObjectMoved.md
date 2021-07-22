---
title: OnPlayerObjectMoved
description: Callback ini dipanggil ketika objek pemain dipindahkan setelah MovePlayerObject (ketika berhenti bergerak).
tags: ["player"]
---

## Deskripsi

Callback ini dipanggil ketika objek pemain dipindahkan setelah MovePlayerObject (ketika berhenti bergerak).

| Nama     | Deskripsi                        |
| -------- | -------------------------------- |
| playerid | ID pemain yang ditugaskan        |
| objectid | ID objek pemain yang dipindahkan |

## Returns

Selalu terpanggil pertama di filterscript.

## Contoh

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Catatan

:::tip

Callback ini juga bisa dipanggil untuk NPC.

:::

## Fungsi Terkait

- [MovePlayerObject](../functions/MovePlayerObject): Memindahkan objek pemain
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Memeriksa apakah objek pemain bergerak
- [StopPlayerObject](../functions/StopPlayerObject): Menghentikan objek pemain agar tidak bergerak
- [CreatePlayerObject](../functions/CreatePlayerObject): Membuat sebuah objek untuk satu pemain
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Menghancurkan objek pemain
