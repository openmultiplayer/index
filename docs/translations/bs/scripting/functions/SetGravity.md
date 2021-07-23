---
title: SetGravity
description: Postavi gravitaciju za sve igrače.
tags: []
---

## Deskripcija

Postavi gravitaciju za sve igrače.

| Ime           | Deskripcija                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Float:gravity | Vrijednost na koju bi gravitacija trebala biti postavljena (između -50 i 50). |

## Returns

Ova funkcija uvijek returna (vraća) 1, čak i kada se neuspješno izvrši ako je gravitacija iznad limita (manja od -50 ili veća od +50).

## Primjeri

```c
public OnGameModeInit()
{
    // Postavi gravitaciju kao na mjesecu
    SetGravity(0.001);

    return 1;
}
```

## Zabilješke

:::warning

Zadana gravitacija je 0.008.

:::

## Srodne Funkcije

- [GetGravity](GetGravity): Dobij trenutno postavljenu gravitaciju.
- [SetWeather](SetWeather): Postavite globalno vrijeme (weather).
- [SetWorldTime](SetWorldTime): Postavi globalno vrijeme servera.
