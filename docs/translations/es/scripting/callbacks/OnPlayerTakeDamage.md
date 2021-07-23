---
título: OnPlayerTakeDamage
descripción: Este callback se llama cuando un jugador sufre daño.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3d' />

## Descripción

Este callback se llama cuando un jugador sufre daño.

| Nombre   | Descripción                                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid | El ID del jugador que sufrió daño.                                                                                      |
| issuerid | El ID del jugador que causó el daño. O INVALID_PLAYER_ID si fue él mismo.                                               |
| amount   | La cantidad de daño que sufrió el jugador (salud y chaleco combinados).                                                 |
| weaponid | El ID del arma/origen del daño.                                                                                         |
| bodypart | La parte del cuerpo del impacto. (NOTA: Este parámetro se añadió en 0.3z, sacar en caso de usar versiones anteriores!). |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Si no fue causado por él mismo
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s le hizo %.0f de daño a %s, arma: %s, parte del cuerpo: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Un disparo en la cabeza con sniper matará instantáneamente al jugador
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notas

:::tip

El 'weaponid' va a retornar 37 (lanzallamas) de cualquier origen de fuego (ej. molotov, 18), 'weaponid' retornará 51 ante cualquier arma que cree una explosión (ej. lanzamisiles, granada). playerid es el único que puede llamar este callback. La cantidad de daño es siempre el daño máximo que el weaponid puede hacer, incluso cuando la vida restante es menor que el daño máximo de esta. Entonces cuando un jugador tiene 100.0 de salud y recibe un tiro con una Desert Eagle que tiene un valor de daño de 46.2, tomará 3 disparos para matar a ese jugador. Los 3 disparos mostrarán una cantidad de daño de 46.2 sin importar que cuando el último disparo impacta, el jugador tiene sólo 7.6 de salud restante. 

:::

:::warning

GetPlayerHealth y GetPlayerArmour retornará los valores antiguos antes de este callback. Siempre comprobar si 'issuerid' es válido antes de usarlo en un array.

:::

## Funciones Relacionadas
