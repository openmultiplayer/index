---
title: PlayerSpectateVehicle
description: Postavlja igrača da spectate-a (nadgleda) neko vozilo.
tags: ["player", "vehicle"]
---

## Deskripcija

Postavlja igrača da spectate-a (nadgleda) neko vozilo. Njegova kamera će biti prikvačena za vozilo ako ga neko vozi.

| Ime             | Deskripcija                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| playerid        | ID igrača koji će nadgledati vozilo.                                                                                |
| targetvehicleid | ID vozila kojeg će igrač nadgledati.                                                                                |
| mode            | [Način/tip](../resources/spectatemodes). Općenito se može ostaviti prazno jer je prema zadanim postavkama 'normal'. |

## Returns

1: Funkcija uspješno izvršena. Imajte na umu da se uspjeh prijavljuje ako igrač nije u režimu gledatelja (TogglePlayerSpectating), ali ništa se neće dogoditi. TogglePlayerSpectating MORA se prvo koristiti.

0: Funkcija neuspješno izvršena. Igrač, vozilo ili oboje ne postoje.

## Primjeri

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```

## Zabilješke

:::warning

Red je KRITIČAN! Obavezno koristite TogglePlayerSpectating prije PlayerSpectateVehicle. Igrač i vozilo moraju biti u istom unutrašnjosti i virtualnom svijetu da bi ova funkcija radila ispravno.

:::

## Srodne Funkcije

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Nadgledaj igrača.
- [TogglePlayerSpectating](TogglePlayerSpectating): Počni ili prekini spectate-ovati (nadgledati).
