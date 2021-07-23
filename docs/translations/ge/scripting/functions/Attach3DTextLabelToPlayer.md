---
title: Attach3DTextLabelToPlayer
description: Attach a 3D text label to a player.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Attach a 3D text label to a player.

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| Text3D:id | The ID of the 3D text label to attach. Returned by Create3DTextLabel. |
| playerid  | The ID of the player to attach the label to.                          |
| OffsetX   | The X offset from the player.                                         |
| OffsetY   | The Y offset from the player.                                         |
| OffsetZ   | The Z offset from the player.                                         |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player and/or label do not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
