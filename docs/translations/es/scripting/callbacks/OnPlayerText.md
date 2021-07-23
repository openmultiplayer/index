---
título: OnPlayerText
descripción: Se llama cuando un jugador envía un mensaje en el chat.
tags: ["player"]
---

## Descripción

Se llama cuando un jugador envía un mensaje en el chat.

| Nombre   | Descripción                              |
| -------- | ---------------------------------------- |
| playerid | El ID del jugador que escribió el texto. |
| text[]   | El texto que escribió el jugador.        |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // ignora el texto predeterminado y envía el personalizado
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Obliga a un jugador a enviar mensajes de texto para un jugador.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Obliga a un jugador a enviar texto para todos los jugadores.
