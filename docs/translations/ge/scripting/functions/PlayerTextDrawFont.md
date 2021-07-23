---
title: PlayerTextDrawFont
description: Change the font of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Change the font of a player-textdraw.

| Name     | Description                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to change the font of                                                                          |
| text     | The ID of the player-textdraw to change the font of                                                                                       |
| font     | There are four font styles as shown below. A font value greater than 3 does not display, and anything greater than 16 crashes the client. |

Available Fonts:

|

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gWelcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    gWelcomeText[playerid] = CreatePlayerTextDraw(playerid, 240.0, 580.0, "Welcome to my SA-MP server");
    // Set the font of player-textdraw 'gWelcomeText' to 2.
    PlayerTextDrawFont(playerid, gWelcomeText[playerid], 2);
}

public OnPlayerDisconnect(playerid)
{
    PlayerTextDrawHide(playerid, gWelcomeText[playerid]);
}
```

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
