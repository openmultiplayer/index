---
title: strunpack
description: Ovom se funkcijom može raspakirati string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ovom se funkcijom može raspakirati string.

| Ime                     | Deskripcija                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| dest[]                  | Odredišni string za spremanje nepakiranog stringa, proslijeđeno referencom. |
| const source[]          | Izvor, originalno upakovani string.                                         |
| maxlength=sizeof string | Maksimalna veličina za unijeti.                                             |

## Returns

Broj upakovanih karaktera.

## Primjeri

```c
new string[17];
new pstring[17 char] = !"Cao, kako si?";
strunpack(string, pstring);
```

## Srodne Funkcije

- [ispacked](ispacked): Provjeri da li je dati string upakovan.
- [strpack](strpack): Ova funkcija se može koristiti da upakujete string.
- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strins](../function/strins): Unesi tekst u string.
- [strlen](../function/strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
- [strdel](strdel): Obriši dio stringa.
