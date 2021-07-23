---
título: OnVehicleSpawn
descripción: Este callback se llama cuando un vehículo reaparece.
tags: ["vehicle"]
---

:::warning

Este callback se llama **solo** cuando el vehículo **re**aparece! CreateVehicle y AddStaticVehicle(Ex) **no van** a desencadenar este callback.

:::

## Descripción

Este callback se llama cuando un vehículo reaparece.

| Name      | Description                         |
| --------- | ----------------------------------- |
| vehicleid | El ID del vehículo que spawneo. |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleSpawn(vehicleid)
{
    printf("El vehículo %i spawneó!",vehicleid);
    return 1;
}
```

## Funciones Relacionadas

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Reaparecer un vehículo.
- [CreateVehicle](../functions/CreateVehicle): Crear un vehículo.
