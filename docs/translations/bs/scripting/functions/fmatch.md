---
title: fmatch
description: Pronađite naziv datoteke koji odgovara uzorku.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Pronađite naziv datoteke koji odgovara uzorku.

| Ime           | Deskripcija                                                          |
| ------------- | -------------------------------------------------------------------- |
| name          | Niz u kojem se nalazi rezultat vraćen je kao spakirani niz.          |
| const pattern | Uzorak koji bi trebao odgovarati. Može sadržavati zamjenske znakove. |
| indeks        | Broj datoteke, u slučaju da postoji više podudaranja.                |
| veličina      | Maksimalna veličina imena parametra                                  |

## Returns

Tačno(true) na uspjehu, netačno(false) na neuspjehu.

## Zabilješke

:::warning

Ova funkcija ne radi u trenutnoj verziji SA:MP-a!

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
