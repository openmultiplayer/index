---
title: GetPVarNameAtIndex
description: Dohvatite ime pVara igrača putem indeksa.
tags: ["pvar"]
---

## Deskripcija

Dohvatite ime pVara igrača putem indeksa.

| Ime           | Deskripcija                                             |
| ------------- | ------------------------------------------------------- |
| playerid      | ID igrača za dobiti igračevu varijablu.                 |
| index         | Index igračevog pVara.                                  |
| ret_varname[] | String za pohraniti ime pVara, proslijeđeno referencom. |
| ret_len       | Maksimalna dužina vraćenog stringa, koristi sizeof().   |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Srodne Funkcije

- [GetPVarType](GetPVarType): Dobij tip igračeve varijable.
- [GetPVarInt](GetPVarInt): Dobij prethodno postavljeni cijeli broj iz igračeve varijable.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
