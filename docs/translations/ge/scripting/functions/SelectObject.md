---
title: SelectObject
description: Display the cursor and allow the player to select an object.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player that should be able to select the object |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [MoveObject](MoveObject): Move an object.
- [EditObject](EditObject): Edit an object.
- [EditPlayerObject](EditPlayerObject): Edit an object.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
- [CancelEdit](CancelEdit): Cancel the edition of an object.
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Called when a player selected an object.
