---
title: OnPlayerExitVehicle
description:  Callback ini di panggil ketika pemain mulai keluar dari kendaraan.
tags: ["player", "vehicle"]
---

## Deskripsi

Callback ini di panggil ketika pemain mulai keluar dari kendaraan.

| Nama      | Deskripsi                                     |
| --------- | ----------------------------------------------- |
| playerid  | 
ID pemain yang keluar dari kendaraan. |
| vehicleid | 
ID kendaraan pemain yang keluar.    |

## Returns

Ini selalu di panggil pertama dalam filtersciprt.

## Contoh

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFO: Kamu keluar dari kendaraan %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

:::warning

Tidak di panggil jika pemain jatuh dari sepeda atau dikeluarkan dari kendaraan dengan cara lain seperti menggunakan SetPlayerPos. Anda harus menggunakan OnPlayerStateChange dan memeriksa apakah status lama mereka adalah PLAYER_STATE_DRIVER atau PLAYER_STATE_PASSENGER dan status baru mereka adalah PLAYER_STATE_ONFOOT.

:::

## Fungsi Terkait

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Mengeluarkan pemain dari kendaraan mereka.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Memeriksa di kursi mana seorang pemain berada.
