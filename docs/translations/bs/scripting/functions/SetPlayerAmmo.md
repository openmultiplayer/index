---
title: SetPlayerAmmo
description: Postavi streljivo igračevog oružja.
tags: ["player"]
---

## Deskripcija

Postavi streljivo igračevog oružja.

| Ime      | Deskripcija                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | ID igrača za postaviti streljivo.                                      |
| weaponid | ID oružja za postaviti streljivo. (ne weaponslot kao u samp include-u) |
| ammo     | Količina streljiva za postaviti.                                       |

## Returns

1: Funkcija uspješno izvršena. Uspješno je također vraćeno i kada je navedeni slot oružja nevažeći (nije 0-12).

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Postavi streljivo za Shotgun na 100 metaka
```

## Zabilješke

:::tip

Parametar 'weaponslot' je greška u kucanju u sa-mp include-u. Morate koristiti ID oružja, a ne otvor za oružje za koji želite postaviti streljivo.

:::

:::tip

Postavite streljivo na 0 da biste uklonili oružje iz inventara igrača. Imajte na umu da će se oružje i dalje prikazivati ​​u GetPlayerWeaponData, iako sa 0 streljiva.

:::

## Srodne Funkcije

- [GetPlayerAmmo](GetPlayerAmmo): Provjeri koliko streljiva igrač ima u određenom slotu.
- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Postavite igračevo "armed" oružje.
