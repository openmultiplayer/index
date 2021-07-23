---
title: EnableVehicleFriendlyFire
description: Omogućite "friendly-fire" za timska vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućite "friendly-fire" za timska vozila. Igrači neće moći oštetiti vozila suigrača (mora se koristiti SetPlayerTeam!).

## Primjeri

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
