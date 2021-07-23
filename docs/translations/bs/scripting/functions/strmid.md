---
title: strmid
description: Izvuci niz znakova iz stringa.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Izvuci niz znakova iz stringa.

| Ime                   | Deskripcija                                                    |
| --------------------- | -------------------------------------------------------------- |
| dest[]                | String za pohraniti izdvojene karaktere.                       |
| const source[]        | String iz kojeg se izdvajaju karakteri.                        |
| start                 | Pozicija prvog karaktera.                                      |
| end                   | Pozicija posljednjeg karaktera.                                |
| maxlength=sizeof dest | Dužina odredišta. (Biće veličina dest-a po zadanim postavkama) |

## Returns

Broj karaktera pohranjenih u dest[]

## Primjeri

```c
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); //string sadrži "HELLO"
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strins](../function/strins): Unesi tekst u string.
- [strlen](../function/strlen): Dobij dužinu stringa.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
- [strdel](strdel): Obriši dio stringa.
