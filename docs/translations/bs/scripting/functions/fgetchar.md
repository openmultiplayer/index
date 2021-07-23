---
title: fgetchar
description: Čita jedan znak iz datoteke.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Čita jedan znak iz datoteke.

| Ime    | Deskripcija                                                      |
| ------ | ---------------------------------------------------------------- |
| handle | Upravitelj datoteke za upotrebu, otvorila je fopen ()            |
| value  | Ovaj parametar nema koristi, samo ga ostavite na "0".            |
| utf8   | Ako je tačno, čitajte znak kao UTF-8, inače kao prošireni ASCII. |

## Returns

Ako uspije, vraća proširenu ASCII ili UTF-8 vrijednost znaka na trenutnoj poziciji u datoteci, inače EOF (kraj datoteke).

## Primjeri

```c
// Otvori "file.txt" u "read only" modu (samo čitanje)
new File:handle = fopen("file.txt", io_read),

    // Deklariši "g_char"
    g_char;

// Provjeri ako je "file.txt" otvoren
if (handle)
{
    // Pročitajte sve znakove, zanemarujući UTF-8.
    while((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // Ispiši karakter
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

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
