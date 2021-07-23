---
title: CancelEdit
description: Cancel object edition mode for a player.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Cancel object edition mode for a player

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to cancel edition for |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SelectObject](SelectObject): Select an object.
- [EditObject](EditObject): Edit an object.
- [EditPlayerObject](EditPlayerObject): Edit an object.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [MoveObject](MoveObject): Move an object.
