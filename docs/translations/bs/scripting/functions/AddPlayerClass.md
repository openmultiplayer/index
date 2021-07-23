---
title: AddPlayerClass
description: Dodaje klasu na listu selekcije klasa.
tags: ["player"]
---

## Deskripcija

Dodaje klasu na listu selekcije klasa. Klase se koriste da se igrači spawnaju sa skinom njihovog odabira.

| Ime           | Deskripcija                                                |
| ------------- | ---------------------------------------------------------- |
| modelid       | Skin sa kojim će se igrač spawnovati/stvoriti.             |
| Float:spawn_x | X kordinata spawnpointa ove klase.                         |
| Float:spawn_y | Y kordinata spawnpointa ove klase.                         |
| Float:spawn_z | Z kordinata spawnpointa ove klase.                         |
| Float:z_angle | Smjer u koji će igrač gledati nakon spawnovanja/stvaranja. |
| weapon1       | Prvo spawn-oružje za igrača.                               |
| weapon1_ammo  | Količina municije za primarno spawn oružje.                |
| weapon2       | Drugo spawn-oružje za igrača.                              |
| weapon2_ammo  | Količina municije za sekundarno spawn oružje.              |
| weapon3       | Treće spawn-oružje za igrača.                              |
| weapon3_ammo  | Količina municije za treće spawn oružje.                   |

## Returns

ID klase koja je upravo dodana.

319 ako je limit klasa (320) dostignut. Najveći mogući ID klase je 319.

## Primjeri

```c
public OnGameModeInit()
{
    // Igrači mogu da se spawnaju i sa CJ (0) ili Truth (1) skinom.
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Zabilješke

:::tip

Najveći mogući ID klase je 319 (Počinje od 0, znači maksimalno 320 klasa). Kada je limit dostignut, sve naredne dodane klase će zamijeniti ID 319.

:::

## Srodne Funkcije

- [AddPlayerClassEx](AddPlayerClassEx.md): Dodaj klasu sa zadanim timom.
- [SetSpawnInfo](SetSpawnInfo.md): Postavi postavke za spawnovanje/stvaranje igrača.
- [SetPlayerSkin](SetPlayerSkin.md): Postavi igračev skin/izgled.
