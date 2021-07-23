---
title: ForceClassSelection
description: Prisiljava igrača da se vrati na odabir klase.
tags: []
---

## Deskripcija

Prisiljava igrača da se vrati na odabir klase.

| Ime      | Deskripcija                        |
| -------- | ---------------------------------- |
| playerid | Igrač za povratak na odabir klase. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
if (!strcmp(cmdtext, "/class", true))
{
    ForceClassSelection(playerid);
    TogglePlayerSpectating(playerid, true);
    TogglePlayerSpectating(playerid, false);
    return 1;
}
```

## Zabilješke

:::warning

Ova funkcija ne vrši promjenu stanja u PLAYER_STATE_WASTED kada se kombinira s TogglePlayerSpectating (pogledajte primjer dolje), kao što je ovdje navedeno.

:::

## Srodne Funkcije

- [AddPlayerClass](AddPlayerClass): Dodaj klasu.
- [SetPlayerSkin](SetPlayerSkin): Postavi skin igraču.
- [GetPlayerSkin](GetPlayerSkin): Dobij igračev trenutni skin.
- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): Pozvano kada igrač prmijeni klasu na odabiru klasa.
