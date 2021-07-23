---
título: OnVehicleStreamIn
descripción: Se llama cuando un vehículo es cargado (se hace visible) en el cliente de un jugador.
tags: ["vehicle"]
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Se llama cuando un vehículo es cargado (se hace visible) en el cliente de un jugador.

| Nombre      | Descripción                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | El ID del vehículo que fue cargado para el jugador.    |
| forplayerid | El ID del jugador por el que se cargó el vehículo.     |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Ahora podés ver el vehículo %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas
