---
title: random
description: Dobij (pseudo-)slučajni broj.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobij (pseudo-)slučajni broj.

| Ime | Deskripcija                                                                  |
| --- | ---------------------------------------------------------------------------- |
| max | Raspon vrijednosti (od 0 do ove vrijednosti minus 1) koja može biti vraćena. |

## Returns

Slučajan broj u rasponu od 0 do max-1.

## Primjeri

```c
new value = random(5);

// 'value' može biti 0, 1, 2, 3 ili 4, 5 mogućih vrijednosti.
new Float:RandomSpawn[][4] =
{
    // Pozicije, (X, Y, Z and Facing Angle)
    {-2796.9854, 1224.8180, 20.5429, 192.0335},
    {-2454.2170, 503.8759, 30.0790, 267.2932},
    {-2669.7322, -6.0874, 6.1328, 89.8853}
};


public OnPlayerSpawn(playerid)
{
    new rand = random(sizeof(RandomSpawn));

    // SetPlayerPos na slučajne podatke o spawnu
    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1],RandomSpawn[rand][2]);

    // SetPlayerFacingAngle na slučajne podatke o smjeru gledanja
    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);
    return 1;
}
```

## Zabilješke

:::tip

Korištenje vrijednosti manje od 1 daje čudne vrijednosti.

:::

## Srodne Funkcije
