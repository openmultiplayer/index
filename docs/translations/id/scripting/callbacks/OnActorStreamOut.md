---
title: OnActorStreamOut
description: Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain.
tags: []
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3.7 dan tidak bekerja pada versi dibawahnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain.

| Nama        | Deskripsi                                                         |
| ----------- | ----------------------------------------------------------------- |
| actorid     | ID dari aktor yang berada di luar jangakauan stream klien pemain. |
| forplayerid | ID dari pemain yang berada di luar jangkauan stream aktor.        |

## Returns

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d telah berada diluar jangkauan anda.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::

## Fungsi Terkait
