---
title: TextDrawHideForAll
description: Sakriva textdraw za sve igrače.
tags: ["textdraw"]
---

## Deskripcija

Sakriva textdraw za sve igrače.

| Ime  | Deskripcija                                                    |
| ---- | -------------------------------------------------------------- |
| text | ID textdrawa za sakriti (returnovan/vraćen od TextDrawCreate). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

gMyTextdraw = TextDrawCreate(...);


//Kasnije
TextDrawShowForAll(gMyTextdraw);

//Još kasnije
TextDrawHideForAll(gMyTextdraw);
```

## Srodne Funkcije

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
