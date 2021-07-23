---
title: uuencode
description: Kodirajte string u UU dekodirani string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Kodirajte string u UU dekodirani string.

| Ime            | Deskripcija                                               |
| -------------- | --------------------------------------------------------- |
| dest[]         | Odredišni string za kodirani tok.                         |
| const source[] | Izvor, nekodirani string.                                 |
| numbytes       | Broj bajtova za kodiranje, ovaj ne smije biti veći od 45. |
| maxlength      | Maksimalna dužina dest[] niza.                            |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
uuencode(encodedString, normalString, 45);
```

## Srodne Funkcije

- [Uudecode](Uudecode): Dekodirajte UU kodirani string.
- [Memcpy](Memcpy): Kopirajte bajtove s jedne lokacije na drugu.
