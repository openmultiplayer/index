---
title: floatsqroot
description: Izračunava kvadratni korijen zadate vrijednosti.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Izračunava kvadratni korijen zadate vrijednosti.

| Ime   | Deskripcija                                      |
| ----- | ------------------------------------------------ |
| value | Vrijednost za izračunavanje kvadratnog korijena. |

## Returns

Kvadratni korijen ulazne vrijednosti, kao float.

## Primjeri

```c
floatsqroot(25.0); // Vraća 5, zato što je 5x5 = 25
```

## Zabilješke

:::tip

Ova funkcija dovodi do greške "domene" ako je ulazna vrijednost negativna. Možete koristiti floatabs da biste dobili apsolutnu (pozitivnu) vrijednost.

:::

## Srodne Funkcije

- [floatpower](floatpower): Povećava zadanu vrijednost u stepen eksponenta.
- [floatlog](floatlog): Nabavite logaritam plutajuće vrijednosti.
