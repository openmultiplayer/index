---
title: PlayerSpectatePlayer
description: Daje mogućnost igraču da spectate-a (nadgleda) drugog igrača.
tags: ["player"]
---

## Deskripcija

Daje mogućnost igraču da spectate-a (nadgleda) drugog igrača.

| Ime            | Deskripcija                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| playerid       | ID igrača koji će nadgledati.                                                                              |
| targetplayerid | ID igrača kojeg će nadgledati.                                                                             |
| mode           | [Način](../resources/spectatemodes) na koji će nadgledati (neobavezno; po zadanim postavkama na 'normal'). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Jedan od navedenih igrača ne postoji.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Zabilješke

:::warning

Red je KRITIČNA! Obavezno koristite TogglePlayerSpectating prije PlayerSpectatePlayer. Virtualni svijet i interijer playerida i targetplayerida moraju biti isti da bi ova funkcija radila ispravno.

:::

## Srodne Funkcije

- [PlayerSpectateVehicle](PlayerSpectateVehicle): Nadgledaj vozilo.
- [TogglePlayerSpectating](TogglePlayerSpectating): Počni ili prekini spectate-ovati (nadgledati).
