---
título: OnVehicleMod
descripción: Este callback se llama cuando un vehículo es tuneado.
tags: ["vehicle"]
---

## Descripción

Este callback se llama cuando un vehículo es tuneado.

| Nombre      | Descripción                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | El ID del conductor del vehículo.                       |
| vehicleid   | El ID del vehículo que es tuneado.                      |
| componentid | El ID del componente añadido al vehículo.               |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleMod(playerid,vehicleid,componentid)
{
    printf("El vehículo %d fue modificado por ID %d con el id de componente %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Hack de tuning"); // script Anti-tuning hacks
        return 0; // Previene la mala modificación de ser sincronizada a otros jugadores.
        //Probado y funciona incluso en servidores que te permiten modificar tu vehículo mediante comandos, menús, diálogos, etc.
    }
    return 1;
}
```

## Notas

:::tip

Este callback NO se llama por AddVehicleComponent.

:::

## Funciones Relacionadas

- [AddVehicleComponent](../functions/AddVehicleComponent): Añadir un componente a un vehículo.
- [OnEnterExitModShop](OnEnterExitModShop): Se llama cuando un jugador entra o sale de un taller de modificación.
- [OnVehiclePaintjob](OnVehiclePaintjob): Se llama cuando la capa de pintura de un auto cambia.
- [OnVehicleRespray](OnVehicleRespray): Se llama cuando un vehículo es repintado.
