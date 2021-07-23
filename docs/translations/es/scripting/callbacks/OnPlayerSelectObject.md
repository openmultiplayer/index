---
título: OnPlayerSelectObject
descripción: Este callback se llama cuando un jugador selecciona un objeto después de que SelectObject fue usado.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3e' />

## Descripción

Este callback se llama cuando un jugador selecciona un objeto después de que SelectObject fue usado.

| Nombre   | Descripción                                                	   |
| -------- | ----------------------------------------------------------------- |
| playerid | El ID del jugador que seleccionó un objeto.                	   |
| type     | El [tipo](../resources/selectobjecttypes) de objeto seleccionado. |
| objectid | El ID del objeto seleccionado.                             	   |
| modelid  | El modelo del objeto seleccionado.                         	   |
| Float:fX | La posición X del objeto seleccionado.                     	   |
| Float:fY | La posición Y del objeto seleccionado.                     	   |
| Float:fZ | La posición Z del objeto seleccionado.                     	   |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("El jugador %d seleccionó el objeto %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Ahora estás habilitado para poder editar el objeto!");
    return 1;
}
```

## Funciones Relacionadas

- [SelectObject](../functions/SelectObject): Seleccionar un objeto.
