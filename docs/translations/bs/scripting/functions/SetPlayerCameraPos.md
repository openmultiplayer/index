---
title: SetPlayerCameraPos
description: Postavlja kameru u određenu poziciju za igrača.
tags: ["player"]
---

## Deskripcija

Postavlja kameru u određenu poziciju za igrača.

| Ime      | Deskripcija                      |
| -------- | -------------------------------- |
| playerid | ID igrača.                       |
| Float:x  | X kordinata za postaviti kameru. |
| Float:y  | Y kordinata za postaviti kameru. |
| Float:z  | Z kordinata za postaviti kameru. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```

## Zabilješke

:::tip

Možda ćete morati koristiti SetPlayerCameraLookAt s ovom funkcijom da bis ispravno radila. Koristite SetCameraBehindPlayer da vratite kameru iza uređaja.

:::

:::warning

Korištenje funkcija kamere izravno nakon omogućavanja režima spectatora ne radi.

:::

## Srodne Funkcije

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Postavite gdje će igračeva kamera gledati.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Postavi kameru igrača iza njega.
