---
title: IsPlayerAttachedObjectSlotUsed
description: Check if a player has an object attached in the specified index (slot).
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3c' />

## Description

Check if a player has an object attached in the specified index (slot).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |
| index    | The index (slot) to check.     |

## Returns

1: The specified slot is used for an attached object.

0: The specified slot is not in use for an attached object.

## Examples

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for(new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}
```

## Related Functions

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
