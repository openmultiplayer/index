---
title: floattan
description: Uzmi tangentu iz zadanog ugla.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Uzmi tangentu iz zadanog ugla. Ulazni ugao može biti u radijanima, stupnjevima ili stupnjevima.

| Ime         | Deskripcija                                                |
| ----------- | ---------------------------------------------------------- |
| Float:value | Kut iz kojeg se dobija tangenta.                           |
| anglemode   | Način kuta koji se koristi, ovisno o unesenoj vrijednosti. |

## Returns

Tangenta iz unesene vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    printf("Tangent iz 30° je %f", floattan(30.0, degrees));
    // Output: 1
    return 1;
}
```

## Zabilješke

:::warning

GTA / SA-MP u većini slučajeva koristi stupnjeve za uglove, na primjer GetPlayerFacingAngle. Stoga ćete najvjerojatnije htjeti koristiti način rada pod uglom 'stupnjeva', a ne radijane. Takođe imajte na umu da su uglovi u GTA suprotno kazaljkama na satu; 270° je istočno, a 90° zapadno. Jug je i dalje 180°, a sjever još uvijek 0° / 360°.

:::

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floatcos](floatcos): Dobijte kosinus iz određenog ugla.
