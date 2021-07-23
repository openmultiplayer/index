---
título: OnPlayerStreamOut
descripción: Este callback se llama cuando un jugador se deja de cargar (ya no es visible) por el cliente de algún otro jugador.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando un jugador se deja de cargar (ya no es visible) por el cliente de algún otro jugador.

| Nombre      | Descripción                                     |
| ----------- | ----------------------------------------------- |
| playerid    | El jugador al que se lo dejó de cargar.         |
| forplayerid | El jugador que dejó de cargar al otro jugador.  |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Tu computadora acaba de dejar de cargar al jugador ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas
