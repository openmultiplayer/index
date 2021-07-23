---
title: float
description: Konvertuje cijeli broj u float.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Konvertuje cijeli broj u float.

| Ime   | Deskripcija                                   |
| ----- | --------------------------------------------- |
| value | Cjelobrojna vrijednost za pretvaranje u float |

## Returns

Dati cijeli broj u floatu.

## Primjeri

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Pretvara vrijednost (52) u float i pohranjuje je u 'FloatValue' (52.0)
```

## Srodne Funkcije

- [floatround](floatround): Pretvori float u cijeli broj (zaokruživanje).
- [floatstr](floatstr): Konvertuj string u float.
