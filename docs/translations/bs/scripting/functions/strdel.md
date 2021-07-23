---
title: strdel
description: Obriši dio stringa.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Obriši dio stringa.

| Ime      | Deskripcija                                  |
| -------- | -------------------------------------------- |
| string[] | Stringa za izbrisati njegov dio.             |
| start    | Pozicija prvog karaktera za izbrisati.       |
| end      | Pozicija posljednjeg karaktera za izbrisati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new string[42] = "We will delete everything apart from this"; // izbrisati ćemo sve osim 'this'
strdel(string, 0, 37); // string je sada "this"
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strins](strins): Unesi tekst u string.
- [strlen](strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
