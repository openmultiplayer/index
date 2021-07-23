---
title: ApplyAnimation
description: Primijeni animaciju igraču.
tags: []
---

## Deskripcija

Primijeni animaciju igraču.

| Ime        | Deskripcija                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid   | ID igrača kojem primijenjujete animaciju                                                                                                                                                                                                                                                                                       |
| animlib[]  | Biblioteka (library) animacija iz koje želite primijeniti animaciju.                                                                                                                                                                                                                                                           |
| animname[] | Ime animacije koju hoćete primijeniti, unutar oodređene biblioteke (library-a).                                                                                                                                                                                                                                                |
| fDelta     | Brzina reprodukcije animacija (koristi 4.1). .                                                                                                                                                                                                                                                                                 |
| loop       | Ako je postavljen 1, animacija će se ponavljati. Ako je postavljen na 0, animacija će se reproducirati jednom.                                                                                                                                                                                                                 |
| lockx      | Ako je postavljen 0, aktor će se vratiti na svoeu staru x kordinatu nakon što se animacija završi (za animacije koje aktora pokreću kao npr 'walking' / 'hodanje'). 1 ga neće vratiti na staru poziciju                                                                                                                        |
| locky      | Isto kao i parametar iznad samo za Y osu. Trebalo bi se ostaviti kao i gornji.                                                                                                                                                                                                                                                 |
| freeze     | Postavljanjem ovo na 1 će zalediti aktora nakon što se animacija zavšri. 0 neće.                                                                                                                                                                                                                                               |
| time       | Tajmer u milisekundama. Za animaciju koja se neprestano ponavlja je 0.                                                                                                                                                                                                                                                         |
| forcesync  | Postavite na 1 da server sinkronizira animaciju sa svim ostalim igračima u streaming radijusu (opcionalno). 2 radi isto kao i 1, ali SAMO će primijeniti animaciju na reproducirane igrače, ali NE i na stvarnog igrača kojem je animacija primijenjena (korisno za npc animacije i trajne animacije kada se igrači učitavaju) |
|            |

## Returns

Ova funkcija će uvijek return-ovati 1, bilo da označeni igrač ne postoji ili da je neki od parametara nevažeći (npr. nevažeća biblioteka (library)).

## Primjeri

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Zabilješke

:::tip

'forcesync' je neobavezan parametar, koji je po zadanim postavkama 0, u većini slučajeva nije potreban s obzirom da igrači sinhroniziraju animacije sami od sebe. 'forcesync' parametar može natjerati sve igrale koji vide 'playerid' (tog igrača) reprodukciju animacije bez obzira na to da li je igrač izvodi. Ovo je korisno uOvo je korisno u okolnostima kada igrač ne može sam sinhronizirati animaciju. Na primjer, mogu biti pauzirani.

:::

:::warning

Nevažeća biblioteka (library) animacije će crashovati igračevu igru.

:::

## Srodne Funkcije

- [ClearAnimations](ClearAnimations.md): Očisti sve animacije koje igrač izvodi.
- [SetPlayerSpecialAction](SetPlayerSpecialAction.md): Postavi igraču specijalnu radnju/akciju.
