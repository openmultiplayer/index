---
title: fclose
description: Zatvara fajl/datoteku.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Zatvara fajl/datoteku. Fajlove/Datoteke treba uvijek zatvoriti kada ih skripta više ne treba (nakon čitanja / pisanja).

| Ime         | Deskripcija                                                   |
| ----------- | ------------------------------------------------------------- |
| File:handle | Upravitelj datoteke za zatvoriti. Returnovan/vraćen od fopen. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Datoteka/fajl se ne može zatvoriti. Možda je već zatvorena.

## Primjeri

```c
// Otvorite "file.txt" u "append only" načinu (samo dodavanje)
new File:handle = fopen("file.txt", io_append);

// Provjeri da li je fajl/datoteka otvoren/a
if (handle)
{
    // Uspješno

    // Ispiši "Hi there!" u fajl/datoteku
    fwrite(handle, "Hi there!");

    // Zatvori fajl/datoteku
    fclose(handle);
}
else
{
    // Error
    print("Nesupješno otvaranje file \"file.txt\".");
}
```

## Zabilješke

:::warning

Korištenje nevaljanog upravitelja srušit će vaš server! Nabavite važeći upravitelj pomoću fopen ili ftemp.

:::

## Srodne Funkcije

- [fopen](fopen): Otvori fajl/datoteku.
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
