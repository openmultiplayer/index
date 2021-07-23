---
title: AddVehicleComponent
description: Dodaje 'komponentu' (često nazvana'mod' (modifikacija)) na vozilo.
tags: ["vehicle"]
---

## Deskripcija

Dodaje 'komponentu' (često nazvana'mod' (modifikacija)) na vozilo. Validne komponente možete pronaći ovdje.

| Ime                                           | Deskripcija                                                        |
| --------------------------------------------- | ------------------------------------------------------------------ |
| vehicleid                                     | ID vozila na koji dodajete komponentu. Ne miješajte ga sa modelid. |
| [componentid](../resources/carcomponentid.md) | ID komponente koju dodajete na vozilo.                             |

## Returns

0 - Komponenta nije dodana zato što vozilo ne postoji.

1 - Komponenta je uspješno dodana na vozilo.

## Primjeri

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro dodan na taxi.");
        }
    }
    return 1;
}
```

## Zabilješke

:::warning

Korištenjem nevažećeg ID-a komponente će da crashuje igraču igru. Za to ne postoje interne provjere.

:::

## Srodne Funkcije

- [RemoveVehicleComponent](RemoveVehicleComponent.md): Ukloni komponentu sa vozila.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot.md): Provjeri koje komponente vozilo ima.
- [GetVehicleComponentType](GetVehicleComponentType.md): Provjeri tip komponente preko ID-a.
- [OnVehicleMod](../callbacks/OnVehicleMod.md): Pozvano kada igrač modificira vozilo.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop.md): Pozvano kada vozilo uđe ili izađe u/iz mod shopa.
