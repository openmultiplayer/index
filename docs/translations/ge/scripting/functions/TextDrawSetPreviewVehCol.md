---
title: TextDrawSetPreviewVehCol
description: If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.
tags: ["textdraw"]
---

<VersionWarn version='SA-MP 0.3x' />

## Description

If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.

| Name   | Description                                                        |
| ------ | ------------------------------------------------------------------ |
| text   | The textdraw id that is set to display a 3D vehicle model preview. |
| color1 | The primary Color ID to set the vehicle to.                        |
| color2 | The secondary Color ID to set the vehicle to.                      |

## Returns

This function does not return any specific values.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)
    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)

    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## Notes

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW in order for this function to have effect.

:::

## Related Functions

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Set the 3D preview model of a textdraw.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
