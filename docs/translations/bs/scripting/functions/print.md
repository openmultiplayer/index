---
title: print
description: Ispisuje formatirani niz na konzoli (ne chat u igri) i logovima (server_log.txt).
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ispisuje formatirani niz na konzoli (ne chat u igri) i logovima (server_log.txt).

| Ime                   | Deskripcija                         |
| --------------------- | ----------------------------------- |
| string[]              | String za ispisati.                 |
| foreground (optional) | Boja u prvom planu koja se koristi. |
| background (optional) | Pozadinska boja koja se koristi.    |
| highlight (optional)  | Istaknuta boja za upotrebu.         |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

:::tip

Kad kodovi boja ostanu -1, koriste se zadane boje poslužiteljske konzole.

:::

:::tip

Na većini sistema mogu se koristiti sljedeći kodovi boja u prvom planu i pozadini: crna (0), crvena (1), zelena (2), žuta (3), plava (4), magenta (5), cijan (6) i bijela (7).

:::

:::tip

Većina sistema takođe podržava jarke / podebljane verzije ovih boja. Mogu se koristiti sljedeće istaknute vrijednosti: uobičajena (0) i svijetla/podebljana (1).

:::

## Primjeri

```c
public OnGameModeInit( )
{
    print("Gamemode se pokrenuo.");
    return 1;
}
```

## Srodne Funkcije

- [printf](printf): Ispišite formatiranu poruku u zapise poslužitelja i konzolu.
