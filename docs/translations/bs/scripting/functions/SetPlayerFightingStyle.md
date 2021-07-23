---
title: SetPlayerFightingStyle
description: Postavi igraču specijalan stil borbe.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi igraču specijalan stil borbe. Za koristiti unutar igre, ciljaj i klikni 'secondary attack' dugme (ENTER po zadanim postavkama).

| Ime      | Deskripcija                                             |
| -------- | ------------------------------------------------------- |
| playerid | ID igrača za postaviti stil borbe.                      |
| style    | [Stil borbe](../resources/fightingstyles) za postaviti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
if (strcmp(cmdtext, "/boxing", true) == 0)
{
    SetPlayerFightingStyle(playerid, FIGHT_STYLE_BOXING);
    SendClientMessage(playerid, 0xFFFFFFAA, "Promijenio si svoj stil borbe u Boxing!");
    return 1;
}
```

## Zabilješke

:::tip

To ne utječe na normalne napade šake - samo na specijalne/sekundarne napade (aim + klikni 'secondary attack' dugme).

:::

## Srodne Funkcije

- [GetPlayerFightingStyle](scripting/functions/GetPlayerFightingStyle): Dobij igračev stil borbe.
