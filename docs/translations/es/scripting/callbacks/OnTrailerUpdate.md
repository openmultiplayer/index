---
título: OnTrailerUpdate
descripción: Este callback se llama cuando un jugador envía una actualización de trailer.
tags: []
---

<VersionWarnES name='callback' version='SA-MP 0.3z R4' />

## Descripción

Este callback se llama cuando un jugador envía una actualización de trailer.

| Nombre    | Descripción                                    		   |
| --------- | -------------------------------------------------------- |
| playerid  | El ID del jugador que envió la actualización de trailer. |
| vehicleid | El ID del trailer que está siendo actualizado.           |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Notas

:::warning

Este callback se llama muy frecuentemente por segundo por cada trailer. Deberías abstenerte de implementar cálculos intensivos o operaciones de escritura/lectura sobre archivos en este callback.

:::

## Funciones Relacionadas

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Comprueba qué trailer está siendo tirado por un vehículo.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Comprueba si un trailer está adjunto a un vehículo.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Adjuntar un trailer a un vehículo.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Separar un trailer de un vehículo.
