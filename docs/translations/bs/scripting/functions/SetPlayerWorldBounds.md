---
title: SetPlayerWorldBounds
description: Postavite granice svijeta igraču.
tags: ["player"]
---

## Deskripcija

Postavite granice svijeta igraču. Igrači ne mogu ići izvan granica (biće gurnuti nazad).

| Ime         | Deskripcija                                 |
| ----------- | ------------------------------------------- |
| playerid    | ID igrača za postaviti granice svijeta.     |
| Float:x_max | Maksimalna X kordinata gdje igrač može ići. |
| Float:x_min | Maksimalna X kordinata gdje igrač može ići. |
| Float:y_max | Minimalna Y kordinata gdje igrač može ići.  |
| Float:y_min | Minimalna Y kordinata gdje igrač može ići.  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```

```
               (Sjever)
                 ymax
             |----------|
             |          |
(Zapad) xmin |          | xmax (Istok)
             |          |
             |----------|
                 ymin
                 (Jug)
```

## Zabilješke

:::tip

Svjetske granice igrača mogu se resetirati postavljanjem na 20000.0000, -20000.0000, 20000.0000, -20000.0000. To su zadane vrijednosti.

:::

:::warning

Ova funkcija ne radi u enterijerima!

:::

## Srodne Funkcije

- [GangZoneCreate](GangZoneCreate): Kreiraj gangzonu.
