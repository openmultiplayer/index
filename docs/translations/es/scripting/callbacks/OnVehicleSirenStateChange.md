---
título: OnVehicleSirenStateChange
descripción: Este callback se llama cuando la sirena de un vehículo es alternada. 
tags: ["vehicle"]
---

<VersionWarnES name='callback' version='SA-MP 0.3.7' />

## Descripción

Este callback se llama cuando la sirena de un vehículo es alternada. 

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| playerid  | El ID del jugador que alternó la sirena (conductor).      |
| vehicleid | El ID del vehículo en el que la sirena fue alternada.     |
| newstate  | 0 si la sirena se apagó, 1 si se prendió.                 |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Sirena ~G~prendida", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Sirena ~r~apagada", 1000, 3);
    }
    return 1;
}
```

## Notas

:::tip

Este callback solo se llama cuando la sirena de un vehículo se enciende o apaga, NO cuando la sirena alternativa está en uso (sosteniendo la bocina).

:::

## Funciones Relacionadas

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Verifica si la sirena de un vehículo está encendida o apagada.
