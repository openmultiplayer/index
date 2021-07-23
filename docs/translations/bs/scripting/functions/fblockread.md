---
title: fblockread
description: Ova funkcija vam omogućuje čitanje podataka iz datoteke, bez kodiranja i završetaka linije.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija vam omogućuje čitanje podataka iz datoteke, bez kodiranja i završetaka linije.

| Ime                  | Deskripcija                                           |
| -------------------- | ----------------------------------------------------- |
| handle               | Upravitelj datoteke za upotrebu, otvorila je fopen () |
| buffer               | Upremnik za spremanje pročitanih podataka.            |
| size = sizeof buffer | Broj ćelija za čitanje.                               |

## Returns

Broj pročitanih ćelija. Nula, ako je dostignut kraj datoteke.

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

// Otovri "file.bin" u "read only" modu (samo čitanje)
new File:handle = fopen("file.bin", io_write)

    // Deklariši "file_len"
    file_len;

// Provjeri ako je "file.bin" otvoren
if (handle)
{
    // Uspješno

    // Nabavimo dužinu datoteke "file.bin"
    file_len = flength(handle);

    // Ako je datoteka jednako velika od niza
    if (file_len == (some_enum*4))
    {
        // Uspješno

        // Čitanje iz "file.bin" u "some_data" (neke podatke)
        fblockread(handle, some_data);
    }
    else
    {
        // Error
        print("\"file.bin\" nije kompatibilan s nizom.");
    }

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
