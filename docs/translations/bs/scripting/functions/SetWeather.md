---
title: SetWeather
description: Postavite vrijeme (weather) za sve igrače.
tags: []
---

## Deskripcija

Postavite vrijeme (weather) za sve igrače.

| Ime       | Deskripcija                                             |
| --------- | ------------------------------------------------------- |
| weatherid | [Vrijeme/weather](../resources/weatherid) za postaviti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
if (!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## Zabilješke

:::tip

Ako je omogućen TogglePlayerClock, vrijeme će se polahko mijenjati s vremenom, umjesto da se promijeni trenutno. U igri postoje samo važeći 21 vremenski ID (0 - 20), ali igra nema bilo kakav oblik provjere dometa.

:::

## Srodne Funkcije

- [SetPlayerWeather](SetPlayerWeather): Postavite vrijeme (weather) igrača.
- [SetGravity](SetGravity): Postavite globalnu gravitaciju.
