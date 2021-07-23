---
title: OnPlayerWeaponShot
description: Callback ini di panggil ketika seorang pemain melepaskan tembakan dari senjata.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3z' />

## Deskripsi

Callback ini dipanggil ketika pemain melepaskan tembakan dari senjata. Hanya senjata yang di dukung. Hanya drive-by penumpang yang di dukung (bukan drive-by pengemudi, dan bukan tembakan burung / pemburu).

| Nama     | Deskripsi                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| playerid | ID pemain yang menembakkan senjata.                                                                  |
| weaponid | ID dari [weapon](../resources/weaponids) yang di tembak oleh pemain.                                        |
| hittype  | [type](../resources/bullethittypes) Tersebut dari benda yang di tembakkan (tidak ada, pemain, kendaraan, atau (pemain) objek). |
| hitid    | ID pemain, kendaraan atau objek yang tertabrak.                                                     |
| fX       | Koordinat X yang di tembak.                                                                       |
| fY       | Koordinat Y yang di tembak.                                                                       |
| fZ       | Koordinat Z yang di tembak.                                                                       |

## Returns

0 - Mencegah peluru menyebabkan kerusakan.

1 - Membiarkan peluru menyebabkan kerusakan.

Itu selalu disebut pertama dalam filterscript sehingga mengembalikan 0 di sana juga memblokir skrip lain agar tidak melihatnya.

## Contoh

```c
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "Senjata %i telah di tembakkan. hittype: %i   hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Catatan

:::tip


Callback ini hanya di panggil ketika kompensasi lag diaktifkan. Jika tipe hit adalah:

- BULLET_HIT_TYPE_NONE: parameter fX, fY dan fZ adalah koordinat normal, akan memberikan 0,0 untuk koordinat jika tidak ada yang terkena (misalnya objek jauh yang tidak dapat dijangkau oleh peluru);
- Others: fX, fY dan fZ adalah offset relatif kepada hitid.

:::

:::tip

GetPlayerLastShotVectors dapat digunakan dalam callback ini untuk informasi vektor peluru yang lebih detail.

:::

:::warning

Bug yang Diketahui: callback tidak dipanggil jika Anda menembak di kendaraan sebagai pengemudi atau jika Anda melihat ke belakang dengan bidikan di aktifkan (menembak di udara). Disebut sebagai BULLET_HIT_TYPE_VEHICLE dengan hitid yang benar (id kendaraan pemain yang dipukul) jika Anda menembak pemain yang berada di dalam kendaraan. Itu tidak akan disebut sebagai BULLET_HIT_TYPE_PLAYER sama sekali. [Klik di sini untuk kemungkinan perbaikan] Perbaikan sebagian di SA-MP 0.3.7: Jika data senjata palsu dikirim oleh pengguna jahat(chiter), klien pemain lain dapat membeku atau crash. Untuk mengatasi ini, periksa apakah weaponid yang di laporkan benar-benar dapat menembakkan peluru.

:::

## Fungsi Terkait

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Mengambil vektor tembakan terakhir yang di tembakkan oleh pemain.
