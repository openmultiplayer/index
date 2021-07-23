---
title: SetPlayerObjectMaterialText
description: Zamijeni teksturu player objekta sa tekstom.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Zamijeni teksturu player objekta sa tekstom.

| Ime           | Deskripcija                                                               |
| ------------- | ------------------------------------------------------------------------- |
| playerid      | ID igrača čijem player-objektu želite promijeniti teksturu.               |
| objectid      | ID objekta na kojeg želite postaviti tekst.                               |
| text          | Tekst za postaviti.                                                       |
| materialindex | Index materijala za zamijeniti sa tekstom (DEFAULT: 0).                   |
| materialsize  | [Veličina](../resources/materialtextsizes) materijala (DEFAULT: 256x128). |
| fontface      | Font za koristiti (DEFAULT: Arial).                                       |
| fontsize      | Veličina teksta (DEFAULT: 24) (MAX 255).                                  |
| bold          | Bold text. Postavi na 1 za bold (deblje), 0 za ne (DEFAULT: 1).           |
| fontcolor     | Boja teksta (DEFAULT: White).                                             |
| backcolor     | Boja pozadine (DEFAULT: Ništa (transparent)).                             |
| textalignment | [Poravnanje](../resources/materialtextsizes) teksta (DEFAULT: Left).      |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
if (strcmp("/text", cmdtext, true) == 0)
{
    new myObject = CreatePlayerObject(playerid, 19353, 0, 0, 10, 0.0, 0.0, 90.0); // kreiraj objekat
    SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.3{008500}e {FF8200}RC7", 0, OBJECT_MATERIAL_SIZE_256x128,\
"Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
    // napiši "SA-MP 0.3e RC7" na objekat, sa narandžastom bojom fonta i crnom pozadinom
return 1;
}
```

## Zabilješke

:::tip

Ugradnja boja može se koristiti za više boja u tekstu.

:::

## Srodne Funkcije

- [SetObjectMaterialText](SetObjectMaterialText): Zamijeni teksturu objekta sa tekstom.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Zamijeni teksturu player objekta sa teksturom drugog modela iz igre.

## Filterskripte koje podržavaju teksturisanje/text

- Ultimate Creator od Nexius
- Texture Studio od \[uL\]Pottus
- Fusez's Map Editor od RedFusion
- Map Editor I od adri1
