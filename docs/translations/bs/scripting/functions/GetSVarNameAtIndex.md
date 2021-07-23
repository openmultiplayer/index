---
title: GetSVarNameAtIndex
description: Dohvatite ime sVar putem indeksa.
tags: []
---

## Deskripcija

Dohvatite ime sVar putem indeksa.

| Ime           | Deskripcija                                                       |
| ------------- | ----------------------------------------------------------------- |
| index         | Index sVar-a.                                                     |
| ret_varname[] | String za pohraniti ime sVar-a, proslijeđeno referencom.          |
| ret_len       | Maksimalna dužina returnovanog/vraćenog string, koristi sizeof(). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Srodne Funkcije

- [GetSVarType](GetSVarType): Dobij tip server varijable.
- [GetSVarInt](GetSVarInt): Dobij cjelobrojnu vrijednost server varijable.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
