---
title: GetPlayerWeaponData
description: Dobij oružje i streljivo u određenom igračevom slotu oružja (npr. oružje u 'SMG' slotu).
tags: ["player"]
---

## Deskripcija

Dobij oružje i streljivo u određenom igračevom slotu oružja (npr. oružje u 'SMG' slotu).

| Ime      | Deskripcija                                                |
| -------- | ---------------------------------------------------------- |
| playerid | ID igrača čije podatke o oružju treba dobiti.              |
| slot     | Slot oružja za dobiti podatke (0-12).                      |
| &weapons | Varijabla za pohraniti ID oružja, proslijeđeno referencom. |
| &ammo    | Varijabla za pohraniti streljivo, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena..

0: Funkcija neuspješno izvršena. Igrač nije povezan i/ili je navedeni slot za oružje nevažeći (važeće 0-12).

## Primjeri

```c
// Uobičajena upotreba: nabavite sve oružje i pohranite podatke u niz koji sadrži 13 slotova
// Prva vrijednost je ID oružja, a druga streljivo

new weapons[13][2];

for (new i = 0; i <= 12; i++)
{
    GetPlayerWeaponData(playerid, i, weapons[i][0], weapons[i][1]);
}
```

## Zabilješke

:::tip

Staro oružje bez preostalog streljiva i dalje se vraća.

:::

## Srodne Funkcije

- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
