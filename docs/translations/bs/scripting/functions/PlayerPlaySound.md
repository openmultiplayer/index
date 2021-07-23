---
title: PlayerPlaySound
description: Reprodukuje navedeni zvuk igraču.
tags: ["player"]
---

## Deskripcija

Reprodukuje navedeni zvuk igraču.

Pogledajte library koji sadrži sve zvukove, [ovo](https://github.com/WoutProvost/samp-sound-array).

| Ime      | Deskripcija                                                |
| -------- | ---------------------------------------------------------- |
| playerid | ID igrača kojem će se reprodukovati zvuk.                  |
| soundid  | Zvuk za reprodukovati.                                     |
| Float:x  | X kordinata za reprodukovanje zvuka. (0.0 za bez pozicije) |
| Float:y  | Y kordinata za reprodukovanje zvuka. (0.0 za bez pozicije) |
| Float:z  | Z kordinata za reprodukovanje zvuka. (0.0 za bez pozicije) |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
// zvuk udaranja igrača (odgovara za naredbe kao što je /slap). Zvuk će biti tih, jer je izvor zapravo 10 metara iznad igrača.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## Zabilješke

:::tip

Koristite kordinate samo ako želite da se zvuk reproducira na određenoj poziciji. Postavite kordinatama sve na 0,0 da samo reproducira zvuk.

:::

## Srodne Funkcije

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Pusti krivičnu prijavu za igrača.
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Reprodukuje audio tok za igrača.
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Zaustavlja trenutni audio stream za igrača.
