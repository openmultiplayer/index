---
title: SetPlayerTime
description: Postavlja vrijeme igre za igrača.
tags: ["player"]
---

## Deskripcija

Postavlja vrijeme igre za igrača. Ako je sat igrača uključen (TogglePlayerClock) prikazano vrijeme će se automatski ažurirati.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za postaviti vrijeme igre. |
| hour     | Sat za postaviti (0-23).             |
| minute   | Minute za postaviti (0-59).          |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
SetPlayerTime(playerid, 12, 0); // Podne
SetPlayerTime(playerid, 0, 0); // Ponoć
```

## Zabilješke

:::tip

Korištenje ove funkcije unutar OnPlayerConnect neće raditi.

:::

## Srodne Funkcije

- [SetWorldTime](SetWorldTime): Postavi globalno vrijeme servera.
- [GetPlayerTime](GetPlayerTime): Dobij vrijeme igrača.
- [TogglePlayerClock](TogglePlayerClock): Uključite / isključite sat u gornjem desnom uglu.
