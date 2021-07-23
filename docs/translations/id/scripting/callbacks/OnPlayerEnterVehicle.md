---
title: OnPlayerEnterVehicle
description: Callback Ini di panggil ketika pemain mulai memasuki kendaraan, artinya pemain belum berada di kendaraan pada saat callback ini dipanggil.
tags: ["player", "vehicle"]
---

## Deskripsi

Callback Ini di panggil ketika pemain mulai memasuki kendaraan, artinya pemain belum berada di kendaraan pada saat callback ini dipanggil.

| Nama        | Deskripsi                                          |
| ----------- | ---------------------------------------------------- |
| playerid    | ID pemain yang mencoba memasuki kendaraan.    |
| vehicleid   | ID kendaraan yang coba di masuki oleh pemain. |
| ispassenger | 0 jika masuk sebagai pengemudi. 1 jika masuk sebagai penumpang. |

## Returns

Ini selalu di panggil pertama dalam filtersciprt.

## Contoh

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Kamu memasuki kendaraan %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

:::tip

Callback ini di panggil ketika PEMAIN mulai memasuki kendaraan, bukan ketika pemain TELAH memasukinya. Lihat OnPlayerStateChange. Callback ini tetap dipanggil jika pemain di tolak masuk ke kendaraan (misalnya terkunci atau penuh).

:::

## Fungsi Terkait

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): 
Masukkan pemain ke dalam kendaraan.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Memeriksa di kursi mana seorang pemain berada.
