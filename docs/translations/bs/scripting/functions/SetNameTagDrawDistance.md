---
title: SetNameTagDrawDistance
description: Postavi maksimalnu distancu sa koje se prikazuju imena igrača.
tags: []
---

## Deskripcija

Postavi maksimalnu distancu sa koje se prikazuju imena igrača.

| Ime            | Deskripcija            |
| -------------- | ---------------------- |
| Float:distance | Distanca za postaviti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
SetNameTagDrawDistance(20.0);
```

## Zabilješke

:::tip

Zadana distanca je 70 SA jedinica.

:::

## Srodne Funkcije

- [LimitGlobalChatRadius](LimitGlobalChatRadius): Ograničite udaljenost između igrača potrebnih da biste vidjeli njihov chat.
- [ShowNameTags](ShowNameTags): Postavi nametagove uključeno ili isključeno.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Prikaži ili sakrij nametag za određenog igrača.
