---
title: strval
description: Pretvori string u cijeli broj.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Pretvori string u cijeli broj.

| Ime            | Deskripcija                                   |
| -------------- | --------------------------------------------- |
| const string[] | String kojeg želite pretvoriti u cijeli broj. |

## Returns

Cjelobrojna vrijednost stringa. '0 ako string nije numerički.

## Primjeri

```c
new string[4] = "250";
new iValue = strval(string); // iValue je sada '250'
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedite dva stringa da biste vidjeli jesu li isti.
- [strfind](strfind): Potražite podstring u stringu.
- [strdel](strdel): Izbriši dio/cijeli string.
- [strins](strins): Stavite string u drugi string.
- [strlen](strlen): Provjeri dužinu stringa.
- [strmid](strmid): Izdvoji znakove iz stringa.
- [strpack](strpack): Spakujte string u odredište.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
