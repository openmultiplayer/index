---
title: SetPlayerSkin
description: Set the skin of a player.
tags: ["player"]
---

## Description

Set the skin of a player. A player's skin is their character model.

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| playerid | The ID of the player to set the skin of.                 |
| skinid   | The [skin](../resources/skins) the player should use. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

Note that 'success' is reported even when skin ID is invalid (not 0-311, or 74), but the skin will be set to ID 0 (CJ).

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/fireman", true) == 0)
    {
        // Set the player's skin to ID 277, which is a fireman.
        SetPlayerSkin(playerid, 277);
        return 1;
    }
    return 0;
}

SetPlayerSkinFix(playerid, skinid)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        Float:tmpPos[4],
        vehicleid = GetPlayerVehicleID(playerid),
        seatid = GetPlayerVehicleSeat(playerid);

    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
    GetPlayerFacingAngle(playerid, tmpPos[3]);

    // If the skinid is invalid, less than 0 or more than 311 or is equal to 74 (invalid skin), then do nothing
    if (0 > skinid > 311 || skinid == 74)
    {
        return 0;
    }

    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)
    {
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // preventing any freeze - optional
        return SetPlayerSkin(playerid, skinid);
    }
    else if (IsPlayerInAnyVehicle(playerid))
    {
        new
            tmp;

        RemovePlayerFromVehicle(playerid);
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // preventing any freeze - important! because of doing animations of exiting vehicle
        tmp = SetPlayerSkin(playerid, skinid);
        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128) ? 0 : seatid);
        return tmp;
    }
    else
    {
        return SetPlayerSkin(playerid, skinid);
    }
}
```

## Notes

:::warning

Known Bug(s): If a player's skin is set when they are crouching, in a vehicle, or performing certain animations, they will become frozen or otherwise glitched. This can be fixed by using TogglePlayerControllable. Players can be detected as being crouched through GetPlayerSpecialAction (SPECIAL_ACTION_DUCK). Other players around the player may crash if he is in a vehicle or if he is entering/leaving a vehicle. Setting a player's skin when he is dead may crash players around him. Breaks sitting on bikes.

:::

## Related Functions

- [GetPlayerSkin](GetPlayerSkin): Get a player's current skin.
- [SetSpawnInfo](SetSpawnInfo): Set the spawn setting for a player.
