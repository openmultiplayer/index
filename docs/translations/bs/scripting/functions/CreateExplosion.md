---
title: CreateExplosion
description: Kreiraj eksploziju na određenim kordinatama.
tags: []
---

## Deskripcija

Kreiraj eksploziju na određenim kordinatama.

| Ime          | Deskripcija             |
| ------------ | ----------------------- |
| Float:X      | X kordinata eksplozije. |
| Float:Y      | Y kordinata eksplozije. |
| Float:Z      | Z kordinata eksplozije. |
| type         | Tip eksplozije.         |
| Float:radius | Radijus eksplozije.     |

## Returns

Ova funkcija uvijek returna (vraća) 1, bilo da je tip eksplozije i/ili vrijednost radijusa nevažeća.

## Primjeri

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Dobij poziciju igrača
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Kreiraj eksploziju na kordinatama igrača
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Zabilješke

:::tip

Postoji ograničenje koliko igrač može odjednom vidjeti eksplozije. Ovo je otprilike 10.

:::

## Srodne Funkcije

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Kreiraj eksploziju koja je vidljiva samo jednom igraču.
