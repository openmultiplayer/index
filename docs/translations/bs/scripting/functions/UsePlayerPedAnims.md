---
title: UsePlayerPedAnims
description: Koristi standardnu ​​animaciju hodanja igrača (animacija CJ kože) umjesto prilagođenih animacija za svaku kožu (npr. Klizanje za kože klizača).
tags: ["player"]
---

## Deskripcija

Koristi standardnu ​​animaciju hodanja igrača (animacija CJ kože) umjesto prilagođenih animacija za svaku kožu (npr. Klizanje za kože klizača).

## Primjeri

```c
public OnGameModeInit()
{
    UsePlayerPedAnims();
    return 1;
}
```

## Zabilješke

:::tip

Radi samo kada se postavi pod OnGameModeInit. Neupotreba ove funkcije dovodi do toga da se dvoručno oružje (ne dvostruko - jedno oružje koje drže obje ruke) drži u samo jednoj ruci.

:::

## Srodne Funkcije

- [ApplyAnimation](ApplyAnimation): Primijeni animaciju na igrača.
- [ClearAnimations](ClearAnimations): Očisti svaku animaciju koju igrač izvodi.
