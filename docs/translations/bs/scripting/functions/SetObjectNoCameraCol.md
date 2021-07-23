---
title: SetObjectNoCameraCol
description: Onemogućite sudare između kamera igrača i navedenog objekta.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Onemogućite sudare između kamera igrača i navedenog objekta.

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| objectid | ID objekta za onemogućiti sudare između kamere igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni objekat ne postoji.

## Primjeri

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovo radi samo izvan granica karte (prošlih -3000/3000 jedinica na x i/ili y osi).

:::

## Srodne Funkcije

- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): Onemogućava sudare između kamere i objekta playera.
