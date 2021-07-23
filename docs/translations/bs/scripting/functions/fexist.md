---
title: fexist
description: Provjerava postoji li određena datoteka u direktoriju skripti datoteka.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Provjerava postoji li određena datoteka u direktoriju skripti datoteka.

| Ime         | Deskripcija                                           |
| ----------- | ----------------------------------------------------- |
| pattern[]   | Ime datoteke, koja po izboru sadrži zamjenske znakove |
| characters. |

## Returns

Broj datoteka koje odgovaraju obrascu.

## Primjeri

```c
// Provjeri da li "file.txt" postoji
if (fexist("file.txt"))
{
    // Uspješno

    // Ispiši uspješno
    print("\"file.txt\" postoji.");
}
else
{
    // Error
    print("\"file.txt\" ne postoji.");
}
```

## Srodne Funkcije

- [fopen](fopen): Otvori fajl/datoteku.
- [fclose](fclose): Zatvori fajl/datoteku.
- [ftemp](ftemp): Stvorite privremeni tok fajlova/datoteka.
- [fremove](fremove): Uklonite fajl/datoteku.
- [fwrite](fwrite): Piši u fajl/datoteku.
- [fread](fread): Čitaj fajl/datoteku.
- [fputchar](fputchar): Stavite znak u fajl/datoteku.
- [fgetchar](fgetchar): Dobijte znak iz fajla/datoteke.
- [fblockwrite](fblockwrite): Zapišite blokove podataka u fajl/datoteku.
- [fblockread](fblockread): Očitavanje blokova podataka iz fajla/datoteke.
- [fseek](fseek): Skoči na određeni znak u fajlu/datoteci.
- [flength](flength): Nabavite dužinu fajla/datoteke.
- [fexist](fexist): Provjeri da li datoteka postoji.
- [fmatch](fmatch): Provjeri podudaraju li se uzorci s nazivom datoteke.
