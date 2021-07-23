---
title: GetSVarString
description: Dobija string vrijednost server varijable.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija string vrijednost server varijable.

| Ime           | Deskripcija                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| varname       | Ime server varijable (osjetljivo na mala i velika slova). Dodijeljeno u SetSVarString. |
| string_return | Niz za pohraniti vrijednost stringa, proslijeđeno referencom.                          |
| len           | Maksimalna dužina returnovanog/vraćenog stringa.                                       |

## Returns

Dužina stringa.

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
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
