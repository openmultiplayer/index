---
title: IsValidActor
description: Provjerava ako je ID aktora važeći.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako je ID aktora važeći.

| Ime     | Deskripcija              |
| ------- | ------------------------ |
| actorid | ID aktora za provjeriti. |

## Returns

1 - Aktor je važeći.

0 - Aktor je nevažeći.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Aktor kao prodavač u Ammunation-u.
    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100);
    }
    return 1;
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj aktora.
- [GetActorPoolSize](GetActorPoolSize): Dobij najveći actorid na serveru.
- [SetActorHealth](SetActorHealth): Postavi zdravlje aktoru.
