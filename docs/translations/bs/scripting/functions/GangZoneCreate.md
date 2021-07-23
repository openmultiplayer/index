---
title: GangZoneCreate
description: Kreiraj gangzonu (radarsko područje u boji).
tags: ["gangzone"]
---

## Deskripcija

Kreiraj gangzonu (radarsko područje u boji).

| Ime  | Deskripcija                              |
| ---- | ---------------------------------------- |
| minx | X kordinata za zapadnu stranu gangzone.  |
| miny | Y kordinata za južnu stranu gangzone.    |
| maxx | X kordinata za istočnu stranu gangzone.  |
| maxy | Y kordinata za sjevernu stranu gangzone. |

## Returns

ID kreirane zone, returna/vraća -1 ako nije kreirana.

## Primjeri

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
```

```p
            MinY
             v
      MinX > *-------------
             |            |
             |  gangzone  |
             |   center   |
             |            |
             -------------* < MaxX
                          ^
                          MaxY
```

## Zabilješke

:::tip

Ova funkcija samo STVARA gangzonu, za prikaz morate koristiti GangZoneShowForPlayer ili GangZoneShowForAll.

:::

:::warning

Postoji ograničenje od 1024 gangzone. Stavljanje parametara u pogrešan redoslijed rezultira glitchy ponašanjem.

:::

## Srodne Funkcije

- [GangZoneDestroy](GangZoneDestroy): Uništi gang zonu.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Prikaži gang zonu za igrača.
- [GangZoneShowForAll](GangZoneShowForAll): Prikaži gang zonu za sve igrače.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Sakrij gangzonu za igrača.
- [GangZoneHideForAll](GangZoneHideForAll): Sakrij gangzonu za sve igrače.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Kreiraj bljeskalicu gang zone za igrača.
- [GangZoneFlashForAll](GangZoneFlashForAll): Kreiraj bljeskalicu gang zone za sve igrače.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Zaustavi gang zonu da bljeska za igrača.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Zaustavi gang zonu da bljeska za sve igrače.
