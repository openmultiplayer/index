---
title: PlayerTextDrawBackgroundColor
description: Adjust the background color of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

## Description

Adjust the background color of a player-textdraw.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the background color of |
| text     | The ID of the player-textdraw to set the background color of              |
| color    | The color that the textdraw should be set to.                             |

## Returns

Note

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor

## Examples

```c
new PlayerText:gMyTextdraw;

public OnPlayerConnect(playerid)
{
    gMyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawUseBox(playerid, gMyTextdraw, 1);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw, 0xFFFFFFFF); // Set the background color of gMyTextdraw to white
    return 1;
}
```

## Notes

:::tip

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
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
