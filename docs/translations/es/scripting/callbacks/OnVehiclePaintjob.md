---
título: OnVehiclePaintjob
descripción: Se llama cuando un jugador obtiene una vista previa de una capa de pintura adentro de un taller de modificación.
tags: ["vehicle"]
---

## Descripción

Se llama cuando un jugador obtiene una vista previa de una capa de pintura adentro de un taller de modificación. Cuidado, este callback no se llama cuando el jugador compra la capa de pintura.

| Nombre     | Descripción                                                      |
| ---------- | ---------------------------------------------------------------- |
| playerid   | El ID del jugador que cambió la capa de pintura. 				|
| vehicleid  | El ID del vehículo al que cambiaron de capa de pintura.          |
| paintjobid | El ID de la nueva capa de pintura.                               |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Cambiaste la capa de pintura de tu vehículo a %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Notas

:::tip

Este callback no se llama por ChangeVehiclePaintJob. Puede usar OnVehicleChangePaintjob desde Vsync para saber cuándo el jugador compra el trabajo de pintura.

:::

## Funciones Relacionadas

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Cambiar la capa de pintura de un vehículo.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Establecer el color de un vehículo.
- [OnVehicleRespray](OnVehicleRespray): Se llama cuando un vehículo es repintado.
- [OnVehicleMod](OnVehicleMod): Se llama cuando un vehículo es modificado.
