---
title: ClearActorAnimations
description: Uklanja bilo koju animaciju koja je postavljena aktoru.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Uklanja bilo koju animaciju koja je postavljena aktoru.

| Ime     | Deskripcija                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | ID aktora (vraćeno od CreateActor) kojem se uklanjaju animacije            |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija nije uspješno izvršena. Aktor ne postoji.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// negdje drugo
ApplyActorAnimation(gMyActor, ...);

// negdje drugo
ClearActorAnimations(gMyActor);
```

## Srodne Funkcije

- [ApplyActorAnimation](ApplyActorAnimation): Postavlja animaciju aktoru.
