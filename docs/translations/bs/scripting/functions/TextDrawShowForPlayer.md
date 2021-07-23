---
title: TextDrawShowForPlayer
description: Prikazuje textdraw za određenog igrača.
tags: ["player", "textdraw"]
---

## Deskripcija

Prikazuje textdraw za određenog igrača.

| Ime      | Deskripcija                                                     |
| -------- | --------------------------------------------------------------- |
| playerid | ID igrača za prikazati textdraw.                                |
| text     | ID textdrawa za prikazati. Returnovan/vraćen od TextDrawCreate. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač i/ili textdraw ne postoji.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new Text: textId = TextDrawCreate(100.0, 100.0, "Dobrodosao!");
    TextDrawShowForPlayer(playerid, textId);
}
```

## Zabilješke

:::tip

Ako će samo jedan igrač vidjeti textdraw, bilo bi pametno da koristite player-textdraw-ove. Ovo je također koristno za textdraw-ove koji moraju da prikažu informacije koje su posebne za svakog igrača posebno.

:::

## Srodne Funkcije

- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
