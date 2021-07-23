---
title: OnActorStreamIn
description: Ta "callback" se pokliče, ko se "actor" pojavi v igralčevi "client".
tags: []
---

:::warning

Ta funkcijo je bila dodana v SA-MP 0.3.7 in ne deluje v nižjih različicah!

:::

## Opis

Ta "callback" se pokliče, ko se "actor" pojavi v igralčevi "client".

| Ime         | Opis                                           |
| ----------- | ---------------------------------------------- |
| actorid     | ID "actor" ki se prikaže v igralčevi "client". |
| forplayerid | ID igralec, v katerem se "actor" pojavi.       |

## Returns

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d pojavil v vaši "client".", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Opombe

:::tip

Ta "callback" bo poklical tudi NPC.

:::

## Povezane Funkcijo
