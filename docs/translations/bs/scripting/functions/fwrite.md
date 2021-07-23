---
title: fwrite
description: Napišite tekst u datoteku.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Napišite tekst u datoteku.

| Ime    | Deskripcija                                           |
| ------ | ----------------------------------------------------- |
| handle | Upravitelj datoteke za upotrebu, otvorila je fopen () |
| string | String za upisati u fajl.                             |

## Returns

Duljina zapisanog niza kao cijeli broj.

## Primjeri

```c
// Otvorite "file.txt" u "write only" načinu (samo pisanje)
new File:handle = fopen("file.txt", io_write);

// Provjeri da li je fajl/datoteka otvoren/a
if (handle)
{
    // Uspješno

    // Upiši "I just wrote here!" u ovaj fajl
    fwrite(handle, "I just wrote here!");

    // Zatvori fajl/datoteku
    fclose(handle);
}
else
{
    // Error
    print("Nesupješno otvaranje file \"file.txt\".");
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
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
// Otvorite "file.txt" u "append only" načinu (samo dodavanje)
new File:handle = fopen("file.txt", io_append);

// Provjeri da li je fajl/datoteka otvoren/a
if (handle)
{
    // Uspješno

    // Dodati "This is a text.\r\n"
    fwrite(handle, "This is a test.\r\n");

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

:::tip

Ova funkcija zapisuje u datoteku u UTF-8, koja ne podržava neke simbole lokaliziranog jezika.

:::

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
