---
title: strcat
description: Ova funkcija spaja dva stringa u odredišni string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija spaja dva stringa u odredišni string.

| Ime                   | Deskripcija                              |
| --------------------- | ---------------------------------------- |
| dest[]                | String za pohraniti dva spojena stringa. |
| const source[]        | Izvorni string.                          |
| maxlength=sizeof dest | Maksimalna dužina odredišta.             |

## Returns

Dužina novog odredišnog stringa.

## Primjeri

```c
new string[40] = "Hello";
strcat(string, " World!");

// string je sada 'Hello World!'
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strdel](strdel): Obriši dio stringa.
- [strins](strins): Unesi tekst u string.
- [strlen](strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
