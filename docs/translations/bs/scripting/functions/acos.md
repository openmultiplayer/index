---
title: acos
description: .
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobijte obrnutu vrijednost kosinusa luka u radijanima.

| Ime         | Deskripcija           |
| ----------- | --------------------- |
| Float:value | unos u kosinusu luka. |

## Returns

Glavni kosinus luka od x, u intervalu [0, pi] radijana. Jedan radijan je jednak 180 / PI stepeni.

## Primjeri

```c
//Glavni kosinus od 0.500000 je 60.000000 stepeni.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos (param) * 180.0 / PI;
    printf ("Glavni kosinus od %f je %f stepeni.\n", param, result);
    return 0;
}
```

## Srodne Funkcije

- [floatsin](floatsin.md): Doznajte sinus iz određenog ugla.
- [floatcos](floatcos.md): Doznajte kosinus iz određenog ugla.
- [floattan](floattan.md): Doznajte tangent iz određenog ugla.
