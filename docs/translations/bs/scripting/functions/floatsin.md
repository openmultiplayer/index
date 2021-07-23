---
title: floatsin
description: Uzmi sinus iz zadanog ugla.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Uzmi sinus iz zadanog ugla. Ulazni ugao može biti u radijanima, stupnjevima ili stupnjevima.

| Ime         | Deskripcija                                                |
| ----------- | ---------------------------------------------------------- |
| Float:value | Ugao iz kojeg se dobija sinus.                             |
| anglemode   | Način kuta koji se koristi, ovisno o unesenoj vrijednosti. |

## Returns

Sinus unesene vrijednosti.

## Primjeri

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // ova funkcija vraća 0 ako Igrač nije konektiran.
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // uglovi u GTA idu suprotno od kazaljke na satu, tako da moramo preokrenuti dohvaćeni ugao
        y += distance * floatcos(-z_angle, degrees);

        return 1; // vratite 1 na uspjeh, stvarne koordinate vraćaju se referencom
    }
    return 0; // vratite 0 ako igrač nije povezan
}
```

## Zabilješke

:::warning

GTA / SA-MP u većini slučajeva koristi stupnjeve za uglove, na primjer GetPlayerFacingAngle. Stoga ćete najvjerojatnije htjeti koristiti način rada pod uglom 'stupnjeva', a ne radijane. Takođe imajte na umu da su uglovi u GTA suprotno kazaljkama na satu; 270° je istočno, a 90° zapadno. Jug je i dalje 180°, a sjever još uvijek 0° / 360°.

:::

## Srodne Funkcije

- [floattan](floattan): Dobijte tangentu iz određenog ugla.
- [floatcos](floatcos): Dobijte kosinus iz određenog ugla.
