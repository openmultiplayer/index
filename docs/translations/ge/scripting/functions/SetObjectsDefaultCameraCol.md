---
title: SetObjectsDefaultCameraCol
description: Allows camera collisions with newly created objects to be disabled by default.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Allows camera collisions with newly created objects to be disabled by default.

| Name    | Description                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------- |
| disable | 1 to disable camera collisions for newly created objects and 0 to enable them (enabled by default). |

## Returns

Note

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

## Examples

```c
public OnGameModeInit()
{
    // Disable camera collision
    SetObjectsDefaultCameraCol(1);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects will NOT have camera collisions

    // Re-enable camera collisions
    SetObjectsDefaultCameraCol(0);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects WILL have camera collision

    // BUT, the first set will still NOT have camera collisions

    return 1;
}
```

## Notes

:::tip

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

:::

:::warning

This function ONLY works outside the normal SA map boundaries (past 3000 units).

:::

## Related Functions

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Disables collisions between camera and object.
- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): Disables collisions between camera and player object.
