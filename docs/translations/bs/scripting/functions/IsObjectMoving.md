---
title: IsObjectMoving
description: Provjerava da li se zadati objectid kreće.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava da li se zadati objectid kreće.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| objectid | Objectid kojeg želite provjeriti da li se kreće. |

## Returns

1 ako se objekat kreće, 0 ako ne.

## Primjeri

```c
if (IsObjectMoving(objectid))
{
    StopObject(objectid);
}
```

## Srodne Funkcije

- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [OnObjectMoved](../callbacks/OnObjectMoved): Pozvano kada se objekat prestane kretati.
