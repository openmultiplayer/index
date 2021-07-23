---
title: SetSVarInt
description: Postavlja cjelobrojnu server varijablu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja cjelobrojnu server varijablu.

| Ime       | Deskripcija               |
| --------- | ------------------------- |
| varname[] | Ime server varijable.     |
| int_value | Cijeli broj za postaviti. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ime varijable je prazno ili je preko 40 karaktera.

## Primjeri

```c
// postavi "Version"
SetSVarInt("Version", 37);
// ispisati će verziju koju server ima
printf("Version: %d", GetSVarInt("Version"));
```

## Srodne Funkcije

- [GetSVarInt](GetSVarInt): Dobij cjelobrojnu vrijednost server varijable.
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
