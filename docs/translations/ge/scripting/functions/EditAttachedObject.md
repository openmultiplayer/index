---
title: EditAttachedObject
description: Enter edition mode for an attached object.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Enter edition mode for an attached object.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to enter in to edition mode |
| index    | The index (slot) of the attached object to edit  |

## Returns

1 on success and 0 on failure.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 0, 1337, 2);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditAttachedObject(playerid, 0);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your attached object on index slot 0!");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.

:::

:::warning

Players will be able to scale objects up to a very large or negative value size. Limits should be put in place using OnPlayerEditAttachedObject to abort the edit or clip the scale values.

:::

## Related Functions

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
- [EditObject](EditObject): Edit an object.
- [EditPlayerObject](EditPlayerObject): Edit an object.
- [SelectObject](SelectObject): Select an object.
- [CancelEdit](CancelEdit): Cancel the edition of an object.
- [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject): Called when a player finishes editing an attached object.
