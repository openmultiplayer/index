---
title: PlayerTextDrawSetShadow
description: Adds a shadow to the bottom-right side of the text in a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Adds a shadow to the bottom-right side of the text in a player-textdraw. The shadow font matches the text font.

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the shadow size of. |
| text     | The ID of the player-textdraw to change the shadow of                 |
| size     | The size of the shadow. 0 will hide the shadow.                       |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player-textdraw doesn't exist.

## Examples

```c
new Text:MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Example Text");
PlayerTextDrawSetShadow(playerid, MyTextDraw, 1);
```

## Notes

:::tip

The shadow can be cut by the box area if the size is set too big for the area.

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
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
