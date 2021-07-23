---
title: GetConsoleVarAsString
description: Get the string value of a console variable.
tags: []
---

## Description

Get the string value of a console variable.

| Name            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| const varname[] | The name of the string variable to get the value of.         |
| buffer[]        | An array into which to store the value, passed by reference. |
| len             | The length of the string that should be stored.              |

## Returns

The length of the returned string. 0 if the specified console variable is not a string or doesn't exist.

## Examples

```c
public OnGameModeInit()
{
    new hostname[64];
    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## Notes

:::tip

When filterscripts or plugins are specified as the varname, this function only returns the name of the first specified filterscript or plugin.

:::

:::tip

Type 'varlist' in the server console to display a list of available console variables and their types.

:::

:::warning

Using this function with anything other than a string (integer, boolean or float) will cause your server to crash. Using it with a nonexistent console variable will also cause your server to crash.

:::

## Related Functions

- [GetConsoleVarAsInt](GetConsoleVarAsInt): Retreive a server variable as an integer.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Retreive a server variable as a boolean.
