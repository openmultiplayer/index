---
title: OnPlayerClickMap
description: OnPlayerClickMap se pokliče, ko si igralec postavi tarčo(target/waypoint) na zemljevidu menija za premor (desni klik).
tags: ["player"]
---

:::warning

Ta funkcijo je bila dodana SA-MP 0.3d in v spodnjih različicah ne deluje!

:::

## Opis

OnPlayerClickMap se pokliče, ko si igralec postavi tarčo(target/waypoint) na zemljevidu menija za premor (desni klik).

| Ime      | Opis                                                                                         |
| -------- | -------------------------------------------------------------------------------------------- |
| playerid | ID igralec, ki je postavil tarčo(waypoint) na zemljevidu                                     |
| Float:fX | X plavajoče koordinate, kjer je igralec kliknil                                              |
| Float:fY | Y plavajoče koordinate, kjer je igralec kliknil                                              |
| Float:fZ | Z plavajoče koordinate, kjer je igralec kliknil (nepravilno / netočno - glej opombe spodaj)  |

## Returns

1 - Preprečil bo druge "filterskript" prejeli to "callback".

0 - Pomeni, da bo ta "callback" se posreduje na naslednjo "filterskripte".

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Opombe

:::tip

Kakšno ime "callback" piše, da se pokliče le, če igralec klikne, da označi tarčo(waypoint) in ne, ko pritisne gumb. Return vrednost "Z" če bi bilo 0 (nepravilno) če je kraj, kjer je igralec kliknil, daleč stran od igralca; Uporaba MapAndreas ali ColAndreas "plugin" da bi bili bolj natančni "Z" koordinate.

:::

## Srodne Funkcije
