---
title: IsActorStreamedIn
description: Provjerava da li je aktor učitan kod igrača.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava da li je aktor učitan kod igrača.

| Ime         | Deskripcija |
| ----------- | ----------- |
| actorid     | ID aktora.  |
| forplayerid | ID igrača.  |

## Returns

Ova funkcija vraća 1 ako je aktor učitan kod igrača ili 0 ako nije.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // Radi nešto
    }
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Provjerava da li je igrač učitan kod drugog igrača.
