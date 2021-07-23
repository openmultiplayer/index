---
title: DeletePVar
description: Briše prethodno postavljenu varijablu igrača.
tags: ["pvar"]
---

## Deskripcija

Briše prethodno postavljenu varijablu igrača.

| Ime      | Deskripcija                                |
| -------- | ------------------------------------------ |
| playerid | ID igrača kojem brišemo varijablu          |
| varname  | Ime varijable koju brišemo                 |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ili navedeni igrač nije konektovan ili nema postavljene varijable sa tim imenom.

## Primjeri

```c
SetPVarInt(playerid, "SomeVarName", 69);

// Kasnije, kada varijabla nije više potrebna...

DeletePVar(playerid, "SomeVarName");
```

## Zabilješke

:::tip

Jednom kada se varijabla izbriše, pokušavajući vratiti vrijednost vratiti će 0 (za integere i floatove i NULL za stringove).

:::

## Srodne Funkcije

- [SetPVarInt](SetPVarInt): Postavlja tip integer za varijablu igrača.
- [GetPVarInt](GetPVarInt): Uzima prethodni postavljeni integer za varijablu igrača.
- [SetPVarString](SetPVarString): Postavlja tip string za varijablu igrača.
- [GetPVarString](GetPVarString): Uzima prethodni postavljeni string za varijablu igrača.
- [SetPVarFloat](SetPVarFloat): Postavlja tip float za varijablu igrača.
- [GetPVarFloat](GetPVarFloat): Uzima prethodni postavljeni float za varijablu igrača.
