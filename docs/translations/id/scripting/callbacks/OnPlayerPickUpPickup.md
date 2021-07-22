---
title: OnPlayerPickUpPickup
description: Callback ini dipanggil ketika pemain mengambil pickup yang dibuat dengan CreatePickup.
tags: ["player"]
---

## Deskripsi

Callback ini dipanggil ketika pemain mengambil pickup yang dibuat dengan CreatePickup.

| Nama     | Deskripsi                                  |
| -------- | ------------------------------------------ |
| playerid | ID pemain yang mengambil pickup.           |
| pickupid | ID pickup, dikembalikan oleh CreatePickup. |

## Returns

Selalu terpanggil pertama di gamemode.

## Contoh

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Fungsi Terkait

- [CreatePickup](../functions/CreatePickup): Membuat sebuah pickup.
- [DestroyPickup](../functions/DestroyPickup): Menghancurkan sebuah pickup.
