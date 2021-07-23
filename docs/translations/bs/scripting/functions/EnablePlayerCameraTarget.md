---
title: EnablePlayerCameraTarget
description: Uključite ili isključite funkcije ciljanja kamere za igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Uključite ili isključite funkcije ciljanja kamere za igrača. Po zadanim postavkama onemogućeno radi uštede propusnosti.

| Ime      | Deskripcija                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | ID igrača za kojeg se uključuje/isključuje funkcija ciljanja kamere. |
| enable   | 1 da uključite funkciju ciljanja kamere i 0 da je isključite.        |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, 1);
     return 1;
}
```

## Srodne Funkcije

- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Dobij ID vozila u kojeg igrač gleda.
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Dobij ID igrača u kojeg igrač gleda.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
