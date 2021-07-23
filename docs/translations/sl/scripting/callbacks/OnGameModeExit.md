---
title: OnGameModeExit
description: Ta "callback" se pokliče, ko se "gamemode" izklopi prek 'gmx', kadar koli se strežnik izklopi, bodisi pod "GameModeExit"
tags: []
---

## Opis

Ta "callback" se pokliče, ko se "gamemode" izklopi prek 'gmx', kadar koli se strežnik izklopi, bodisi pod "GameModeExit"

## Primeri

```c
public OnGameModeExit()
{
    print(""Gamemode" se ustavil.");
    return 1;
}
```

## Opombe

:::tip

Ta funkcijo se lahko uporablja tudi znotraj "filterscript" da zazna, če "gamemode" spremenite z uporabo ukazov RCON, kot je "changemode" ali "gmx", ker sprememba "gamemode" se ne zažene znova "filterscript". Ko se uporablja "OnGameModeExit" skupaj z'rcon gmx' ukaz v konzoli, upoštevajte, da lahko v "client" obstajajo morebitne napake, kot primer tega je pretirano kliče `RemoveBuildingForPlayer` med `OnGameModeInit` kar lahko povzroči "client" odjemalca. Ta "callback" ne bo poklican, če se strežnik zruši ali če postopek ubijete z drugimi sredstvi, kot je ukaz Linux "kill" ali s pritiskom na gumb za zapiranje v konzoli Windows.

:::

## Povezane Funkcijo

- [GameModeExit](../functions/GameModeExit.md): Izklopite trenutn "GameMode".
