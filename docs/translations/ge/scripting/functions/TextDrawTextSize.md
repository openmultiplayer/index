---
title: TextDrawTextSize
description: Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).
tags: ["textdraw"]
---

## Description

Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).

| Name    | Description                                                                            |
| ------- | -------------------------------------------------------------------------------------- |
| text    | The TextDraw to set the size of.                                                       |
| Float:x | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:y | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate.    |

## Returns

This function does not return any specific values.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```

## Notes

:::tip

The x and y have different meanings with different TextDrawAlignment values: 1 (left): they are the right-most corner of the box, absolute coordinates. 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box. 3 (right): the x and y are the coordinates of the left-most corner of the box

Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets). The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate). This function defines the clickable area for use with TextDrawSetSelectable, whether a box is shown or not.

:::

:::tip

If you want to change the text size of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
