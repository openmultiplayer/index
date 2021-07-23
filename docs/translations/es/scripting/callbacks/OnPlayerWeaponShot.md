---
título: OnPlayerWeaponShot
descripción: Este callback se llama cuando un jugador efectúa un disparo de un arma.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3z' />

## Descripción

Este callback se llama cuando un jugador efectúa un disparo de un arma. Solo soporta armas que usen balas. Sólo soporta drive-by por parte del pasajero (no drive-by del conductor, tampoco disparos de seasparrow / hunter).

| Nombre   | Descripción                                                                                               				    |
| -------- | -------------------------------------------------------------------------------------------------------------------------- |
| playerid | El ID del jugador que disparó un arma.                                                                    				    |
| weaponid | El ID del [arma](../resources/weaponids) que usó el jugador para disparar.                                				    |
| hittype  | El [tipo](../resources/bullethittypes) de cosa a la que impactó el disparo (nada, jugador, vehículo, o objeto de jugador). |
| hitid    | El ID del jugador, vehículo, o objeto de jugador al que el disparo impactó.                               				    |
| fX       | La coordenada X en la que golpeó el disparo.                                                             				    |
| fY       | La coordenada Y en la que golpeó el disparo.                                                                               |
| fZ       | La coordenada Z en la que golpeó el disparo.                                                            				    |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "Arma %i disparada. hittype: %i  hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Notas

:::tip

Este callback sólo se llama cuando lag compensation está activado. Si hittype es:

- BULLET_HIT_TYPE_NONE: Los parámetros fX, fY y fZ son coordenadas normales, devolverá 0.0 para coordenadas si nada fue impactado (ej. objeto lejano que la bala no puede alcanzar);
- Otros: Los parámetros fX, fY y fZ son compensaciones relativas al hitid.

:::

:::tip

GetPlayerLastShotVectors puede ser usado en este callback para obtener información vectorial más detallada de la bala.

:::

:::warning

Bugs Conocido(s): No se llama si disparaste en un vehículo como el conductor o si estás mirando hacia atrás con el apuntado activado (disparando hacia el aire). Se llama como BULLET_HIT_TYPE_VEHICLE con el hitid correcto (el vehicleid del vehículo impactado) si estás disparando a un jugador que está en un vehículo. Este no se va a llamar como BULLET_HIT_TYPE_PLAYER en absoluto. [Click acá para una posible solución] Parcialmente arreglado en SA-MP 0.3.7: Si información de armas (weapondata) falsa en eviada por un jugador malicioso, los clientes de otros jugadores pueden congelarse o crashear. Para combatir esto, comprobar si el weaponid reportado es capaz de disparar balas. 

:::

## Funciones Relacionadas

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Devuelve el vector del último disparo que efectuó el jugador.
