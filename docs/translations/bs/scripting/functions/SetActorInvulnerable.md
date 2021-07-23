---
title: SetActorInvulnerable
description: Uključite/isključite aktorovu neranjivost.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Uključite/isključite aktorovu neranjivost.

| Ime          | Deskripcija                                           |
| ------------ | ----------------------------------------------------- |
| actorid      | ID aktora za postaviti ranjivost.                     |
| invulnerable | 0 da ga učinite ranjivim, 1 da ga učinite neranjivim. |

## Returns

1 - uspješno

0 - greška (Aktor nije kreiran).

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Aktor kao prodavač u Ammunation-u.
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```

## Zabilješke

:::warning

Jednom postavljen za neranjivog, aktor ne poziva OnPlayerGiveDamageActor. Igračima će se stanje aktorove neranjivosti promijeniti samo kad im se to ponovno učita.

:::

## Srodne Funkcije
