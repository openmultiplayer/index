---
title: OnEnterExitModShop
description: Ta povratni klic se pokliče, ko igralec vstopi v mod trgovino ali jo zapusti.
tags: []
---

:::warning

Ta funkcijo je bila dodana SA-MP 0.3a in v spodnjih različicah ne deluje!

:::

## Opis

Ta povratni klic se pokliče, ko igralec vstopi v mod trgovino ali jo zapusti.

| Ime        | Opis                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| playerid   | ID predvajalnika, ki je vstopil v modshop ali izstopil iz njega          |
| enterexit  | 1, če je igralec vnesel 0, če je zapustil modshop                        |
| interiorid | Modshop notranji ID, ki ga predvajalnik vnese (0, če izstopi)            |

## Returns

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Če je enterexit 0, to pomeni, da zapuščajo modshop
    {
        SendClientMessage(playerid, COLOR_WHITE, "Lep avto! Obdavčeni ste bili 100$.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Opombe

:::warning

Znane napake: igralci trčijo, ko vstopijo v isto modshop

:::

## Povezane Funkcijo

- [AddVehicleComponent](../functions/AddVehicleComponent.md): V vozilo dodajte komponento.
