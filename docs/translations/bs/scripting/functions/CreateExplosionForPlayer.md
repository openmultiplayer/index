---
title: CreateExplosionForPlayer
description: Kreira eksploziju koja je vidljiva samo jednom igraču.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.z R2-2 i ne radi u nižim verzijama!

:::

## Deskripcija

Kreira eksploziju koja je vidljiva samo jednom igraču. Ovo se može koristiti da izdvojite eksplozije od ostalih igrala ili da ih prikažete samo u određenim virtualnim svjetovima.

| Ime          | Deskripcija                              |
| ------------ | ---------------------------------------- |
| playerid     | ID igrača za kojeg se kreira eksplotija. |
| Float:X      | X kordinata eksplozije.                  |
| Float:Y      | Y kordinata eksplozije.                  |
| Float:Z      | Z kordinata eksplozije.                  |
| type         | Tip eksplozije.                          |
| Float:Radius | Radijus eksplozije.                      |

## Returns

Ova funkcija uvijek returna (vraća) 1, bilo da funkcija ne uspije da se izvrši (igrač ne postoji, nevažeći radijus, nevažeći tip eksplozije).

## Primjeri

```c
if (strcmp(cmdtext, "/burnme", true) == 0)
{
    new Float: playerPos[3];
    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);
    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);
    return 1;
}
```

## Zabilješke

:::tip

Postoji ograničenje koliko igrač može odjednom vidjeti eksplozije. Ovo je otprilike 10.

:::

## Srodne Funkcije

- [CreateExplosion](CreateExplosion): Kreiraj eksploziju koja je vidljiva svim igračima.
