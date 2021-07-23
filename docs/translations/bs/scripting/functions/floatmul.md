---
title: floatmul
description: Množi dva floata jedni s drugima.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Množi dva floata jedni s drugima.

| Ime   | Deskripcija                         |
| ----- | ----------------------------------- |
| oper1 | Prvi Float.                         |
| oper2 | Drugi Float, s kojim se prvi množi. |

## Returns

Proizvod dva data plovka

## Primjeri

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; //Deklarira dva floata, Number1 (2.3) i Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2);       //Sprema proizvod (= 2,3 * 3,5 = 8,05) broja1 i broja2 u plovak "Proizvod"
    return 1;
}
```

## Zabilješke

:::tip

Ova je funkcija prilično suvišna, jer se ne razlikuje od konvencionalnog operatora množenja (\*).

:::

## Srodne Funkcije

- [Floatadd](Floatadd): Dodaje dva plovka.
- [Floatsub](Floatsub): Oduzima dva floata.
- [Floatdiv](Floatdiv): Dijeli float sa drugim.
