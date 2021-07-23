---
title: SetObjectMaterialText
description: Zamijeni teksturu objekta sa tekstom.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Zamijeni teksturu objekta sa tekstom.

| Ime           | Deskripcija                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| objectid      | ID objekta za zamijeniti sa texturam sa tekstom.                                                      |
| text          | Tekst za prikazati na objektu. (MAX 2048 karaktera)                                                   |
| materialindex | Index materijala objekta za zamijeniti sa tekstom.                                                    |
| materialsize  | [Veličina](/docs/scripting/resources/materialtextsizes) materijala.                                   |
| fontface      | Font za koristiti.                                                                                    |
| fontsize      | Veličina teksta (MAX 255).                                                                            |
| bold          | Bold text. Postavi na 1 za bold (deblji font), 0 za ne.                                               |
| fontcolor     | Boja teksta, u ARGB formatu.                                                                          |
| backcolor     | Boja pozadine, u ARGB formatu.                                                                        |
| textalignment | [Poravnanje](/docs/scripting/resources/materialtextalignment) teksta (po zadanim postavkama: lijevo). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
if (strcmp("/text", cmdtext, true) == 0)
{
    new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); // kreiraj objekat
    SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.3{008500}e {FF8200}RC7", 0, OBJECT_MATERIAL_SIZE_256x128,
    "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
    // napiši "SA-MP 0.3e RC7" na objekat, sa narandžastom bojom fonta i crnom pozadinom
    return 1;
}
```

## Zabilješke

:::tip

Ugradnja boja može se koristiti za više boja u tekstu.

:::

:::warning

MORAŠ koristiti ARGB format boje, ne RGBA kao što se koristi u klijent porukama i sl.

:::

## Srodne Funkcije

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Zamijeni teksturu player objekta sa tekstom.
- [SetObjectMaterial](SetObjectMaterial): Zamijeni teksturu objekta sa teksturom drugog modela iz igre.

## Filterskripte koje podržavaju teksturisanje/text

- Ultimate Creator od Nexius
- Texture Studio od \[uL\]Pottus
- Fusez's Map Editor od RedFusion
