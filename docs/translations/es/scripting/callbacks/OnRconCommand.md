---
título: OnRconCommand
descripción: Este callback se llama cuando un comando es enviado mediante la consola del servidor, RCON remoto, o vía el juego usando "/rcon command".
tags: []
---

## Descripción

Este callback se llama cuando un comando es enviado mediante la consola del servidor, RCON remoto, o vía el juego usando "/rcon command".

| Nombre  | Descripción                                                                            |
| ------- | -------------------------------------------------------------------------------------- |
| cmd[]   | Un string conteniendo el comando que fue escrito, así como cualquier parámetro pasado. |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: Escribiste '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("You said hello to the world."); // Esto le aparecerá al jugador que escribió el comando rcon en el chat en blanco.
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

"/rcon " no está incluido en "cmd" cuando un jugador esribe un comando. Si usas la función "print" acá, esta enviará un mensaje al jugador que escribió el comando en el juego así como en el log de la consola. Este callback no se llama cuando el jugador no está logeado como un admin RCON. Cuando el jugador no está logeado como RCON y usa /rcon login, este callback no va a ser llamado y OnRconLoginAttempt es llamado en su lugar. Sin embargo, cuando el jugador está logeado como RCON, el uso de este comando llamará este callback.

:::

:::warning

Necesitarás incluir este callback en un filterscript cargado para que funcione en el gamemode!

:::

## Funciones Relacionadas

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Comprueba si un jugador está logeado como RCON.
- [OnRconLoginAttempt](OnRconLoginAttempt): Se llama cuando hay un intento de identificarse como RCON.
