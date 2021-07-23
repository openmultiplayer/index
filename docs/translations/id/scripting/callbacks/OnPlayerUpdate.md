---
title: OnPlayerUpdate
description: Callback ini akan terpanggil ketika klien/pemain memperbarui server dengan statusnya.
tags: ["player"]
---

## Deskripsi

Callback ini di panggil ketika klien/pemain memperbarui server dengan statusnya. Ini sering digunakan untuk membuat memanggil balik khusus untuk pembaruan klien yang tidak dilacak secara aktif oleh server, seperti pembaruan kesehatan atau baju besi atau pemain yang mengganti senjata.

| Nama     | Deskripsi                                |
| -------- | ------------------------------------------ |
| playerid | ID dari pemain yang mengirim paket pembaruan. |

## Returns

0 - Pembaruan dari pemain ini tidak akan di duplikat ke klien lain.

1 - Menunjukkan bahwa pembaruan ini dapat diproses secara normal dan dikirim ke pemain lain.


Ini selalu di panggil pertama dalam filtersciprt.

## Contoh

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Mengembalikan senjata kepada pemain saat ini
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Jika dia mengganti senjata sejak pembaruan terakhir
    {
        // Mari kita memanggil balik panggilan bernama OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Memperbarui variabel senjata
    }
    return 1; // Kirim pembaruan ini ke pemain lain.
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Kamu telah mengganti senjata dari %s ke %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Darah pemain telah berubah sejak pembaruan terakhir -> server, jadi jelas itu yang diperbarui.
        // Mari kita lakukan pemeriksaan lanjutan untuk melihat apakah dia kehilangan atau memperoleh Darah, cheat anti-health? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* Dia telah mendapatkan Darah! Cheat? Tulis skrip Anda sendiri di sini untuk mengetahui bagaimana seorang pemain
            memperoleh darah! */
        }
        else
        {
            /* Dia telah kehilangan darah! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Catatan

<TipNPCCallbacks />

:::warning

Callback ini di panggil, rata-rata, 30 kali per detik, per pemain; hanya di gunakan ketika Anda tahu untuk apa itu (atau lebih penting lagi untuk TIDAK di masukkan). Frekuensi panggilan balik ini untuk setiap pemain bervariasi, tergantung pada apa yang dilakukan pemain. Mengemudi atau menembak akan memicu lebih banyak pembaruan daripada diam.

:::

## Fungsi Terkait
