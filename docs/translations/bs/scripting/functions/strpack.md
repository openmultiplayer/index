---
title: strpack
description: Upakuj string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Upakuj string. Upakovani stringovi koriste 75% manje memorije.

| Ime                     | Deskripcija                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| dest[]                  | Odredišni string za sačuvati upakovani string, proslijeđeno referencom. |
| const source[]          | Izvor, originalni string.                                               |
| maxlength=sizeof string | Maksimalna veličina za unijeti.                                         |

## Returns

Broj upakovanih karaktera.

## Primjeri

```c
new string[32 char];
strpack(string, "Cao, kako si?");
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strins](../function/strins): Unesi tekst u string.
- [strlen](../function/strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
- [strdel](strdel): Obriši dio stringa.
