---
title: OnFilterScriptInit
description: This callback is called when a filterscript is initialized (loaded).
tags: []
---

## Description

This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.

## Examples

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Callbacks

- [OnFilterSciptExit](OnFilterScriptExit): Called when a filterscript is unloaded.
- [OnGameModeInit](OnGameModeInit): Called when a gamemode starts.
- [OnGameModeExit](OnGameModeExit): Called when a gamemode ends.
