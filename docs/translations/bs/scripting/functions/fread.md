---
title: fread
description: Pročitajte jedan redak iz datoteke.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Pročitajte jedan redak iz datoteke.

| Ime    | Deskripcija                                                       |
| ------ | ----------------------------------------------------------------- |
| handle | Upravitelj datoteke za upotrebu, otvorila je fopen ()             |
| string | String niza za čuvanje pročitanog teksta, proslijeđen referencom. |
| size   | Broj bajtova za čitanje.                                          |
| pack   | Da li bi niz trebao biti spakovan? true/false.                    |

## Returns

Dužina niza (pročitani tekst) kao cijeli broj.

## Primjeri

```c
// Otvori "file.txt" u "read only" modu (samo čitanje)
new File:handle = fopen("file.txt", io_read),

    // Inicijalizirajte "buf"
    buf[128];

// Provjerite je li datoteka otvorena
if (handle)
{
    // Uspješno

    // Čitajte cijelu datoteku
    while(fread(handle, buf)) print(buf);

    // Zatvori fajl/datoteku
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
// Otvorite "file.txt" u "read and write" načinu (čitanje i pisanje)
new File:handle = fopen("file.txt"),

    // Inicijalizirajte "buf"
    buf[128];

// Provjeri da li je fajl/datoteka otvoren/a
if (handle)
{
    // Uspješno

    // Čitajte cijelu datoteku
    while(fread(handle, buf)) print(buf);

    // Postavite pokazivač datoteke na prvi bajt
    fseek(handle, _, seek_begin);

    // Upiši "I just wrote here!" u ovaj fajl
    fwrite(handle, "I just wrote here!");

    // Zatvori fajl/datoteku
    fclose(handle);
}
else
{
    // Error
    print("File \"file.txt\" ne postoji, ili ne može biti otvoren.");
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
