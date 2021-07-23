---
title: OnActorStreamOut
description: Ta "callback" se pokliče, ko se "actor" neha pojavi v igralčevi "client".
tags: []
---

:::warning

Ta funkcijo je bila dodana v SA-MP 0.3.7 in ne deluje v nižjih različicah!

:::

## Opis

Ta "callback" se pokliče, ko se "actor" neha pojavi v igralčevi "client".

| Ime         | Opis                                                        |
| ----------- | ----------------------------------------------------------- |
| actorid     | ID aktora koji se prestao prikazivati u igračevom "client". |
| forplayerid | ID igralca, pri katerem je igralec prenehal "actor".        |

## Returns

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d je prenehal delovati v vaši "client".", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Opombe

:::tip

Ta "callback" bo poklical tudi NPC.

:::

## Povezane Funkcijo
