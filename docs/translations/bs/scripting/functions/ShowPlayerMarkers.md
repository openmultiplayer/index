---
title: ShowPlayerMarkers
description: Omogućava/onemogućava markere/oznake igrača (bljeskalice na radaru).
tags: ["player"]
---

## Deskripcija

Omogućava/onemogućava markere/oznake igrača (bljeskalice na radaru). Mora se koristiti kada server počne (OnGameModeInit). Za ostala vremena, pogledaj SetPlayerMarkerForPlayer.

| Ime  | Deskripcija                                                                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode | [Mode](#marker-modes) za koristiti za markere/oznake. Mogu se emitirati, što znači da su vidljivi samo igračima u blizini. Pogledajte donju tabelu. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    // Oznake igrača vidljive samo igračima u blizini
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```

## Marker Modes

| ID  | MODE                         |
| --- | ---------------------------- |
| 0   | PLAYER_MARKERS_MODE_OFF      |
| 1   | PLAYER_MARKERS_MODE_GLOBAL   |
| 2   | PLAYER_MARKERS_MODE_STREAMED |

## Zabilješke

:::tip

Takođe je moguće postaviti boju igrača na boju koja ima potpunu prozirnost (bez alfa vrijednosti). To omogućava prikazivanje markera/oznaka po igraču.

:::

## Srodne Funkcije

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Postavite marker/oznaku igrača.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Ograničite radijus markera/oznake igrača.
- [ShowNameTags](ShowNameTags): Postavi nametagove uključeno ili isključeno.
- [SetPlayerColor](SetPlayerColor): Postavi boju igrača.
