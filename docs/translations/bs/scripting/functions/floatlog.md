---
title: floatlog
description: Ova funkcija vam omogućuje da dobijete logaritam float vrijednosti.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija vam omogućuje da dobijete logaritam float vrijednosti.

| Ime         | Deskripcija                             |
| ----------- | --------------------------------------- |
| Float:value | Vrijednost koje treba dobiti logaritam. |
| Float:base  | Baza logaritma.                         |

## Returns

Logaritam kao float vrijednost.

## Primjeri

```c
public OnGameModeInit()
{
    printf("Logaritam 15,0 sa osnovom 10,0 je %f", floatlog( 15.0, 10.0 ));
    return 1;
}
```

## Srodne Funkcije

- [floatsqroot](floatsqroot): Izračunajte kvadratni korijen float vrijednosti.
- [floatpower](floatpower): Povećava zadanu vrijednost u stepen eksponenta.
