---
title: DeleteSVar
description: Briše prethodno postavljenu server varijablu.
tags: []
---

## Deskripcija

Briše prethodno postavljenu server varijablu.

| Ime     | Deskripcija                                |
| ------- | ------------------------------------------ |
| varname | Ime server varijable koju brišemo          |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. There is no variable set with the given name.

## Primjeri

```c
SetSVarInt("SomeVarName", 69);

// Kasnije, kada varijabla više nije potrebna

DeleteSVar("SomeVarName");
```

## Zabilješke

:::tip

Jednom kada se varijabla izbriše, pokušavajući vratiti vrijednost vratiti će 0 (za integere i floatove i NULL za stringove).

:::

## Srodne Funkcije

- [SetSVarInt](SetSVarInt): Postavite cijeli broj za varijablu servera.
- [GetSVarInt](GetSVarInt): Dobijte poslužitelj igrača kao cijeli broj.
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
