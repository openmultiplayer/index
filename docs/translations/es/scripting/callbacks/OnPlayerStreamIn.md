---
título: OnPlayerStreamIn
descripción: Este callback se llama cuando un jugador es cargado (se hace visible) por el cliente de otros jugadores.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando un jugador es cargado (se hace visible) por el cliente de otros jugadores.

| Nombre      | Descripción                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | El ID del jugador que fue cargado.                      |
| forplayerid | El ID del jugador que cargó al otro jugador. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "El jugador %d se cargó en tu cliente.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas
