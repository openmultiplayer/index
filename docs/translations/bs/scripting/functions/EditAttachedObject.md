---
title: EditAttachedObject
description: Pristupi modu uređivanja za prikvačeni objekat.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Pristupi modu uređivanja za prikvačeni objekat.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača koji ulazi u mod uređivanja.           |
| index    | Indeks (slot) prikvačenog objekta za uređivanje. |

## Returns

1 uspješno i 0 neuspješno.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 0, 1337, 2);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditAttachedObject(playerid, 0);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Sada uređujete priloženi objekt na indeksu slot 0!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Kameru možete pomicati tijekom uređivanja pritiskom i držanjem razmaknice (ili W u vozilu) i pomicanjem miša.

:::

:::warning

Igrači će moći skalirati objekte do vrlo velike ili negativne vrijednosti. Ograničenja treba uspostaviti pomoću OnPlayerEditAttachedObject za prekid uređivanja ili isjecanja vrijednosti skale.

:::

## Srodne Funkcije

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Prikvači objekat za igrača
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Ukloni prikvačeni objekat sa igrača
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Provjeri da li je objekat prikvačen za igrača u oređenom indexu.
- [EditObject](EditObject): Uredi objekat.
- [EditPlayerObject](EditPlayerObject): Uredi player objekat.
- [SelectObject](SelectObject): odaberi objekat.
- [CancelEdit](CancelEdit): Prekini uređivanje objekta.
- [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject): Pozvano kada igrač dovrši uređivanje prikvačenog objekta.
