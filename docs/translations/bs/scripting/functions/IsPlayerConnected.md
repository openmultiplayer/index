---
title: IsPlayerConnected
description: Provjerava da li je igrač konektovan (Ako je ID uzet od stanje konektovanog igrača).
tags: ["player"]
---

## Deskripcija

Provjerava da li je igrač konektovan (Ako je ID uzet od stanje konektovanog igrača).

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru. |

## Returns

0: Igrač nije konektovan.

1: igrač JESTE konektovan.

## Primjeri

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("Igrač sa ID-em %i nije konektovan!", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0);
    }
}
```

## Zabilješke

:::tip

Ova funkcija se u mnogim slučajevima može izostaviti. Mnoge druge funkcije već imaju ugrađenu neku vrstu provjere veze.

:::

## Srodne Funkcije

- [IsPlayerAdmin](IsPlayerAdmin): Provjerava da li je igrač prijavljen/ulogovan u RCON.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Pozvano kada se igrač konektuje na server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Pozvano kada igrač napusti server.
