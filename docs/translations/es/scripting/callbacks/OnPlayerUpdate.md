---
título: OnPlayerUpdate
descripción: Este callback se llama cada vez que un cliente/jugador actualiza su estado con el servidor.
tags: ["player"]
---

## Descripción

Este callback se llama cada vez que un cliente/jugador actualiza su estado con el servidor. A menudo de usa para crear callbacks personalizados para detectar actualizaciones en el cliente que no son rastreadas activamente por el servidor, como las actualizaciones de salud o chaleco o jugadores cambiando de armas.

| Nombre   | Descripción                                			  |
| -------- | -------------------------------------------------------- |
| playerid | El ID del jugador que envió un paquete de actualización. |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Devuelve el arma en mano actual del jugador
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Si cambió de arma desde la última actualización
    {
        // Vamos a llamar un callback nombrado OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap); //Actualizamos la variable de arma al jugador
    }
    return 1; // Envía esta actualización a otros jugadores
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Cambiaste del arma %s a %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // La salud del jugador cambió desde la última actualización con el servidor, así que obviamente eso es lo actualizado.
        // Hagamos mas comprobaciones para ver si aumentó o disminuyó de salud, anti-health cheat? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* El aumentó su salud! Usando cheats? Escribe tus propios scripts aquí para expresar de qué manera el jugador ganó salud */
        }
        else
        {
            /* Él perdió salud! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Notes

<TipNPCCallbacksES />

:::warning

Este callback se llama, en promedio, 30 veces por segundo, por cada jugador; sólo usalo cuando sepas para que sirve (o más importante, para lo que no está pensado). La frecuencia con la que se llama este callback varía por cada jugador, dependiendo qué está haciendo el jugador. Conduciendo o disparando desencadenará muchas mas actualizaciones que estando quieto.

:::

## Funciones Relacionadas
