---
title: floatsub
description: Oduzima jedan float od drugog.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Oduzima jedan float od drugog. Imajte na umu da ova funkcija nema stvarnu upotrebu, jer se umesto nje može jednostavno koristiti standardni operator (-).

| Ime   | Deskripcija                               |
| ----- | ----------------------------------------- |
| oper1 | Prvi Float.                               |
| oper2 | Drugi Float (oduzima se od prvog floata.) |

## Returns

Razlika između dva data floata.

## Primjeri

```c
public OnGameModeInit()
{
    new Float:Number1 = 5, Float:Number2 = 2; //Deklarira dva floats, Number1 (5) i Number2 (2)
    new Float:Difference;
    Difference = floatsub(Number1, Number2);//Sprema razliku (5-2 = 3) broja1 i broja2 u float "Razlika"
    return 1;
}
```

## Srodne Funkcije

- [Floatadd](Floatadd): Dodaje dva plovka.
- [Floatmul](Floatmul): Množi dva floata.
- [Floatdiv](../funtions/Floatdiv): Dijeli float sa drugim.
