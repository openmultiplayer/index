---
title: SetWorldTime
description: Postavlja vrijeme svijeta (za sve igrače) na određeni sat.
tags: []
---

## Deskripcija

Postavlja vrijeme svijeta (za sve igrače) na određeni sat.

| Ime  | Deskripcija             |
| ---- | ----------------------- |
| hour | Sat za postaviti (0-23) |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Postavi vrijeme na 12 sati (podne)
SetWorldTime(12);
```

## Zabilješke

:::tip

Ova je funkcija relevantna samo za igrače koji ne koriste sat koji prolazi - pogledajte TogglePlayerClock.

:::

:::tip

Da biste postavili minute i/ili postavili vrijeme za pojedine igrače, pogledajte SetPlayerTime.

:::

## Srodne Funkcije

- [SetPlayerTime](SetPlayerTime): Postavi igraču vrijeme.
- [SetWeather](SetWeather): Postavite globalno vrijeme (weather).
- [SetGravity](SetGravity): Postavite globalnu gravitaciju.
