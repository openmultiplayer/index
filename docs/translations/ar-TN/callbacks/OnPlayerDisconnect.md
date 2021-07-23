---
El 3onwan: OnPlayerDisconnect
El wasf: Testa3mel el callback hadha wa9talli player yo5rej mel server
tags: ["player"]
---

## Description

Testa3mel el callback hadha wa9talli player yo5rej mel server

# Arguments

| Esm el argument     | El wasg                                              |
| ------------------- | -----------------------------------------------------|
| playerid            | ID mta3 el player eli 5raj el server                 |
| reason              | El sbab mta3 el disconnect. chouf el tableaux ellota |

## Returns

0 - El callback hadha mahouch bach yet3adda lel filterscripts w mahouch bach ye5dem fel filterscipts kan 3amel ``return 0``

1 - Bach yet3adda lel filterscripts w bach ye5dem fel filterscripts lo5rin kan ta3mel ``return 1``

El callback hadha rahou executed fel filterscripts essa3k

## Mithal

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s 5raj mel server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notes

:::tip

Fama functions eli momken barcha ma ye5dmouch kif testa3melhol fel callback hadha 3ala 5ater el player howa c'est deja 5raj mel server, kima el function GetPlayerIp w GetPlayerPos

:::

## Functions tab3inha
