---
title: IsValidVehicle
description: Provjerava da li je vozilo kreirano.
tags: []
---

:::note

Ova funkcija nije prisutna u starim bibliotekama/library-ima pakiranim sa SA-MP serverom, međutim [najnovije verzije održavanih biblioteka/library-a](https://github.com/pawn-lang/samp-stdlib) sadrže ovu i druge deklaracije koje su ranije nedostajale .

:::

## Deskripcija

Provjerava da li je vozilo kreirano.

## Parameters

| Ime       | Deskripcija                      |
| --------- | -------------------------------- |
| vehicleid | Vozilo za provjeriti postojanje. |

## Return Values

**true** ako vozilo postoji, uostalom **false**.

## Primjer upotrebe

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// Count vehicles
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext,"/countvehicles",true))
    {
        new
            count,
            msg[60];

        for(new i; i < MAX_VEHICLES; i++)
        {
            if (IsValidVehicle(i)) count++;
        }

        format(msg, sizeof(msg), "* Nalazi se %d valjano stvorenih vozila na ovom serveru.", count);
        SendClientMessage(playerid, 0x33CCCCFF, msg);
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [GetPlayerVehicleID](GetPlayerVehicleID): Dobij ID vozila u kojem je igrač trenutno.
- [GetVehicleModel](GetVehicleModel): Dobij ID modela vozila.
