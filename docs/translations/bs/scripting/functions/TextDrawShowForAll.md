---
title: TextDrawShowForAll
description: Prikazuje textdraw svim igračima.
tags: ["textdraw"]
---

## Deskripcija

Prikazuje textdraw svim igračima.

| Ime  | Deskripcija                                                     |
| ---- | --------------------------------------------------------------- |
| text | ID textdrawa za prikazati. Returnovan/vraćen od TextDrawCreate. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni textdraw ne postoji.

## Primjeri

```c
new Text: textId = TextDrawCreate(100.0, 100.0, "Zdravo!");
TextDrawShowForAll(textId);
```

## Srodne Funkcije

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
