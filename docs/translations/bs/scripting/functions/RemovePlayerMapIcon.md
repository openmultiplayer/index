---
title: RemovePlayerMapIcon
description: Uklanja ikonicu na mapi koja je prethodno postavljena za igrača koristeći SetPlayerMapIcon.
tags: ["player"]
---

## Deskripcija

Uklanja ikonicu na mapi koja je prethodno postavljena za igrača koristeći SetPlayerMapIcon.

| Ime      | Deskripcija                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | ID igrača čija će ikonica biti uklonjena.                           |
| iconid   | ID ikonice za ukloniti. Ovo je drugi parametar od SetPlayerMapIcon. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);

// Kasnije
RemovePlayerMapIcon(playerid, 12);
```

## Srodne Funkcije

- [SetPlayerMapIcon](/docs/scripting/functions/SetPlayerMapIcon): Kreiraj map-ikonicu za igrača.
