---
title: fremove
description: Obriši datoteku.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Obriši datoteku.

| Ime    | Deskripcija                                                           |
| ------ | --------------------------------------------------------------------- |
| name[] | Path do datoteke koju želite izbrisati. (NOTE: Ne upravljač datoteke) |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Datoteka ne postoji ili nemate dozvolu da je izbrišete.

## Primjeri

```c
fremove("Example.txt");
```

## Zabilješke

:::tip

Datoteke koje su trenutno otvorene (fopen) moraju se prvo zatvoriti (fclose) da bi se izbrisale.

:::

:::warning

Path do datoteke mora biti valjana.

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
