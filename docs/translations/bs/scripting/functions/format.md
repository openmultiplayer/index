---
title: format
description: Formatira string tako da sadrži varijable i druge stringove unutar njega.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Formatira string tako da sadrži varijable i druge stringove unutar njega.

| Ime            | Deskripcija                                  |
| -------------- | -------------------------------------------- |
| output[]       | String za izlaz rezultata u                  |
| len            | Izlaz maksimalne dužine koje može sadržavati |
| format[]       | Format stringa                               |
| {Float,\_}:... | Neodređeni broj argumenata bilo koje oznake  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Specifikatori formata

| Specifikator | Značenje                                        |
| ------------ | ----------------------------------------------- |
| %i           | Neoznačeni(Unsigned) cijeli broj                |
| %d           | Označeni(Signed) cijeli broj                    |
| %s           | String                                          |
| %f           | Floating-point broj                             |
| %c           | ASCII karakter                                  |
| %x           | Hexadecimalni broj                              |
| %b           | Binarni broj                                    |
| %%           | Literal(Doslovno) '%'                           |
| %q           | Izbjegnite tekst za SQLite. (Dodano u 0.3.7 R2) |

Vrijednosti rezerviranih mjesta slijede se potpuno istim redoslijedom kao i parametri u pozivu, tj. "Imam% i godine" - `%i` će biti zamijenjena cjelobrojnom varijablom, što je dob osobe.

Po želji možete staviti broj između `%` i slovo koda rezerviranog mjesta. Ovaj broj označava širinu polja; ako je veličina parametra za ispis na mjestu rezerviranog mjesta manja od širine polja, polje se proširuje razmacima. Da biste smanjili broj decimalnih mjesta koja se prikazuju na plovku, možete dodati '.\ <max number\>' između `%` i `f`, tj. `%.2f`.

## Primjeri

```c
new result[128];
new number = 42;
format(result,sizeof(result), "Broj je %i.",number);  //-> The number is 42.
new string[]= "simple message";
format(result,sizeof(result), "Ovo je %s koji sadrži broj %i.", string, number);
// Ovo je jednostavna poruka koja sadrži broj 42.
new string[64];
format(string,sizeof(string),"Vaš rezultat je: %d",GetPlayerScore(playerid));
SendClientMessage(playerid,0xFFFFFFAA,string);
new hour, minute, second, string[32];
gettime(hour, minute, second);

format(string, sizeof(string), "Vrijeme je %02d:%02d:%02d.", hour, minute, second); // Ispisati će nešto kao 09:45:02
SendClientMessage(playerid, -1, string);
new string[35];
format(string,sizeof(string),"43% mojih majica je crno.","%%");
SendClientMessage(playerid,0xFFFFFAA,string);
```

## Zabilješke

:::warning

Ova funkcija ne podržava spakovane stringove.

:::

## Srodne Funkcije

- [print](print): Ispišite osnovnu poruku u zapisnike poslužitelja i konzolu.
- [printf](printf): Ispišite formatiranu poruku u zapise poslužitelja i konzolu.
