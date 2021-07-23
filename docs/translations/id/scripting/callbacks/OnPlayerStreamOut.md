---
title: OnPlayerStreamOut
description: Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain.
tags: ["player"]
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3a dan tidak bekerja pada versi dibawahnya!

:::


## Deskripsi

Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain.

| Nama        | Deskripsi                                                 |
| ----------- | ------------------------------------------------------ |
| playerid    | ID dari pemain lain yang keluar jangakauan stream klien pemain. |
| forplayerid | ID dari pemain yang berada di luar jangkauan stream pemain lain.|

## Returns

Ini akan selalu terpanggil pertama di filterscripts

## Contoh
```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Pemain ID %d telah menjauhimu.", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Catatan

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::

## Fungsi Terkait
