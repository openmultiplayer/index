---
title: DestroyActor
description: Uništi aktora koji je kreiran sa CreateActor.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Uništi aktora koji je kreiran sa CreateActor.

| Ime     | Deskripcija                                        |
| ------- | -------------------------------------------------- |
| actorid | ID aktora koji se uništava. Kreiran sa CreateActor |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Aktor sa određenim ID-em ne postoji.

## Primjeri

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
