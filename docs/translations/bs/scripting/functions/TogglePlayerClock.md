---
title: TogglePlayerClock
description: Uključite sat u igri (gornji desni kut) za određenog igrača.
tags: ["player"]
---

## Deskripcija

Uključite sat u igri (gornji desni kut) za određenog igrača. Kada je ovo omogućeno, vrijeme će napredovati 1 minutu u sekundi. Vrijeme će se također interpolirati (polako mijenjati tokom vremena) kada se postavi pomoću SetWeather / SetPlayerWeather.

| Ime      | Deskripcija                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | Igrač čiji sat želite omogućiti / onemogućiti                       |
| toggle   | 1 da ga prikažete 0 da ga sakrijete. Skriven po zadanim postavkama. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. The specified player does not exist.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, 1); // Prikaži sat
    return 1;
}
```

## Zabilješke

:::tip

Vrijeme će automatski napredovati za 6 sati kada igrač umre.

:::

## Srodne Funkcije

- [GetPlayerTime](GetPlayerTime): Dobij vrijeme igrača.
- [SetPlayerTime](SetPlayerTime): Postavi igraču vrijeme.
- [SetWorldTime](SetWorldTime): Postavi globalno vrijeme servera.
