---
título: OnPlayerRequestSpawn
descripción: Se llama cuando un jugador intenta spawnear vía selección de clase ya sea presionando SHIFT o clickeando el botón 'Spawn'.
tags: ["player"]
---

## Descripción

Se llama cuando un jugador intenta spawnear vía selección de clase ya sea presionando SHIFT o clickeando el botón 'Spawn'.

| Nombre   | Descripción                                   |
| -------- | --------------------------------------------- |
| playerid | El ID del jugador que solicitó spawnear.      |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "No podés spawnear.");
        return 0;
    }
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

:::tip

Para prevenir a los jugadores de spawnear con ciertas clases, la última clase vista debe ser guardada en una variable en OnPlayerRequestClass.

:::

## Funciones Relacionadas
