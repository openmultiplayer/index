---
title: PlayerTextDrawLetterSize
description: Sets the width and height of the letters in a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Sets the width and height of the letters in a player-textdraw.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the letter size of |
| text     | The ID of the player-textdraw to change the letter size of           |
| Float:x  | Width of a char.                                                     |
| Float:y  | Height of a char.                                                    |

## Returns

This function does not return any specific values.

## Examples

```c
gMyTextDraw[playerid] = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Example TextDraw");
PlayerTextDrawLetterSize(playerid, gMyTextDraw[playerid], 3.2 ,5.1);
```

## Notes

:::tip

When using this function purely for the benefit of affecting the textdraw box, multiply 'Y' by 0.135 to convert to TextDrawTextSize-like measurements

:::

:::tip

Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2).

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
