---
title: flength
description: Vraća dužinu datoteke.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Vraća dužinu datoteke.

| Ime    | Deskripcija                                 |
| ------ | ------------------------------------------- |
| handle | Upravitelj datoteke vraćena fopen ili ftemp |

## Returns

Dužina datoteke, u bajtovima.

## Primjeri

```c
// Otvori "file.txt" u "read only" modu (samo čitanje)
new File:handle = fopen("file.txt", io_read);

// Ako je "file.txt" otvoren
if (handle)
{
    // Uspješno

    // Ispis veličine bajtova veličine "file.txt"
    printf("File size: %d", flength(handle));

    // Zatvori "file.txt"
    fclose(handle);
}
else
{
    // Error
    print("Nesupješno otvaranje \"file.txt\".");
}
```

## Zabilješke

:::warning

Korištenje nevaljanog upravitelja srušit će vaš server! Nabavite važeći upravitelj pomoću fopen ili ftemp.

:::

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
