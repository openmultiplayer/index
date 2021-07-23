---
title: fblockwrite
description: Zapišite podatke u datoteku u binarnom formatu, zanemarujući linijske kočnice i kodiranje.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Zapišite podatke u datoteku u binarnom formatu, zanemarujući linijske kočnice i kodiranje.

| Ime                  | Deskripcija                                           |
| -------------------- | ----------------------------------------------------- |
| handle               | Upravitelj datoteke za upotrebu, otvorila je fopen () |
| buffer               | Upremnik za spremanje pročitanih podataka.            |
| size = sizeof buffer | Broj ćelija za čitanje.                               |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Definiraj "some_enum" (neki enum)
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// Deklariši "some_data" (neke podatke)
new some_data[some_enum];

// ...

// Otvori "file.bin" u "write only" modu (samo pisati)
new File:handle = fopen("file.bin", io_write);

// Provjeri ako je "file.bin" otvoren
if (handle)
{
    // Uspješno

    // Zapiši "some_data" u "file.bin"
    fblockwrite(handle, some_data);

    // Zatvori "file.bin"
    fclose(handle);
}
else
{
    // Error
    print("Nesupješno otvaranje \"file.bin\".");
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
