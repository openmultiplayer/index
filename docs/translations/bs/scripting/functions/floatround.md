---
title: floatround
description: Zaokružite broj s pomičnom zarezom na cijelu vrijednost.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Zaokružite broj s pomičnom zarezom na cijelu vrijednost.

| Ime                                  | Deskripcija                       |
| ------------------------------------ | --------------------------------- |
| value                                | Vrijednost koju treba zaokružiti. |
| [mode](../resources/floatroundmodes) | Režim plutanja koji se koristi.   |

## Returns

Zaokružena vrijednost kao cijeli broj.

## Primjeri

```c
floatround(3.3, floatround_ceil);
```

## Srodne Funkcije

- [float](float): Pretvorite cjelobrojni broj u float.
- [floatstr](floatstr): Konvertuj string u float.
