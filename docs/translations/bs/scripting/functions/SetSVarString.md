---
title: SetSVarString
description: Postavi string server varijablu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi string server varijablu.

| Ime            | Deskripcija           |
| -------------- | --------------------- |
| varname[]      | Ime server varijable. |
| string_value[] | String za postaviti.  |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ime varijable je prazno ili je preko 40 karaktera.

## Primjeri

```c
// postavi "Version"
SetSVarString("Version", "0.3.7");
// ispisati će verziju koju server ima
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## Srodne Funkcije

- [SetSVarInt](SetSVarInt): Postavite cijeli broj za varijablu servera.
- [GetSVarInt](GetSVarInt): Dobij cjelobrojnu vrijednost server varijable.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
