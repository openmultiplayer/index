---
title: SetPlayerHoldingObject
description: Pričvršćuje objekat za kost.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Pričvršćuje objekat za kost.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača za kojeg želite prikvačiti objekat.                  |
| modelid  | Model kojeg želite koristiti.                                  |
| bone     | [Kost](../resources/boneid) za koju želite prikvačiti objekat. |
| fOffsetX | (neobavezno) Pomak osi X za položaj objekta.                   |
| fOffsetY | (neobavezno) Pomak osi Y za položaj objekta.                   |
| fOffsetZ | (neobavezno) Pomak osi Z za položaj objekta.                   |
| fRotX    | (neobavezno) Pomak osi X za rotaciju objekta.                  |
| fRotY    | (neobavezno) Pomak osi Y za rotaciju objekta.                  |
| fRotZ    | (neobavezno) Pomak osi Z za rotaciju objekta.                  |

## Returns

1 pri uspjehu, 0 pri grešci.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerHoldingObject(playerid, 1609, 2); // Prikvači kornjaču za playerid-evu glavu!
    return 1;
}
```

## Zabilješke

:::tip

Po igraču se može prikačiti samo jedan predmet. Ova je funkcija odvojena od spremišta CreateObject / CreatePlayerObject.

:::

:::warning

uklonjena je u SA-MP 0.3c. Provjeri SetPlayerAttachedObject

:::

## Srodne Funkcije
