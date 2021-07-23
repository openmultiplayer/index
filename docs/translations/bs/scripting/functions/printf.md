---
title: printf
description: Ispisuje formatirani niz na konzoli (prozor servera, a ne chat u igri).
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ispisuje formatirani niz na konzoli (prozor servera, a ne chat u igri).

| Ime            | Deskripcija                                    |
| -------------- | ---------------------------------------------- |
| format[]       | Formatirani string.                            |
| {Float,\_}:... | Neograničeni broj argumenata bilo koje oznake. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Format Specifiers

| Specifier | Meaning                                         |
| --------- | ----------------------------------------------- |
| %i        | Cijeli broj                                     |
| %d        | Cijeli broj                                     |
| %s        | String                                          |
| %f        | Float broj                                      |
| %c        | ASCII karakter                                  |
| %x        | Hexadecimalni broj                              |
| %b        | Binarni broj                                    |
| %%        | Literal '%'                                     |
| %q        | Izbjegnite tekst za SQLite. (Dodano u 0.3.7 R2) |

Vrijednosti rezerviranih mjesta slijede se potpuno istim redoslijedom kao i parametri u pozivu, tj. "Imam %i godina" - `%i` će biti zamijenjena cjelobrojnom varijablom, što je dob osobe.

Po želji možete staviti broj između `%` i slovo koda rezerviranog mjesta. Ovaj broj označava širinu polja; ako je veličina parametra za ispis na mjestu rezerviranog mjesta manja od širine polja, polje se proširuje razmacima. Da biste smanjili broj decimalnih mjesta koja se prikazuju na floatu, možete dodati `.\<max number\>` između `%` i `f`, tj. `%.2f`.

## Primjeri

```c
new number = 42;
printf("The number is %d.",number);  //-> Broj je 42.

new string[]= "prosta poruka";
printf("This is a %s containing the number %d.", string, number); //-> Ovo je prosta poruka koja sadrži broj 42.

new character = 64;
printf("I'm %c home",character); //-> I'm @ home
```

## Zabilješke

:::warning

Niz formata ili njegov izlaz ne smije prelaziti 1024 znaka. Sve što je duže od te dužine može dovesti do pada servera.

:::

## Srodne Funkcije

- [print](./print): Ispišite osnovnu poruku u zapisnike poslužitelja i konzolu.
- [format](./format): Formatira string.
