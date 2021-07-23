---
title: SetSVarFloat
description: Postavi float server varijablu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi float server varijablu.

| Ime         | Deskripcija           |
| ----------- | --------------------- |
| varname[]   | Ime server varijable. |
| float_value | Float za postaviti.   |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ime varijable je prazno ili je preko 40 karaktera.

## Primjeri

```c
// postavi "Version"
SetSVarFloat("Version", 0.37);
// ispisati će verziju koju server ima
printf("Version: %f", GetSVarFloat("Version"));
```

## Srodne Funkcije

- [SetSVarInt](SetSVarInt): Postavite cijeli broj za varijablu servera.
- [GetSVarInt](GetSVarInt): Dobij cjelobrojnu vrijednost server varijable.
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
