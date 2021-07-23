---
title: ManualVehicleEngineAndLights
description: Koristite ovu funkciju prije nego što se bilo koji igrač poveže (OnGameModeInit) kako biste svim klijentima rekli da će skripta kontrolirati motore i svjetla vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Koristite ovu funkciju prije nego što se bilo koji igrač poveže (OnGameModeInit) kako biste svim klijentima rekli da će skripta kontrolirati motore i svjetla vozila.Ovo sprečava da igra automatski uključuje/isključuje motor kada igrači ulaze/izlaze iz vozila i kada se farovi automatski pale kad je mrak.

## Primjeri

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();

    return 1;
}
```

## Zabilješke

:::tip

Ovu funkciju nije moguće preokrenuti nakon što je korištena. Morate ga koristiti ili ne koristiti.

:::

## Srodne Funkcije

- [SetVehicleParamsEx](SetVehicleParamsEx): Postavlja parametre vozila za sve igrače.
- [GetVehicleParamsEx](GetVehicleParamsEx): Dobij parametre vozila.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Postavi parametre vozila za igrača.
