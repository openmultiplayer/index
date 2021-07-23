---
title: OnGameModeInit
description: Ta callback se aktivira, ko se zažene "gamemode".
tags: []
---

## Opis

Ta callback se aktivira, ko se zažene "gamemode".

## Primeri

```c
public OnGameModeInit()
{
    print(""Gamemode" začela!");
    return 1;
}
```

## Opombe

:::tip

To funkcijo lahko uporabljate tudi znotraj "filterscript" da zazna, če "gamemode" spremenite z uporabo ukazov RCON, kot je "changemode" ali "gmx", ker sprememba "gamemode" se ne zažene znova "filterscript".

:::

## Povezane Funkcijo
