---
título: OnPlayerStateChange
descripción: Este callback se llama cuando un jugador cambia de estado.
tags: ["player"]
---

## Description

Este callback se llama cuando un jugador cambia de estado. Por ejemplo, cuando pasa de ser conductor a estár a pie (bajándose de vehículo).

| Nombre   | Descripción                              |
| -------- | ---------------------------------------- |
| playerid | El ID del jugador que cambió de estado.  |
| newstate | El nuevo estado del jugador.             |
| oldstate | El estado anterior del jugador.          |

Vea [Player States](../resources/playerstates) para ver una lista de todos los estados de jugador disponibles.

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // El jugador entró a un vehículo como conductor
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); //Añadir nitro al vehículo
    }
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas

- [GetPlayerState](../functions/GetPlayerState): Obtener el estado actual de un jugador.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Obtener la acción especial actual de un jugador.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Establecer una acción especial a un jugador.
