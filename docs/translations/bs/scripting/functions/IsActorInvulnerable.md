---
title: IsActorInvulnerable
description: Provjerite je li aktor neranjiv.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerite je li aktor neranjiv.

| Ime     | Deskripcija              |
| ------- | ------------------------ |
| actorid | ID aktora za provjeriti. |

## Returns

1: Aktor je neranjiv.

0: Aktor je ranjiv.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Aktor kao prodavač u Ammunation-u
    if (IsActorInvulnerable(gMyActor))
    {
        print("Aktor je neranjiv.");
    }
    else
    {
        print("Aktor je ranjiv.");
    }
    return 1;
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
- [SetActorInvulnerable](SetActorInvulnerable): Postavi aktoru neranjivost.
- [SetActorHealth](SetActorHealth): Postavi zdravlje aktoru.
