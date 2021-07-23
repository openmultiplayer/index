---
title: floatadd
description: Dodaje dva floata zajedno.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dodaje dva floata zajedno. Ova je funkcija suvišna jer standardni operater (+) radi istu stvar.

| Ime           | Deskripcija  |
| ------------- | ------------ |
| Float:Number1 | Prvi float.  |
| Float:Number2 | Drugi float. |

## Returns

Zbir dva zadana float.

## Primjeri

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; //Deklarira dva plovka, Number1 (2) i Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2);       //Sprema zbroj (= 2 + 3 = 5) broja1 i broja2 u float "Zbir"
    return 1;
}
```

## Srodne Funkcije

- [Floatsub](Floatsub): Oduzima dva floata.
- [Floatmul](Floatmul): Množi dva floata.
- [Floatdiv](Floatdiv): Dijeli float sa drugim.
