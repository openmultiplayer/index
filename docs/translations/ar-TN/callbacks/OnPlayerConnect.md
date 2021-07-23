---
el 3onwan : OnPlayerConnect
el Wasf: Testa3mel el callback hadha wa9talli player yod5ol el server
tags: ["player"]
---

## Wasf

Testa3mel el callback hadha wa9talli player yod5ol el server

## Arguments

| Esm el argument     | el Wasf                                 | 
| --------------------| ----------------------------------------|
| playerid            | El ID mta3 el player eli d5al el server |

## Returns

0 - El callback hadha mahouch bach yet3adda lel filterscripts w mahouch bach ye5dem fel filterscipts kan 3amel ``return 0``

1 - Bach yet3adda lel filterscripts w bach ye5dem fel filterscripts lo5rin kan ta3mel ``return 1``

El callback hadha rahou executed fel filterscripts essa3k

## Mithal

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s D5al el server. Mar7ba bik!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Functions tab3inha
