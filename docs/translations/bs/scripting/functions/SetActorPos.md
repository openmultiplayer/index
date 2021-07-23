---
title: SetActorPos
description: Postavi poziciju aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi poziciju aktora.

| Ime     | Deskripcija                                                        |
| ------- | ------------------------------------------------------------------ |
| actorid | ID aktora za postaviti poziciju. Returnovan/vraćen od CreateActor. |
| X       | X kordinata za pozicionirati aktora.                               |
| Y       | Y kordinata za pozicionirati aktora.                               |
| Z       | Z kordinata za pozicionirati aktora.                               |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
    return 1;
}

// Negdje drugo
SetActorPos(gMyActor, 1.0, 2.0, 3.0);
```

## Zabilješke

:::tip

Kada kreirate aktora pomoću CreateActor, vi odredite njegovu poziciju. Ovu funkciju ne trebate koristiti ako kasnije ne želite promijeniti njegov položaj.

:::

## Srodne Funkcije

- [GetActorPos](GetActorPos): Dobij poziciju aktora.
- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
