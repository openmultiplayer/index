---
title: SetPlayerArmedWeapon
description: Postavlja koje oružje (koje igrač posjeduje) igrač trenutno drži.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja koje oružje (koje igrač posjeduje) igrač trenutno drži.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača za naoružati sa oružjem.               |
| weaponid | ID oružja s kojim bi igrač trebao biti naoružan. |

## Returns

1: Funkcija uspješno izvršena. Uspješno je vraćeno i kada se funkcija neuspješno izvrši (igrač ne posjeduje navedeno oružje ili je proslijeđen nevažeći ID oružja).

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid,0); // onemogućuje oružja
    return 1;
}

// SMG driveby by [03]Garsino (for SA:MP 0.3c)
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new
            weapon,
            ammo;

        GetPlayerWeaponData(playerid, 4, weapon, ammo); // Uzmi igračev SMG u slot 4
        SetPlayerArmedWeapon(playerid, weapon); // Postavi da igrač drive-by-ea uz SMG
    }
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija naoružava igrača oružjem koje već ima; ne daje im novo oružje. Pogledajte GivePlayerWeapon.

:::

## Srodne Funkcije

- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
