---
title: asin
description: .
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobijte obrnutu vrijednost sinusnog luka u radijanima.

| Ime         | Deskripcija            |
| ----------- | ---------------------- |
| Float:value | the input in arc sine. |

## Returns

Vrijednost čiji se sinusni luk izračunava u intervalu [-1, + 1]. Ako je argument izvan ovog intervala, pojavljuje se greška domene.

## Primjeri

```c
//Sinusni luk od 0.500000 je 30.000000 stepeni.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin (param) * 180.0 / PI;
    printf ("Sinusni luk od %f je %f stepeni\n", param, result);
    return 0;
}
```

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floatcos](floatcos): Uzmite kosinus iz određenog ugla.
- [floattan](floattan): Uzmite tangentu pod određenim uglom.
