---
título: OnVehicleRespray
descripción: Este callback se llama cuando un jugador sale de un taller de modificación, sin importar si los colores no fueron cambiados.
tags: ["vehicle"]
---

## Descripción

Este callback se llama cuando un jugador sale de un taller de modificación, sin importar si los colores no fueron cambiados. Cuidado, el nombre es ambiguo, los Pay 'n' Spray no llamarán este callback.

| Nombre    | Descripción                                                  |
| --------- | ------------------------------------------------------------ |
| playerid  | El ID del jugador que está conduciendo el vehículo.          |
| vehicleid | El ID del vehículo repintado.                                |
| color1    | El color al que se cambió el color primario del vehículo.    |
| color2    | El color al que se cambió el color secundario del vehículo.  |

## Devoluciones

0 - Prevendrá a filterscripts de recibir este callback.

Siempre se llama primero en el gamemode.

## Ejemplos

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Repintaste el vehículo %d a los colores %d y %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Notas

:::tip

Este callback no es llamado por ChangeVehicleColor. Engañosamente, este callback no se llama por pay 'n' spray (solo tiendas de modificación).

Solución acá: http://pastebin.com/G81da7N1

:::

:::warning

Bugs Conocidos: La vista previa de un componente dentro de una tienda de modificación podría llamar a este callback.

:::

## Funciones Relaciones

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Establecer el color de un vehículo.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Cambiar la capa de pintura de un vehículo.
- [OnVehiclePaintjob](OnVehiclePaintjob): Se llama cuando la capa de pintura de un vehículo es modificada.
- [OnVehicleMod](OnVehicleMod): Se llama cuando un vehículo es modificado.
- [OnEnterExitModShop](OnEnterExitModShop): Se llama cuando un jugador sale de un taller de modificación.
