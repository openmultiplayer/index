---
title: Create3DTextLabel
description: Creates a 3D Text Label at a specific location in the world.
tags: ["3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Creates a 3D Text Label at a specific location in the world

| Name         | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| text[]       | The initial text string.                                              |
| color        | The text Color, as an integer or hex in RGBA color format             |
| x            | X-Coordinate                                                          |
| y            | Y-Coordinate                                                          |
| z            | Z-Coordinate                                                          |
| DrawDistance | The distance from where you are able to see the 3D Text Label         |
| VirtualWorld | The virtual world in which you are able to see the 3D Text            |
| testLOS      | 0/1 Test the line-of-sight so this text can't be seen through objects |

## Returns

The ID of the newly created 3D Text Label, or INVALID_3DTEXT_ID if the 3D Text Label limit (MAX_3DTEXT_GLOBAL) was reached.

## Examples

```c
public OnGameModeInit()
{
    Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, 0);
    return 1;
}
```

## Notes

:::tip

drawdistance seems to be a lot smaller when spectating.

:::

:::tip

Use color embedding for multiple colors in the text.

:::

:::warning

If text[] is empty, the server/clients next to the text might crash! If the virtualworld is set as -1 the text will not appear.

:::

## Related Functions

- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
