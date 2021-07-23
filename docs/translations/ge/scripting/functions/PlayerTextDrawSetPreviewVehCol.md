---
title: PlayerTextDrawSetPreviewVehCol
description: Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='SA-MP 0.3x' />

## Description

Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to change. |
| text     | The ID of the player's player-textdraw to change.     |
| color1   | The color to set the vehicle's primary color to.      |
| color2   | The color to set the vehicle's secondary color to.    |

## Returns

This function does not return any specific values.

## Notes

:::warning

The textdraw MUST use the font TEXT_DRAW_FONT_MODEL_PREVIEW and be showing a vehicle in order for this function to have effect.

:::

## Related Functions

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
