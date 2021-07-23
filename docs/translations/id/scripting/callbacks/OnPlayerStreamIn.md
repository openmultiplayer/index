---
title: OnPlayerStreamIn
description: Callback ini akan terpanggil ketika pemain lain berada di jangkauan stream dari klien pemain.
tags: ["player"]
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3a dan tidak bekerja pada versi dibawahnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika pemain lain berada di jangkauan stream dari klien pemain.


| Nama        | Deskripsi                                                 |
| ----------- | ------------------------------------------------------ |
| playerid    | ID dari pemain lain yang berada dalam jangakauan stream klien pemain. |
| forplayerid | ID dari pemain yang berada di jangkauan stream pemain lain. |

## Returns

Ini akan selalu terpanggil pertama di filterscripts

## Contoh
```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d berada di sekitarmu.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::


## Fungsi Terkait
