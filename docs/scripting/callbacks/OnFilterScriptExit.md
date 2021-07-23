---
title: OnFilterScriptExit
description: This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.

tags: []
---

## Description

Ang callback na ito ay natatawag kapag ang filterscript ay in-unload sa server.

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

## Related Functions
