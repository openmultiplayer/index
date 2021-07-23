---
title: DeletePlayer3DTextLabel
description: Destroy a 3D text label that was created using CreatePlayer3DTextLabel.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Destroy a 3D text label that was created using CreatePlayer3DTextLabel.

| Name            | Description                                         |
| --------------- | --------------------------------------------------- |
| playerid        | The ID of the player whose 3D text label to delete. |
| PlayerText3D:id | The ID of the player's 3D text label to delete.     |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the label specified doesn't exist.

## Examples

```c
new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);

// Later...
DeletePlayer3DTextLabel(playerid, labelid);
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
