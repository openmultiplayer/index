---
title: GetWeaponName
description: Dobij ime oružja.
tags: []
---

## Deskripcija

Dobij ime oružja.

| Ime            | Deskripcija                                                          |
| -------------- | -------------------------------------------------------------------- |
| weaponid       | ID oružja za dobiti ime.                                             |
| const weapon[] | Niz za pohraniti ime oružja, proslijeđeno referencom.                |
| len            | Maksimalna dužina imena oružja za pohraniti. Should be sizeof(name). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeno oružje ne postoji.

Ime oružja pohranjeno je u navedenom nizu.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Deklaracije varijabli, s killerName koji ima zadanu vrijednost "World".
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME + 1],
        killerName[MAX_PLAYER_NAME + 1] = "World";

    // Uzmite oružje / razlog i ime igrača
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // Provjerite je li igrača ubio drugi igrač ili je to bilo zbog okoline
    if (killerid != INVALID_PLAYER_ID)
    {
        // Ispraznjujemo killerName string postavljanjem prvog indeksa na EOS (Kraj stringa)
        killerName[0] = EOS;
        // Dobij ime ubice
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // Pošaljite poruku javnom chatu da je X uzrokovao smrt Y, a razlog Z
    format(string, sizeof(string), "%s (%i) je ubio %s (%i) koristeći %s.", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
- [AllowInteriorWeapons](AllowInteriorWeapons): Odredi da li oružja mogu da se koriste u enterijerima.
- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
