---
title: SetGameModeText
description: Set the name of the game mode, which appears in the server browser.
tags: []
---

## Description

Set the name of the game mode, which appears in the server browser.

| Name     | Description                   |
| -------- | ----------------------------- |
| string[] | The gamemode name to display. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```

## Related Functions
