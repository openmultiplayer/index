---
título: OnDialogResponse
descripción: Este callback se llama cuando un jugador responde a un cuadro de diálogo mostrado usando ShowPlayerDialog ya sea clickeando un botón, presionando ENTER/ESC o haciendo doble click en un elemento de lista (si el diálogo utiliza el estilo DIALOG_STYLE_LIST).
tags: []
---

<VersionWarnES name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando un jugador responde a un cuadro de diálogo mostrado usando ShowPlayerDialog ya sea clickeando un botón, presionando ENTER/ESC o haciendo doble click en un elemento de lista (si el diálogo utiliza el estilo DIALOG_STYLE_LIST).

| Nombre      | Descripción                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | El ID del jugador que respondió el diálogo.                                                                             |
| dialogid    | El ID del diálogo al que respondió el jugador, asignado en ShowPlayerDialog.                                            |
| response    | 1 para botón izquierdo y 0 para botón derecho (si sólo hay un botón, siempre 1).                                        |
| listitem    | El ID del elemento de lista que seleccionó el jugador (empieza de 0) (si no se está usando DIALOG_STYLE_LIST, será -1)  |
| inputtext[] | El texto ingresado en la caja de entrada por el jugador o el texto del elemento de lista seleccionado.                  |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
// Definimos el ID del diálogo para poder controlar las respuestas
#define DIALOG_RULES 1

// En algún comando
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Reglas del servidor", "- No Cheating\n- No Spamming\n- Respect Admins\n\nAceptas las reglas?", "Sí", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Si clickeó en "Sí" o apretó enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Gracias por aceptar las reglas del servidor!");
        }
        else // Si apretó la tecla ESC o clickeó en "No".
        {
            Kick(playerid);
        }
        return 1; // Manejamos un diálogo, así que hay que devolver 1. Como en OnPlayerCommandText.
    }

    return 0; // TENÉS que devolver 0 acá! Como en OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// En algún comando
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Ingresá tu contraseña:", "Login", "Cancelar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Si clickeó 'Cancelar' o apretó la tecla ESC
        {
            Kick(playerid);
        }
        else // Si apretó enter o clickeó en el botón 'Login'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Ahora estás logeado!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "Contraseña incorrecta.");

                // Mostrando de nuevo el diálogo de login
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Ingresá tu contraseña:", "Login", "Cancelar");
            }
        }
        return 1; // Manejamos un diálogo, así que hay que devolver 1. Como en OnPlayerCommandText.
    }

    return 0; // TENÉS que devolver 0 acá! Como en OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// En algún comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas", "Desert Eagle\nAK-47\nCombat Shotgun", "Seleccionar", "Cerrar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Si clickeó en 'Seleccionar' o apretó enter.
        {
            // Dándole el arma al jugador
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Dándole una Desert Eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Dándole una AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Dándole una Combat Shotgun
            }
        }
        return 1; // Manejamos un diálogo, así que hay que devolver 1. Como en OnPlayerCommandText.
    }

    return 0; // TENÉS que devolver 0 acá! Como en OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// En algún comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas",
"Arma\tMunición\tPrecio\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Seleccionar", "Cerrar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Si clickeó en seleccionar o hizo doble click en algún arma
        {
            // Dándole el arma al jugador
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Dándole una M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Dándole una MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Dándole una AK-47
            }
        }
        return 1; // Manejamos un diálogo, así que hay que devolver 1. Como en OnPlayerCommandText.
    }

    return 0; // TENÉS que devolver 0 acá! Como en OnPlayerCommandText.
}
```

## Notas

:::tip

Los parámetros pueden contener diferentes valores, según el estilo del diálogo ([click para más ejemplos](../resources/dialogstyles)).

:::

:::tip

Es apropiado usar la sentencia 'switch' para ir cambiando entre los diferentes ID's de diálogos, si tenés muchos.

:::

:::warning

El diálogo de un jugador no se oculta cuando el gamemode se reinicia, causando que el server imprima en la consola "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" en caso de que algún jugador responda a este después del reinicio.

:::

## Funciones Relacionadas

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Mostrar un diálogo a un jugador.
