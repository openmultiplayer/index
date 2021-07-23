---
title: OnPlayerTakeDamage
description: Callback ini terpanggil ketika pemain menerima damage.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3d' />

## Deskripsi

Callback ini terpanggil ketika pemain menerima damage.


| Nama     | Deskripsi                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| playerid | ID dari pemain yang mendapatkan damage.                                                                       |
| issuerid | ID dari pemain yang memberikan damage. INVALID_PLAYER_ID jika bunuh diri.                                     |
| amount   | Jumlah damage yang diterima (darah and armour dikombinasikan).                                                |
| weaponid | ID dari senjata atau alasan yang digunakan untuk memberi damage.                                              |
| bodypart | Bagian tubuh yang terkena. (NOTE: Parameter ini ditambahkan pada versi 0.3z. Biarkan ini jika versi anda berada pada sebelumnya!) |



## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh


```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Jika bukan bunuh diri
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s telah membuat %.0f damage kepada %s, senjata: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // 1 kali hit mati ketika headshot dengan sniper
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notes

:::tip

ID senjata akan mengembalikan nilai 37 (flame thrower) dari semua senjata yang menghasilkan api (Seperti molotov, 18). ID senjata akan mengembalikan nilai 51 dari semua senjata yang menghasilkan ledakan(Seperti RPG, grenade) playerid adalah satu-satunya yang dapat memanggil callback tersebut. Amount akan selalu memberikan damage maksimal yang bisa dilakukan oleh senjata, meskipun ketika darah yang tersisa kurang dari damage maksimal. Jadi ketika player mempunya 100.0 darah dan mendapatkan tembakan dari Desert Eagle sebagaimana memiliki damage 46.2, Ini hanya memerlukan 3 tembakan untuk membunuh pemain. 3 tembakan tersebut akan memberikan amout sebesar 46.2, meskipun saat tembakan terakhir mengenai, pemain hanya memiliki 7.6 darah tersisa.

:::

:::warning

GetPlayerHealth dan GetPlayerArmour akan memberikan amount lama dari pemain sebelum memanggil callback ini. Selalu cek jika issuerid valid sebelum melakukan array index.

:::

## Related Functions
// Tidak Ada
