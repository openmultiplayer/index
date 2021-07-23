---
title: atan2
description: .
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

:::warning

Obratite pažnju da je vrijednost y prvi parametar, a vrijednost x drugi parametar.

:::

## Deskripcija

Dobijte obrnutu vrijednost tangente luka od y / x, izraženu u radijanima.

| Ime     | Deskripcija                                    |
| ------- | ---------------------------------------------- |
| Float:y | Vrijednost koja predstavlja udio y-koordinate. |
| Float:x | Vrijednost koja predstavlja udio y-koordinate. |

## Returns

Vraća glavnu vrijednost tangente luka od y / x, izraženu u radijanima.

Da bi izračunala vrijednost, funkcija uzima u obzir znak oba argumenta kako bi odredila kvadrant.

## Primjeri

```c
//Tangenta luka za (x=-10.000000, y=10.000000) je 135.000000 stepeni.

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2 (y,x) * 180 / PI;
    printf ("Tangenta luka za (x=%f, y=%f) je %f stepeni\n", x, y, result );
    return 0;
}
```

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floatcos](floatcos): Uzmite kosinus iz određenog ugla.
- [floattan](floattan): Uzmite tangentu pod određenim uglom.
