---
title: acos
description: .
tags: []
---

<LowercaseNote />

## Descriere

Obțineți valoarea inversată a unui cosinus arc în radiani.

| Nume         | Descriere                      |
| ------------ | ------------------------------ |
| Float: value | intrarea în cosinusul arcului. |

## Se intoarce

Cosinusul arcului principal al lui x, în intervalul [0, pi] radiani. Un radian este echivalent cu 180 / PI grade.

## Exemple

```c
//The arc cosine of 0.500000 is 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## Functii relatate

- [floatsin](floatsin.md): Obțineți sinusul dintr-un unghi specific.
- [floatcos](floatcos.md): Obțineți cosinusul dintr-un unghi specific.
- [floattan](floattan.md): Obțineți tangenta dintr-un unghi specific.
