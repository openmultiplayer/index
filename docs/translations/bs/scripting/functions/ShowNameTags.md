---
title: ShowNameTags
description: Omogući/onemogući iscrtavanje nametag-ova, healthbar-ova i armora iznad igrača.
tags: []
---

## Deskripcija

Omogući/onemogući iscrtavanje nametag-ova, healthbar-ova i armora iznad igrača.

| Ime     | Deskripcija                                                         |
| ------- | ------------------------------------------------------------------- |
| enabled | 0 za onemogućiti, 1 za omogućiti (omogućeno po zadanim postavkama). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    // Ovo će u potpunosti onemogućiti sve nametag-ove
    // (uključujući health i armour bar-ove)
    ShowNameTags(0);
}
```

## Zabilješke

:::warning

Ova funkcija se može koristiti samo u OnGameModeInit. Za ostala vremena, pogledajte ShowPlayerNameTagForPlayer.

:::

## Srodne Funkcije

- [DisableNameTagLOS](DisableNameTagLOS): Onemogućite provjeru oznake imena.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Prikaži ili sakrij nametag za određenog igrača.
- [ShowPlayerMarkers](ShowPlayerMarkers): Odlučite hoće li server prikazivati ​​oznake na radaru.
