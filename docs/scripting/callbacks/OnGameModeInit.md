---
title: OnGameModeInit
description: This callback is triggered when the gamemode starts.
tags: []
---

## Description

This callback is triggered when the gamemode starts.

## Examples

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notes

:::tip

This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.

:::

## Related Callbacks

- [OnGameModeExit](OnGameModeExit): Called when a gamemode ends.
- [OnFilterScriptInit](OnFilterScriptInit): Called when a filterscript is loaded.
- [OnFilterSciptExit](OnFilterScriptExit): Called when a filterscript is unloaded.
