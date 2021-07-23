---
título: OnVehicleDamageStatusUpdate
descripción: Este callback se llama cuando un elemento de vehículo como las puertas, llantas, paneles, o luces cambiar su estado de daño.
tags: ["vehicle"]
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

:::tip

Para algunas funciones útiles para trabajar con valores de daños del vehículo, vea [aquí](../resources/damagestatus).

:::

## Descripción

Este callback se llama cuando un elemento de vehículo como las puertas, llantas, paneles, o luces cambiar su estado de daño.

| Nombre    | Descripción                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | El ID del vehículo que cambió su estado de daño.                                                       |
| playerid  | El ID del jugador que sincronizó el cambio en el estado de daño (quién hizo reparar o dañar el auto).  |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Obtiene el estado de daño de todos los componentes del vehículo
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Establece las ruedas a 0, lo que significa que ninguna está pinchada
    tires = 0;

    // Actualiza el daño del vehículo sin las ruedas pinchadas
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Notas

:::tip

Esto no incluye cambios en la salud del vehículo.

:::

## Funciones Relacionadas

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Obtiene el estado de daño de cada parte individualmente.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Actualiza el daño del vehículo.
