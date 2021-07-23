---
título: OnPlayerSpawn
descripción: Este callback se llama cuando un jugador spawnea.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador spawnea. (ej. después de llamar la función SpawnPlayer) 

| Nombre   | Descripción                        |
| -------- | ---------------------------------- |
| playerid | El ID del jugador que spawneó.     |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s spawneó correctamente.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

El juego algunas veces le saca \$100 a los jugadores después de spawnear.

:::

## Funciones Relacionadas

- [SpawnPlayer](../functions/SpawnPlayer): Forzar a un jugador a spawnear.
- [AddPlayerClass](../functions/AddPlayerClass): Añadir una clase.
- [SetSpawnInfo](../functions/SetSpawnInfo): Establecer la configuración de spawn a un jugador.
