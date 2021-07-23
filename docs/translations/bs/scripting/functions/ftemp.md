---
title: ftemp
description: Stvara datoteku u "tmp", "temp" ili root direktorijumu sa slučajnim imenom za čitanje i pisanje.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Stvara datoteku u "tmp", "temp" ili root direktorijumu sa slučajnim imenom za čitanje i pisanje. Datoteka se briše nakon upotrebe fclose() na datoteci.

## Primjeri

```c
// Stvorite privremeni tok datoteka
new File:t_handle = ftemp(),

    // Deklariši "handle"
    File:handle,

    // Deklariši "g_char"
    g_char;

// Provjerite je li otvoren privremeni tok datoteka
if (t_handle)
{
    // Uspješno

    // Otvori "file.txt" u "read only" modu (samo čitanje) and check, if the file is open
    if (handle = fopen("file.txt", io_read))
    {
        // Preuzmi sve znakove iz "file.txt"
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // Zapišite znak malim slovima u privremeni tok datoteka
            fputchar(t_handle, tolower(g_char), false);
        }

        // Zatvori "file.txt"
        fclose(handle);

        // Postavite pokazivač datoteke privremenog toka datoteka na prvi bajt
        fseek(t_handle, _, seek_begin);

        // Otvorite "file1.txt" u "write only" načinu (samo napiši) i provjerite je li datoteka otvorena
        if (handle = fopen("file1.txt", io_write))
        {
            // Uspješno

            // Preuzmite sve znakove iz privremenog toka datoteka
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Zapiši znak u "file1.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file1.txt"
            fclose(handle);

            // Postavite pokazivač datoteke privremenog toka datoteka na prvi bajt
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            // Error
            print("Nesupješno otvaranje file \"file1.txt\".");
        }

        // Otvorite "file2.txt" u načinu "samo napiši" i provjerite je li datoteka otvorena
        if (handle = fopen("file2.txt", io_write))
        {
            // Uspješno

            // Preuzmite sve znakove iz privremenog toka datoteka
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Napišite karakter u "file2.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file2.txt"
            fclose(handle);
        }
        else
        {
            // Error
            print("Nesupješno otvaranje file \"file2.txt\".");
        }
    }
    else
    {
        // Error
        print("Nesupješno otvaranje file \"file.txt\".");
    }

    // Zatvorite privremeni tok datoteka
    fclose(t_handle);
}
else
{
    // Error
    print("Stvaranje privremenog toka datoteka nije uspjelo.");
}
```

## Zabilješke

:::warning

Ova funkcija može srušiti poslužitelj kada nije kreiran pravi direktorij.

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
