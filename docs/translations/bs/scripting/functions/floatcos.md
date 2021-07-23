---
title: floatcos
description: Dobijte kosinus iz zadanog ugla.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobijte kosinus iz zadanog ugla. Ulazni kut može biti u radijanima, stupnjevima ili stupnjevima.

| Ime         | Deskripcija                                                |
| ----------- | ---------------------------------------------------------- |
| Float:value | Ugao iz kojeg se dobija kosinus.                           |
| anglemode   | Način kuta koji se koristi, ovisno o unesenoj vrijednosti. |

## Returns

Kosinus unesene vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    printf("kosinus iz 90° je %f", floatcos(90.0, degrees));
    // Output: 0
    return 1;
}
```

## Zabilješke

:::warning

GTA / SA-MP u većini slučajeva koriste stupnjeve za uglove, na primjer GetPlayerFacingAngle. Stoga ćete najvjerojatnije htjeti koristiti način rada pod uglom 'stupnjeva', a ne radijane. Takođe imajte na umu da su uglovi u GTA suprotno kazaljki na satu; 270° je istok, a 90° zapad. Jug je i dalje 180°, a sjever još uvijek 0° / 360°.

:::

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floattan](floattan): Dobijte tangentu iz određenog ugla.
