---
title: KillTimer
description: Ubija (stopira) pokrenuti tajmer.
tags: []
---

## Deskripcija

Ubija (stopira) pokrenuti tajmer.

| Ime     | Deskripcija                                                         |
| ------- | ------------------------------------------------------------------- |
| timerid | ID tajmera za ubiti (returnovan/vraćen od SetTimer ili SetTimerEx). |

## Returns

Ova funkcija uvijek returna/vraća 0.

## Primjeri

```c
new
    gConnectTimer[MAX_PLAYERS] = {-1, ...};

public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid)
{
    KillTimer(gConnectTimer[playerid]);
    gConnectTimer[playerid] = -1;
    return 1;
}

forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "Welcome!");
}
```

## Srodne Funkcije

- [SetTimer](SetTimer): Postavi tajmer.
- [SetTimerEx](SetTimerEx): Postavi tajmer sa parametrima.
