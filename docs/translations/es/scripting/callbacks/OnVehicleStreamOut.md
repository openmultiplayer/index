---
título: OnVehicleStreamOut
descripción: Este callback se llama cuando un vehículo es dejado de cargar (deja de ser visible) por el cliente de un jugador.
tags: ["vehicle"]
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando un vehículo es dejado de cargar (deja de ser visible) por el cliente de un jugador.

| Nombre      | Descripción                                                  |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | El ID del vehículo que es dejado de cargar.                  |
| forplayerid | El ID del jugador que dejó de cargar el vehículo.		     |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Tu cliente dejó de cargar el vehículo %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas
