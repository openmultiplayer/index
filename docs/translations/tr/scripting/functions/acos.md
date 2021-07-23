---
title: acos
description: .
tags: []
---

:::warning

Bu fonksiyon küçük harfle başlar.

:::

## Açıklama

Radyanlardaki bir ark kosininin ters değerini alın.

| İsim        | Açıklama             |
| ----------- | -------------------- |
| Float:value | ark kosinüsü girişi. |

## Çalışınca Vereceği Sonuçlar

[0, pi] radyanlarda x'in ana ark kosinüsü. Bir radyan 180/PI'ye eşdeğerdir.

## Örnek

```c
//0.500000'in ark kosinüsü 60.000000 derecedir.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("%f yay kosinüsü %f derece.", param, result);
    return 1;
}
```

## İlgili Fonksiyonlar

- [floatsin](floatsin.md): Sinüsü belirli bir açıdan alın.
- [floatcos](floatcos.md): Kosinüsü belirli bir açıdan alın.
- [floattan](floattan.md): Tanjantı belirli bir açıdan alın.
