---
title: atan
description: Dobijte obrnutu vrijednost tangente luka u radijanima.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobijte obrnutu vrijednost tangente luka u radijanima.

| Ime         | Deskripcija                |
| ----------- | -------------------------- |
| Float:value | Unos u tangentama luka.    |

## Returns

Radijant ugla u radijanima.

## Primjeri

```c
//Ova funkcija returna(vraća) radijane. Budući da većina SA-MP funkcija koristi stupnjeve, savjetuje se da ih konvertiraju koristeći formulu: rezultat = atan (param) * 180 / PI

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param) * 180 / 3.14159265; //1 radian equals 180 degrees. 3.14... is used to define PI.
    printf ("Tangent luka od %f je %f stepeni\n", param, result );
    return 0;
}
```

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floatcos](floatcos): Uzmite kosinus iz određenog ugla.
- [floattan](floattan): Uzmite tangentu pod određenim uglom.
