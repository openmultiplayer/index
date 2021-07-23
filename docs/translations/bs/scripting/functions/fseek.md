---
title: fseek
description: Promijenite trenutni položaj u datoteci.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Promijenite trenutni položaj u datoteci. Kroz datoteku možete tražiti unaprijed ili unatrag.

| Ime          | Deskripcija                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| handle       | Upravitelj datoteke za upotrebu, otvorila je fopen ()                                                              |
| position     | Nova pozicija u datoteci, u odnosu na parametar odakle (vidi dolje).                                               |
| whence       | Početni položaj na koji se odnosi položaj parametra.                                                               |
| seek_start   | Postavite položaj datoteke u odnosu na početak datoteke (parametar položaja mora biti pozitivan).                  |
| seek_current | Postavite položaj datoteke u odnosu na trenutni položaj datoteke: parametar položaja dodaje se u trenutni položaj. |
| seek_end     | Postavite položaj datoteke u odnosu na kraj datoteke (položaj parametra mora biti nula ili negativan).             |

## Returns

Nova pozicija; u odnosu na početak datoteke.

## Primjeri

```c
// Otvori "file.txt" u "read only" modu (samo čitanje)
new File:handle = fopen("file.txt", io_read);

// Ako je "file.txt" otvoren
if (handle)
{
    // Uspješno

    // Skočite na 1. bajt "file.txt" i ispišite njegov položaj
    printf("Begin of file position: %d", fseek(handle, 0, seek_start));

    // Skočite na posljednji bajt "file.txt" i ispišite njegov položaj
    printf("End of file position: %d", fseek(handle, 0, seek_end));

    // Skočite na isti bajt "file.txt" i ispišite njegov položaj
    printf("Currrent file position: %d", fseek(handle, 0, seek_current));

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
