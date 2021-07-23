---
title: StopPlayerHoldingObject
description: Uklanja prikvačene objekte.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Uklanja prikvačene objekte.

| Ime      | Deskripcija                                         |
| -------- | --------------------------------------------------- |
| playerid | ID igrača kojem želite ukloniti prikvačeni objekat. |

## Returns

1 pri uspjehu, 0 pri grešci

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```

## Zabilješke

:::warning

Je uklonjena u SA-MP 0.3c. provjerite RemovePlayerAttachedObject

:::

## Srodne Funkcije

- [SetPlayerHoldingObject](SetPlayerHoldingObject): Pričvršćuje objekat za kost.
