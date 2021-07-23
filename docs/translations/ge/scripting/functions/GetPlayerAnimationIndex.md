---
title: GetPlayerAnimationIndex
description: Returns the index of any running applied animations.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3b' />

## Description

Returns the index of any running applied animations.

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | ID of the player of whom you want to get the animation index of. |

## Returns

0 if there is no animation applied

## Examples

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msg[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msg, sizeof msg, "Running anim: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
    }
    return 1;
}
```

## Related Functions

- [GetAnimationName](GetAnimationName): Get the animation library/name for the index.
