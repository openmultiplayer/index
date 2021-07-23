---
title: PlayerTextDrawSetString
description: Change the text of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Change the text of a player-textdraw.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player who's textdraw string to set |
| text     | The ID of the textdraw to change                  |
| string[] | The new string for the TextDraw                   |

## Returns

This function does not return any specific values.

## Examples

```c
new pVehicleHealthTimer[MAX_PLAYERS];
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];

public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == 2) // Entered a vehicle as driver
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, x, y, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Set a timer to update the textdraw every second
        pVehicleHealthTimer[playerid] = SetTimerEx("vhealth_td_update", 1000, true, "i", playerid);
    }
    if (oldstate == 2)
    {
        KillTimer(pVehicleHealthTD[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
}

public vhealth_td_update(playerid)
{
    new tdstring[32], Float:vHealth;
    GetVehicleHealth(GetPlayerVehicleID(playerid), vHealth);

    format(tdstring, sizeof(tdstring), "Vehicle Health: %0f", vHealth);

    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], tdstring); // <<< Update the text to show the vehicle health
    return 1;
}

/*
NOTE: This example is purely for demonstration purposes, it is not guaranteed to work in-game. It is merely to show the usage of the PlayerTextDrawSetString function.
*/
```

## Notes

:::tip

You don't have to show the TextDraw again in order to apply the changes.

:::

:::warning

There are limits to the length of textdraw strings! See Limits for more info.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
