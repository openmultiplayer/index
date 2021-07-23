---
title: AddSimpleModel
description: Dodaje novi prilagođen/custom prost model objekta za preuzimanje.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL i ne radi u nižim verzijama!

:::

## Deskripcija

Dodaje novi prilagođen/custom prost model objekta za preuzimanje. Fajlovi modela će biti pohranjeni u igračevim: Documents\GTA San Andreas User Files\SAMP\cache ispod Server IP i Port foldera u CRC-formi imena fajla.

| Ime          | Deskripcija                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| virtualworld | ID virtualnog svijeta za kojeg će model biti dostupan, koristi -1 za sve svjetove.                                       |
| baseid       | The base object model ID to use (original object to use when download is failed).                                        |
| newid        | Novi skin model ID između -1000 i -30000 (29000 slotova) da bi se kasnije koristio sa CreateObject i CreatePlayerObject. |
| dffname      | Ime .dff collision modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka).       |
| txdname      | Ime .txd texture modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka).         |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Zabilješke

:::tip

`useartwork` mora biti omogućen (u server settings) da bi ovo radilo kada je virtualworld postavljen, modeli će se preuzimati kada igrač uđe u određeni svijet

:::

:::warning

Trenutno ne postoje nikakva ograničenja o pozivanju ove funkcije, ali budite oprezni jer ako ih ne koristite unutar OnFilterScriptInit/OnGameModeInit, riskirate da neki igrači, koji su već na server, možda ne preuzmu modele.

:::

## Srodne Funkcije

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading.md): Pozvano kada igrač dovrši preuzimanje prilagođenih/custom modela.
