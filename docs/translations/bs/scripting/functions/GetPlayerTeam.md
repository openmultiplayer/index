---
title: GetPlayerTeam
description: Dobij ID tima u kojem je igrač.
tags: ["player"]
---

## Deskripcija

Dobij ID tima u kojem je igrač.

| Ime      | Deskripcija              |
| -------- | ------------------------ |
| playerid | ID igrača za dobiti tim. |

## Returns

0-254: Tim igrača. (0 je važeći tim)

255: Definisano kao NO_TEAM. Igrač nije u timu.

-1: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // Igrači koji su u timu 1 će se spawnovati u LV Airportu

    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
- [SetTeamCount](SetTeamCount): Postavi broj dostupnih timova.
