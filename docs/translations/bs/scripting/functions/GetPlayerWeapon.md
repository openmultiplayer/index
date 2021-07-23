---
title: GetPlayerWeapon
description: Vraća ID oružja kojeg igrač trenutno drži.
tags: ["player"]
---

## Deskripcija

Vraća ID oružja kojeg igrač trenutno drži.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za dobiti trenutno oružje. |

## Returns

ID igračevog trenutnog oružja. Returna/vraća -1 ako navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Provjeri ako je killerid nevažeći igrač (da li je konektovan).
    if (killerid != INVALID_PLAYER_ID)
    {
        // WEAPON_MINIGUN konstanta je prethodno definisana u standardom library-u/biblioteci i jednaka je 38.
        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)
        {
            // Banuj ako ima minigun
            Ban(killerid);
        }
    }
    return 1;
}
```

## Zabilješke

:::tip

Kada je stanje igrača PLAYER_STATE_DRIVER ili PLAYER_STATE_PASSENGER, ova funkcija vraća oružje koje je igrač držao prije nego što je ušao u vozilo. Ako se varalica koristi za stvaranje municije u vozilu, ova funkcija to neće prijaviti.

:::

:::warning

Ponekad rezultat može biti -1 što je nevažeći ID oružja. Okolnosti ovoga još nisu poznate, ali najbolje je odbaciti informacije kada je vraćeno oružje -1.

:::

## Srodne Funkcije

- [GetPlayerWeaponData](GetPlayerWeaponData): Saznajte informacije o oružju koje igrač ima.
- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
- [ResetPlayerWeapons](ResetPlayerWeapons): Ukloni sva oružja igrača.
