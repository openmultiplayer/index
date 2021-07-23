---
title: PlayerTextDrawAlignment
description: Set the text alignment of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Set the text alignment of a player-textdraw.

| Name      | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| playerid  | The ID of the player whose player-textdraw to set the alignment of. |
| Text:text | The ID of the player-textdraw to set the alignment of.              |
| alignment | 1-left 2-centered 3-right                                           |

## Returns

Note

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

## Examples

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], 2); // Align the textdraw in the center
    return 1;
}
```

## Notes

:::tip

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
