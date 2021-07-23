---
title: GetPlayerTime
description: Doznajte trenutno igračevo vrijeme igre.
tags: ["player"]
---

## Deskripcija

Doznajte trenutno igračevo vrijeme igre. Postavlja SetWorldTime ili vraća vrijeme igre automatski ako se koristi TogglePlayerClock.

| Ime      | Deskripcija                                             |
| -------- | ------------------------------------------------------- |
| playerid | ID igrača za dobiti trenutno vrijeme u igri.            |
| &hour    | Varijabla za pohraniti sate, proslijeđeno referencom.   |
| &minute  | Varijabla za pohraniti minute, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena..

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

Trenutno vrijeme igre pohranjeno je u navedenim varijablama.

## Primjeri

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "Vrijeme je 13:37!");
}
```

## Srodne Funkcije

- [SetPlayerTime](SetPlayerTime): Postavi igraču vrijeme.
- [SetWorldTime](SetWorldTime): Postavi globalno vrijeme servera.
- [TogglePlayerClock](TogglePlayerClock): Uključite / isključite sat u gornjem desnom uglu.
