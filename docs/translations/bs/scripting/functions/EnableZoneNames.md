---
title: EnableZoneNames
description: Ova funkcija omogućava uključivanje naziva zona / područja kao što je "Vinewood" ili "Doherty" tekst u donjem desnom dijelu ekrana dok ulaze u to područje.
tags: []
---

## Deskripcija

Ova funkcija omogućava uključivanje naziva zona / područja kao što je "Vinewood" ili "Doherty" tekst u donjem desnom dijelu ekrana dok ulaze u to područje. Ovo je opcija gamemodea i treba je postaviti u callbacku OnGameModeInit.

| Ime    | Deskripcija                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------ |
| enable | Opcija za prebacivanje želite li uključiti ili isključiti nazive zona. 0 je isključeno, a 1 uključeno. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    EnableZoneNames(1);
    return 1;
}
```

## Zabilješke

:::warning

Ova je funkcija uklonjena u SA-MP 0.3. To je bilo zbog crashova koje je izazvao.

:::

## Srodne Funkcije
