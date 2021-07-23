---
title: SetActorHealth
description: Postavi healthe (zdravlje) aktoru.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi healthe (zdravlje) aktoru.

| Ime          | Deskripcija                     |
| ------------ | ------------------------------- |
| actorid      | ID aktora za postaviti healthe. |
| Float:health | Vrijednost za postaviti health. |

## Returns

1 - uspješno

0 - greška (Aktor nije kreiran).

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Aktor kao prodavač u Ammunation-u.
    SetActorHealth(gMyActor, 100);
    return 1;
}
```

## Srodne Funkcije
