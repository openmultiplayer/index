---
title: floatstr
description: Konvertuje string u float.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Konvertuje string u float.

| Ime    | Deskripcija                     |
| ------ | ------------------------------- |
| string | String za konvertovati u float. |

## Returns

Zatraženu float vrijednost.

## Primjeri

```c
new before[4] = "6.9"; // STRING koji sadrži FLOAT.
SetPlayerPos(playerid, 0, 0, floatstr(before));
```

## Srodne Funkcije

- [floatround](floatround): Pretvori float u cijeli broj (zaokruživanje).
- [float](float): Pretvorite cjelobrojni broj u float.
