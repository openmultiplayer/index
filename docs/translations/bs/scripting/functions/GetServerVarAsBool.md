---
title: GetServerVarAsBool
description: Dobij boolean vrijednost server varijable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsBool

:::

## Deskripcija

Dobij boolean vrijednost server varijable.

| Ime             | Deskripcija                                 |
| --------------- | ------------------------------------------- |
| const varname[] | Ime boolean varijable za dobiti vrijednost. |

## Returns

Vrijednost navedene varijable poslužitelja. 0 ako navedena varijabla servera nije logička ili ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new queryEnabled = GetServerVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Upit je onemogućen. Server će se pojaviti van mreže u pretraživaču servera.");
    }
    return 1;
}
```

## Zabilješke

:::tip

Napiši 'varlist' u server konzoli da prikažeš listu dostupnih server varijabli i njihovih tipova.

:::

## Srodne Funkcije

- [GetServerVarAsString](GetServerVarAsString): Dohvatite server varijablu kao string.
- [GetServerVarAsInt](GetServerVarAsInt): Dohvatite server varijablu kao cijeli broj.
