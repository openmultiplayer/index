---
título: OnRconLoginAttempt
descripción: Este callback se llama cuando alguien intenta identificarse como RCON adentro del juego, sin importar si tiene éxito o no.
tags: []
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando alguien intenta identificarse como RCON adentro del juego, sin importar si tiene éxito o no.

| Nombre     | Descripción                                             |
| ---------- | ------------------------------------------------------- |
| ip[]       | La IP del jugador que intenta identificarse como RCON.  |
| password[] | La contraseña que fue usada para intentar logearse.     |
| success    | 0 si la contraseña fue incorrecta o 1 si fue correcta.  |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //Si la contraseña fue incorrecta
    {
        printf("RCON LOGIN FALLIDO POR IP %s USANDO LA CONTRASEÑA %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Bucle a través de todos los jugadores
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //Si la IP de un jugador es la IP que falló el inicio de sesión
            {
                SendClientMessage(i, 0xFFFFFFFF, "Contraseña equivocada. Chau!"); //Envía un mensaje
                Kick(i); //Kickea al jugador.
            }
        }
    }
    return 1;
}
```

## Notas

:::tip

Este callback se llama solo cuando /rcon login se usa adentro del juego. Este callback solo se llama cuando el jugador no está logeado aún. Cuando el jugador está logeado (como RCON obviamente), OnRconCommand es llamado en su lugar.

:::

## Funciones Relacionadas

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Comprueba si un jugador está identificado como RCON.
- [SendRconCommand](../functions/SendRconCommand): Envía un comando RCON desde el script.
