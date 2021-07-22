---
title: OnPlayerRequestClass
description: Callback ini akan terpanggil ketika seorang pemain mengubah kelas pada pemilihan kelas (dan saat pemilihan kelas pertama kali muncul).
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika seorang pemain mengubah kelas pada pemilihan kelas (dan saat pemilihan kelas pertama kali muncul).

| Nama     | Deskripsi                                                          |
| -------- | ------------------------------------------------------------------ |
| playerid | ID pemain yang mengubah kelas                                      |
| classid  | ID kelas yang saat ini dilihat (dikembalikan oleh AddPlayerClass). |

## Returns

Selalu terpanggil pertama di filterscript.

## Contoh

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## Catatan

:::tip

Callback ini juga dipanggil ketika pemain menekan tombol F4.

:::

## Fungsi Terkait

- [AddPlayerClass](../functions/AddPlayerClass): Menambahkan kelas
