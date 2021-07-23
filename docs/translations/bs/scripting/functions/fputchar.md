---
title: fputchar
description: Napišite jedan znak u datoteku.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Napišite jedan znak u datoteku.

| Ime    | Deskripcija                                                      |
| ------ | ---------------------------------------------------------------- |
| handle | Upravitelj datoteke za upotrebu, otvorila je fopen ()            |
| value  | Ovaj parametar nema koristi, samo ga ostavite na "0".            |
| utf8   | Ako je tačno, čitajte znak kao UTF-8, inače kao prošireni ASCII. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Otvorite "file.txt" u "write only" načinu (samo pisanje)
new File:handle = fopen("file.txt", io_write);
if (handle)
{
    // Uspješno

    // Ispiši karakter "e" u "file.txt"
    fputchar(handle, 'e', false);

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
