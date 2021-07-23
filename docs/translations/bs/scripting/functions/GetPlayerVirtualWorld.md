---
title: GetPlayerVirtualWorld
description: Dohvaća trenutni virtualni svijet u kojem se igrač nalazi.
tags: ["player"]
---

## Deskripcija

Dohvaća trenutni virtualni svijet u kojem se igrač nalazi.

| Ime      | Deskripcija                           |
| -------- | ------------------------------------- |
| playerid | ID igrača za dobiti virtualni svijet. |

## Returns

ID virtualnog svijeta u kojem je igrač trenutno.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new
            string[32];
        format(string, sizeof(string), "Tvoj virtualni svijet: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Virtualni svjetovi nisu isto šti i enterijeri.

:::

## Srodne Funkcije

- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Postavite virtualni svijet igrača.
- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): Provjerite u kojem je virtualnom svijetu vozilo.
- [GetPlayerInterior](GetPlayerInterior): Dobij trenutni enterijer igrača.
