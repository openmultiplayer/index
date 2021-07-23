---
título: OnUnoccupiedVehicleUpdate
descripción: Este callback se llama cuando el cliente de un jugador actualiza/sincroniza la posición de un vehículo que él no está conduciendo.
tags: ["vehicle"]
---

<VersionWarnES name='callback' version='SA-MP 0.3c R3' />

## Descripción

Este callback se llama cuando el cliente de un jugador actualiza/sincroniza la posición de un vehículo que él no está conduciendo. Esto puede suceder fuera del vehículo o cuando el jugador es un pasajero de un vehículo que no tiene conductor.

| Name           | Description                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | El ID del vehículo al que se le actualizó la posición.                                                                                                               |
| playerid       | El ID que envió la actualización de sincronización de la posición del vehículo.                                                                                                   |
| passenger_seat | La ID del asiento si el jugador es un pasajero. 0 = no está en el vehículo, 1 = pasajero delantero, 2 = trasero izquierdo 3 = trasero derecho 4+ es para coach / bus, etc. con muchos asientos para pasajeros. |
| new_x          | La nueva coordenada X del vehículo. Este parámetro se agregó en 0.3z. Déjelo fuera si usa una versión anterior.                                                 |
| new_y          | La nueva coordenada Y del vehículo. Este parámetro se agregó en 0.3z. Déjelo fuera si usa una versión anterior.                                                 |
| new_z          | La nueva coordenada Z del vehículo. Este parámetro se agregó en 0.3z. Déjelo fuera si usa una versión anterior.                                                 |
| vel_x          | La nueva velocidad X del vehículo. Este parámetro se agregó en 0.3z R4. Déjelo fuera si usa una versión anterior.                                                |
| vel_y          | La nueva velocidad Y del vehículo. Este parámetro se agregó en 0.3z R4. Déjelo fuera si usa una versión anterior.                                               |
| vel_z          | La nueva velocidad Z del vehículo. Este parámetro se agregó en 0.3z R4. Déjelo fuera si usa una versión anterior.                                                |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.


## Ejemplos

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Comprueba si lo movió lejos
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Rechazar la actualización
        return 0;
    }

    return 1;
}
```

## Notas

:::warning

Este callback se llama muy frecuentemente por segundo por cada vehículo. Deberías abstenerte de implementar cálculos intensivos o operaciones de escritura/lectura sobre archivos en este callback. GetVehiclePos las coordenadas antiguas del vehículo antes de esta actualización.

:::

## Funciones Relacionadas
