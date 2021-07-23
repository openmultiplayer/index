---
title: SetPlayerFacingAngle
description: Postavi smjer gledanja igrača (Z rotacija).
tags: ["player"]
---

## Deskripcija

Postavi smjer gledanja igrača (Z rotacija).

| Ime       | Deskripcija                            |
| --------- | -------------------------------------- |
| playerid  | ID igrača za postaviti smjer gledanja. |
| Float:ang | Ugao pod kojim će igrač gledati.       |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
SetPlayerFacingAngle( playerid, 0 ); // Igrač gleda sjeverno
```

```
         sjever (0)
            |
(90) zapad-   -istok (270)      (Dobro za zapamtiti: Nikad ne jedite isjeckanu pšenicu)
            |
         south (180)
```

## Zabilješke

:::warning

Uglovi su obrnuti u GTA:SA; 90 stepeni bi bilo istočno u stvarnom svijetu, ali u GTA:SA 90 stepeni je zapravo zapad. Sjever i Jug su i dalje 0/360 i 180. Da biste to pretvorili, jednostavno napravite kut od 360.

:::

## Srodne Funkcije

- [GetPlayerFacingAngle](GetPlayerFacingAngle): Provjeri gdje igrač gleda.
- [SetPlayerPos](SetPlayerPos): Postavite poziciju igrača.
