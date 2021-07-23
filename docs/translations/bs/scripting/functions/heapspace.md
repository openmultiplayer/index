---
title: heapspace
description: Vraća količinu memorije dostupne za hrpu/stog (heap/stack) u bajtovima.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Vraća količinu memorije dostupne za hrpu/stog (heap/stack) u bajtovima.

## Primjeri

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```

## Srodne Funkcije
