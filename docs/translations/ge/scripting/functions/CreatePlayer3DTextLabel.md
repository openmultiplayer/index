---
title: CreatePlayer3DTextLabel
description: Creates a 3D Text Label only for a specific player.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Creates a 3D Text Label only for a specific player

| Name            | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| playerid        | The player which should see the newly created 3DText Label.                     |
| text[]          | The text to display.                                                            |
| color           | The text color                                                                  |
| x               | X Coordinate (or offset if attached)                                            |
| y               | Y Coordinate (or offset if attached)                                            |
| z               | Z Coordinate (or offset if attached)                                            |
| DrawDistance    | The distance where you are able to see the 3D Text Label                        |
| attachedplayer  | The player you want to attach the 3D Text Label to. (None: INVALID_PLAYER_ID)   |
| attachedvehicle | The vehicle you want to attach the 3D Text Label to. (None: INVALID_VEHICLE_ID) |
| testLOS         | 0/1 Test the line-of-sight so this text can't be seen through walls             |

## Returns

The ID of the newly created Player 3D Text Label, or INVALID_3DTEXT_ID if the Player 3D Text Label limit (MAX_3DTEXT_PLAYER) was reached.

## Examples

```c
if (strcmp(cmd, "/playerlabel", true) == 0)
{
    new
        PlayerText3D: playerTextId,
        Float: X, Float: Y, Float: Z;

    GetPlayerPos(playerid, X, Y, Z);
    playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);
    return 1;
}
```

## Notes

:::tip

drawdistance seems to be a lot smaller when spectating.

:::

:::warning

If text[] is empty, the server/clients next to the text might crash!

:::

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
