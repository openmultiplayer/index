---
title: min
description: .
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Function used to compare the values.

| Ime | Deskripcija                |
| --- | -------------------------- |
| a   | Vrijednost a za uporediti. |
| b   | Vrijednost b za uporediti. |

## Returns

Returna/vraća najmanji od a i b. Ako su oba ekvivalentna, vraća se a.

## Primjeri

```c
//S obzirom da je a manje od b rezultat će biti 5.

public OnGameModeInit()
{
    new
        a, b, rezultat;
    a = 5;
    b = 10;
    rezultat = min(a,b);
    printf ("min(a,b) =", param, rezultat);
    return 0;
}
```

## Srodne Funkcije

- [min](min): Uporedite i dobiti minimalnu vrijednost.
- [max](max): Uporedite i dobiti maksimalnu vrijednost.
