---
title: SetActorFacingAngle
description: Postavi smjer gledanja aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi smjer gledanja aktora.

| Ime     | Deskripcija                                                              |
| ------- | ------------------------------------------------------------------------ |
| actorid | ID aktora za postaviti smjer gledanja. Returnovan/vraćen od CreateActor. |
| ang     | Smjer gledanja za postaviti.                                             |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji.

## Primjeri

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    return 1;
}

// Negdje drugo
SetActorFacingAngle(MyActor, 180.0);
```

## Zabilješke

:::tip

Kada kreirate aktora pomoću CreateActor-a, odredite njegov okrenuti ugao/smjer gledanja. Ovu funkciju ne morate koristiti ako kasnije ne želite promijeniti njegov ugao/smjer gledanja okretanja.

:::

:::warning

Igrači će vijeti promjenu smjera gledanja aktora onda kada im se aktor ponovo učita.

:::

## Srodne Funkcije

- [GetActorFacingAngle](GetActorFacingAngle): Dobij smjer gledanja aktora.
- [SetActorPos](SetActorPos): Postavi poziciju aktora.
