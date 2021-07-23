---
title: GetServerVarAsInt
description: Dobij cjelobrojnu vrijednost server varijable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt

:::

## Deskripcija

Dobij cjelobrojnu vrijednost server varijable.

| Ime             | Deskripcija                                     |
| --------------- | ----------------------------------------------- |
| const varname[] | Ime cjelobrojne varijable za dobiti vrijednost. |

## Returns

Vrijednost navedene server varijable. 0 ako navedena varijabla servera nije cijeli broj ili ne postoji.

## Primjeri

```c
new serverPort = GetServerVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## Zabilješke

:::tip

Napiši 'varlist' u server konzoli da prikažeš listu dostupnih server varijabli i njihovih tipova.

:::

## Srodne Funkcije

- [GetServerVarAsString](GetServerVarAsString): Dohvatite server varijablu kao string.
- [GetServerVarAsBool](GetServerVarAsBool): Dohvaćanje varijable poslužitelja kao logičke vrijednosti (boolean).
