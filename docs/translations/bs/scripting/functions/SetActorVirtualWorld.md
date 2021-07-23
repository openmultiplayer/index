---
title: SetActorVirtualWorld
description: Postavi virtualni svijet za aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi virtualni svijet za aktora. Samo igrači u istom virtualnom svijetu će ga vidjeti.

| Ime     | Deskripcija                                                                 |
| ------- | --------------------------------------------------------------------------- |
| actorid | ID aktora (returnovan/vraćen od CreateActor) za postaviti virtualni svijet. |
| vworld  | Virtualni svijet za ubaciti aktora.                                         |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    // Kreiraj aktora
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Postavi mu virtualni svijet
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## Srodne Funkcije

- [GetActorVirtualWorld](GetActorVirtualWorld): Dobij virtualni svijet aktora.
- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
