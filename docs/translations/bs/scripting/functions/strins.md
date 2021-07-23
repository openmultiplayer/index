---
title: strins
description: Umetni string u drugi string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Umetni string u drugi string.

| Ime                     | Deskripcija                                  |
| ----------------------- | -------------------------------------------- |
| string[]                | String u kojeg želite umetnuti substr.       |
| const substr[]          | String kojeg želite umetnuti u drugi string. |
| pos                     | Pozicija za početak umetanja.                |
| maxlength=sizeof string | Maksimalna veličina za unijeti.              |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Dodaj [AFK] tag na početak igračevog imena
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
    strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// WARNING: Igrači sa imenom koji imaju 20+ karaktea ne mogu imati [AFK] tag, to če činiti njihovo ime velikim 25 karatkera a limit je 24.
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strfind](strfind): Pretraži string u drugom stringu.
- [strdel](strdel): Obriši dio stringa.
- [strlen](strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
