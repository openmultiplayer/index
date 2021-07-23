---
título: OnVehicleDeath
descripción: Este callback se llama cuando un vehículo es destruido - ya sea explotando o siendo sumergido en el agua.
tags: ["vehicle"]
---

## Descripción

Este callback se llama cuando un vehículo es destruido - ya sea explotando o siendo sumergido en el agua.

| Nombre    | Descripción                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | El ID del vehículo destruido.                                                                                                                       |
| killerid  | El ID del jugador que informó (sincronizó) la destrucción del vehículo (el nombre es engañoso). Generalmente el conductor o un pasajero (si lo hay) o el jugador más cercano. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "El vehículo %i fue destruido. Reportado por el jugador %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Este callback también se llamará cuando un vehículo entre en el agua, pero el vehículo se puede salvar de la destrucción mediante la teletransportación o sacándolo manejando (si solo está parcialmente sumergido). El callback no se llamará por segunda vez y el vehículo puede desaparecer cuando el conductor salga o después de un breve período de tiempo.

:::

## Funciones Relacionadas

- [SetVehicleHealth](../functions/SetVehicleHealth): Establecer la salud de un vehículo.
