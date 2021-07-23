---
title: fopen
description: Otvorite datoteku (za čitanje ili pisanje).
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Otvorite datoteku (za čitanje ili pisanje).

| Ime    | Deskripcija                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| name[] | Path do datoteke koju treba otvoriti (ako je navedeno samo ime datoteke, otvorit će datoteku s imenom navedenim u mapi 'scriptfiles'). |
| mode   | Režim kojim treba otvoriti datoteku (zadano: io_readwrite).                                                                            |

## Returns

Vraća upravitelj datoteke. Ovaj upravitelj se koristi za čitanje i pisanje. 0 ako nije uspjelo otvoriti datoteku.

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

```p
io_read       Čita iz fajla.
io_write      Upišite u datoteku ili kreirajte datoteku ako ona ne postoji. Briše sve postojeće sadržaje.
io_readwrite  Čita datoteku ili je kreira ako već ne postoji.
io_append     Dodaje (dodaje) u datoteku, samo za pisanje. Ako datoteka ne postoji, ona se kreira.
```

## Zabilješke

:::warning

Ako koristite io_read, a datoteka ne postoji, vratit će NULL referencu. Korištenje nevažećih referenci na funkcijama datoteka srušit će vaš server!

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
