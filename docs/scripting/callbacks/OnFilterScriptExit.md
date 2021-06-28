---
title: OnFilterScriptExit
description: This callback is called when a filterscript is unloaded.
tags: []
---

## Description

This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.

## Examples

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Callbacks

- [OnFilterScriptInit](OnFilterScriptInit): Called when a filterscript is loaded.
- [OnGameModeInit](OnGameModeInit): Called when a gamemode starts.
- [OnGameModeExit](OnGameModeExit): Called when a gamemode ends.
