---
title: GetSVarInt
description: Dobija cjelobrojnu vrijednost server varijable.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija cjelobrojnu vrijednost server varijable.

| Ime     | Deskripcija                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| varname | Ime server varijable (osjetljivo na mala i velika slova). Dodijeljeno u SetSVarInt. |

## Returns

Cijelobrojna vrijednost navedene varijable servera. I dalje će vraćati 0 ako varijabla nije postavljena.

## Primjeri

```c
// postavi "Version"
SetSVarInt("Version", 37);
// ispisati će verziju koju server ima
printf("Version: %d", GetSVarInt("Version"));
```

## Srodne Funkcije

- [SetSVarInt](SetSVarInt): Postavite cijeli broj za varijablu servera.
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
