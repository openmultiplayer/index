---
title: SetPlayerCameraLookAt
description: Postavi smjer u kojem će gledati kamera igrača.
tags: ["player"]
---

## Deskripcija

Postavi smjer u kojem će gledati kamera igrača. Generalno namijenjeno korištenju u kombinaciji s SetPlayerCameraPos.

| Ime      | Deskripcija                                                                                                                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | ID player whose camera to set.                                                                                                                                                                                       |
| Float:x  | X kordinata na koju će igračeva kamera gledati.                                                                                                                                                                      |
| Float:y  | Y kordinata na koju će igračeva kamera gledati.                                                                                                                                                                      |
| Float:z  | Z kordinata na koju će igračeva kamera gledati.                                                                                                                                                                      |
| cut      | [Stil](../resources/cameracutstyles) promjene. Može se koristiti za interpolaciju (lagana promjena) Od stare do nove pozicije koristeći CAMERA_MOVE. ZABILJEŠKA: Dodano u 0.3e. Ostavite prazno u ranijim verzijama. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## Zabilješke

:::warning

Korištenje funkcija kamere izravno nakon omogućavanja režima spectatora ne radi.

:::

## Srodne Funkcije

- [SetPlayerCameraPos](SetPlayerCameraPos): Postavi poziciju kamere igrača.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Postavi kameru igrača iza njega.
- [GetPlayerCameraPos](GetPlayerCameraPos): Saznajte gdje je kamera igrača.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
