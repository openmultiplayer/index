---
title: GetVehicleComponentType
description: Saznaj koji je tip komponente određeni ID.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Saznaj koji je tip komponente određeni ID.

| Ime       | Deskripcija                  |
| --------- | ---------------------------- |
| component | ID komponente za provjeriti. |

## Returns

ID slota za komponentu navedene komponente ili -1 ako je komponenta nevaljana.

## Primjeri

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        componentType = GetVehicleComponentType(componentid);

    if (componentType != -1)
    {
        new
            clientMessage[41];

        format(clientMessage, sizeof(clientMessage), "Izmijenili ste svoje vozilo na slotu %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "Komponenta je nevažeća.");
    }

    return 1;
}
```

## Srodne Funkcije

- [AddVehicleComponent](AddVehicleComponent): Dodaje komponentu na vozilo.
- [RemoveVehicleComponent](RemoveVehicleComponent): Ukloni komponentu sa vozila.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Provjeri koje komponente vozilo ima.
- [OnVehicleMod](../callbacks/OnVehicleMod): Pozvano kada vozilo biva nadograđeno.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Pozvano kada vozilo uđe ili izađe iz mod shopa.
