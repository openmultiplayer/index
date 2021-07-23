---
title: strcmp
description: Upoređuje dva stringa kako pi vidjelo da li su isti.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Upoređuje dva stringa kako pi vidjelo da li su isti

| Ime                   | Deskripcija                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| string1               | Prvi string za uporediti.                                                                                                               |
| string2               | Drugi string za uporediti.                                                                                                              |
| ignorecase (optional) | Kada je postavljeno na 'true', velika slova nemaju veze - HeLLo je isto kao Hello. Kada je postavljeno na 'false', oni nisu isti.       |
| length (optional)     | Kada se postavi ova dužina, uspoređivat će se prvih x znakova - izvođenje "Hello" i "Hell No" s dužinom od 4 reći će da je to isti niz. |

## Returns

0 ako se stringovi podudaraju na zadanoj dužini; 1 ili -1 ako se neki znak ne podudara: string1 [i] - string2 [i] ('i' predstavlja indeks znakova počevši od 0); razlika u broju znakova ako jedan niz odgovara samo dijelu drugog stringa.

## Primjeri

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Provjeri ako su stringovi isti
if (!strcmp(string1, string2))

new string3[] = "Hell";

// Provjeri ako se prva 4 karaktera podudaraju
if (!strcmp(string2, string3, false, 4))

// Provijerite ima li null nizova sa isnull()
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// Definicija za isnull():
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```

## Zabilješke

:::warning

Ova funkcija vraća 0 ako je bilo koji niz prazan. Provjerite ima li null nizova pomoću isnull (). Ako uspoređujete nizove iz tekstualne datoteke, trebali biste uzeti u obzir posebne znakove 'carriage return' i 'new line' (\r \n), kada su uključeni, kada koristite fread.

:::

## Srodne Funkcije

- [strfind](strfind): Pretraži string u drugom stringu.
- [strdel](strdel): Obriši dio stringa.
- [strins](../function/strins): Unesi tekst u string.
- [strlen](../function/strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
- http://www.compuphase.com/pawn/String_Manipulation.pdf
