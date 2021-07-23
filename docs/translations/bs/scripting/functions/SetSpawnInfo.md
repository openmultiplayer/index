---
title: SetSpawnInfo
description: Ova funkcija se može koristiti za promijeniti spawn informacije određenog igrača.
tags: []
---

## Deskripcija

Ova funkcija se može koristiti za promijeniti spawn informacije određenog igrača. Ona omogućava da automatski postaviš nekome spawn oružje, njihov tim, skin ili spawn poziciju, normalno se koristi u slučaju miniigara ili automatskih spawn sistema. Ova funkcija je sigurnija od crasha u odnosu na SetPlayerSkin u OnPlayerSpawn i/ili OnPlayerRequestClass, iako je ovo ispravljeno u 0.2.

| Ime            | Deskripcija                                               |
| -------------- | --------------------------------------------------------- |
| playerid       | ID igrača kojem želite postaviti spawn informacije.       |
| team           | Team-ID odabranog igrača.                                 |
| skin           | Skin s kojim će se igrač spawnovati.                      |
| Float:X        | X-kordinata igračeve spawn pozicije.                      |
| Float:Y        | Y-kordinata igračeve spawn pozicije.                      |
| Float:Z        | Z-kordinata igračeve spawn pozicije.                      |
| Float:rotation | Smjer u kojem igrač treba da gleda nakon što se spawnuje. |
| weapon1        | Prvo spawn-oružje za igrača.                              |
| weapon1_ammo   | Količina streljiva za primarni spawnweapon.               |
| weapon2        | Drugo spawn-oružje za igrača.                             |
| weapon2_ammo   | Količina streljiva za sekundarni spawnweapon.             |
| weapon3        | Treće spawn-oružje za igrača.                             |
| weapon3_ammo   | Količina streljiva za treći spawnweapon.                  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerRequestClass(playerid, classid)
{
    // Ovo je jednostavan primjer koji demonstrira kako spawnovati igrala automatski sa
    // CJ skinom, koji je broj 0. Igrač će se spawnovati u Las Venturasu sa
    // 36 Sawnoff-Shotgun i 150 Tec9 metaka.
    SetSpawnInfo( playerid, 0, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0 );
}
```

## Srodne Funkcije

- [SetPlayerSkin](SetPlayerSkin): Postavi skin igraču.
- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
- [SpawnPlayer](SpawnPlayer): Natjeraj igrača da se spawnuje.
