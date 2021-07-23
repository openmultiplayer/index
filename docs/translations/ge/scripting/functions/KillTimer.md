---
title: KillTimer
description: Kills (stops) a running timer.
tags: ["timer"]
---

## Description

Kills (stops) a running timer.

| Name    | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| timerid | The ID of the timer to kill (returned by SetTimer or SetTimerEx). |

## Returns

This function always returns 0.

## Examples

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

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
