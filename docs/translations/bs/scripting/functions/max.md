---
title: max
description: .
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Funkcija korištena za usporedbu vrijednosti.

| Ime | Deskripcija                |
| --- | -------------------------- |
| a   | Vrijednost a za uporediti. |
| b   | Vrijednost b za uporediti. |

## Returns

Returna/vraća najmanji od a i b. Ako su oba ekvivalentna, vraća se a.

## Primjeri

```c
//S obzirom da je b veće rezultat će biti 5.

public OnGameModeInit()
{
    new
        a, b, rezultat;
    a = 5;
    b = 10;
    rezultat = max(a,b);
    printf ("max(a,b) =", param, rezultat);
    return 0;
}
```

## Srodne Funkcije

- [min](min): Uporedite i dobiti minimalnu vrijednost.
- [max](max): Uporedite i dobiti maksimalnu vrijednost.
