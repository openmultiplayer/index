---
title: atan2
description: .
tags: []
---

<LowercaseNote />

:::warning

Zwróć uwagę, że wartość y jest pierwszym parametrem, a x drugim.

:::

## Opis

Podaje odwróconą wartość arcus tangensa z y/x w radianach.

| Nazwa   | Opis                                           |
| ------- | ---------------------------------------------- |
| Float:y | Wartość reprezentująca proporcję koordynatu Y. |
| Float:x | Wartość reprezentująca proporcję koordynatu X. |

## Zwracane wartości

Zwraca główną wartość arcus tangensa z y/x, wyrażoną w radianach.

Aby obliczyć tę wartość, funkcja bierze pod uwagę znak obu argumentów, aby określić kwadrant.

## Przykłady

```c
//Arcus tangens dla (x=-10.000000, y=10.000000) wynosi 135.000000 stopni.

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y,x);
    printf("Arcus tangens dlar (x=%f, y=%f) wynosi %f stopni.", x, y, result);
    return 1;
}
```

## Powiązane funkcje

- [floatsin](floatsin.md): Podaje sinus dla określonego kąta.
- [floatcos](floatcos.md): Podaje cosinus dla określonego kąta.
- [floattan](floattan.md): Podaje tangens dla określonego kąta.
