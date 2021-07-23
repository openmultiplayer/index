---
title: SetCameraBehindPlayer
description: Vratite kameru na mjesto iza igrača nakon upotrebe funkcije poput SetPlayerCameraPos.
tags: ["player"]
---

## Deskripcija

Vratite kameru na mjesto iza igrača nakon upotrebe funkcije poput SetPlayerCameraPos.

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | Igrač kojem želite vratiti kameru na mjesto iza njega. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
SetCameraBehindPlayer(playerid);
```

## Srodne Funkcije

- [SetPlayerCameraPos](SetPlayerCameraPos): Postavi poziciju kamere igrača.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Postavite gdje će igračeva kamera gledati.
