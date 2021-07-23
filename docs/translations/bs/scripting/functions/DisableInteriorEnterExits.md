---
title: DisableInteriorEnterExits
description: Onemogućite sve unutrašnje ulaze i izlaze u igri (žute strelice na vratima).
tags: []
---

## Deskripcija

Onemogućite sve unutrašnje ulaze i izlaze u igri (žute strelice na vratima).

## Primjeri

```c
public OnGameModeInit()
{
    DisableInteriorEnterExits();
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija će raditi samo ukoliko se iskoristi prije nego što se igrač konektuje (preporučeno je da se koristi unutar OnGameModeInit). Neće ukloniti markere povezanog igrača.

:::

:::warning

Ukoliko se gamemode promijeni nakon što se iskoristi ova funkcija, novi gamemode neće onemogućiti markere, markeri se neće pojaviti već povezanim igračima (ali će biti za nove povezane igrača).

:::

## Srodne Funkcije

- [AllowInteriorWeapons](AllowInteriorWeapons): Odredi da li oružja mogu da se koriste u enterijerima.
