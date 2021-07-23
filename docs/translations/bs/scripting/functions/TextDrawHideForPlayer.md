---
title: TextDrawHideForPlayer
description: Sakriva textdraw za određenog igrača.
tags: ["player", "textdraw"]
---

## Deskripcija

Sakriva textdraw za određenog igrača.

| Ime      | Deskripcija                                   |
| -------- | --------------------------------------------- |
| playerid | ID igrača za kojeg će textdraw biti sakriven. |
| text     | ID textdrawa za sakriti.                      |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate( ... );
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Srodne Funkcije

- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
