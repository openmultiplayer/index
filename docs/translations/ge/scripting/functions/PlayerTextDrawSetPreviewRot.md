---
title: PlayerTextDrawSetPreviewRot
description: Sets the rotation and zoom of a 3D model preview player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='SA-MP 0.3x' />

## Description

Sets the rotation and zoom of a 3D model preview player-textdraw.

| Name            | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| playerid        | The ID of the player whose player-textdraw to change.                                                                    |
| PlayerText:text | The ID of the player-textdraw to change.                                                                                 |
| Float:fRotX     | The X rotation value.                                                                                                    |
| Float:fRotY     | The Y rotation value.                                                                                                    |
| Float:fRotZ     | The Z rotation value.                                                                                                    |
| Float:fZoom     | The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText: gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);
    return 1;
}
```

## Notes

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW and already have a model set in order for this function to have effect.

:::

## Related Functions

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
