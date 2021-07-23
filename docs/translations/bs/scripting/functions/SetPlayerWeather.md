---
title: SetPlayerWeather
description: Postavite vrijeme (weather) igrača.
tags: ["player"]
---

## Deskripcija

Postavite vrijeme (weather) igrača.

| Ime      | Deskripcija                     |
| -------- | ------------------------------- |
| playerid | ID igrača za postaviti vrijeme. |
| weather  | Vrijeme (weather) za postaviti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Ako je omogućen TogglePlayerClock, vrijeme će se polako mijenjati s vremenom, umjesto da se promijeni trenutno. U igri postoje samo važeći 21 vremenski ID (0 - 20), ali igra nema bilo kakav oblik provjere dometa.

:::

## Srodne Funkcije

- [SetWeather](SetWeather): Postavite globalno vrijeme (weather).
- [SetGravity](SetGravity): Postavite globalnu gravitaciju.
