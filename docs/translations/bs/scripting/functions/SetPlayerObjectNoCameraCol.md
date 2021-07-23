---
title: SetPlayerObjectNoCameraCol
description: Uključuje / isključuje sudar kamere predmeta igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Uključuje/isključuje sudar kamere predmeta igrača.

| Ime      | Deskripcija                                                     |
| -------- | --------------------------------------------------------------- |
| playerid | ID igrača kojem objekat pripada.                                |
| objectid | ID objekta kojem želite uključiti/isključiti collision (sudar). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni objekat ne postoji.

## Primjeri

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovo ne radi unutar normalnih granica SA mape.

:::

## Srodne Funkcije

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Onemogućava sudare između kamere i objekta.
