---
title: SetPlayerObjectNoCameraCol
description: Toggles a player object camera collision.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Toggles a player object camera collision.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The playerID the object belongs to.      |
| objectid | The ID of the object you want to toggle. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The object specified does not exist.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```

## Notes

:::tip

This does not work inside the normal SA map boundaries.

:::

## Related Functions

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Disables collisions between camera and object.
