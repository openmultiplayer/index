---
title: GetSVarFloat
description: Dobija float vrijednost server varijable.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija float vrijednost server varijable.

| Ime     | Deskripcija                                                                           |
| ------- | ------------------------------------------------------------------------------------- |
| varname | Ime server varijable (osjetljivo na mala i velika slova). Dodijeljeno u SetSVarFloat. |

## Returns

Float vrijednost navedene varijable poslužitelja. I dalje će vraćati 0 ako varijabla nije postavljena.

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
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
