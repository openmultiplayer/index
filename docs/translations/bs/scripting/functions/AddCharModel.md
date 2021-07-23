---
title: AddCharModel
description: Dodaje novog prilagođenog karaktera za preuzimanje.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL i ne radi u nižim verzijama!

:::

## Deskripcija

Dodaje novog prilagođenog karaktera za preuzimanje. Fajlovi modela će biti pohranjeni u igračevim: Documents\GTA San Andreas User Files\SAMP\cache ispod Server IP i Port foldera u CRC-formi imena fajla.

| Ime     | Deskripcija                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| baseid  | Osnovni skin model ID za korištenje (ponašanje karaktera i originalnog karaktera za upotrebu kada preuzimanje nije uspjelo). |
| newid   | Novi skin model ID između 20000 i 30000 (10000 slotova) da bi se kasnije koristio sa SetPlayerSkin.                          |
| dffname | Ime .dff collision modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka).           |
| txdname | Ime .txd texture modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka).             |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija je neuspješno izvršena.

## Primjeri

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Zabilješke

:::tip

useartwork mora biti omogućen (u server settings) da bi ovo radilo

:::

:::warning

Trenutno ne postoje nikakva ograničenja o pozivanju ove funkcije, ali budite oprezni jer ako ih ne koristite unutar OnFilterScriptInit/OnGameModeInit, riskirate da neki igrači, koji su već na server, možda ne preuzmu modele.

:::

## Srodne Funkcije

- [SetPlayerSkin](SetPlayerSkin.md): Postavi igraču skin/izgled.
