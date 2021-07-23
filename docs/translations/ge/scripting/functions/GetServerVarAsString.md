---
title: GetServerVarAsString
description: Get the string value of a server variable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsString

:::

## Description

Get the string value of a server variable.

| Name            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| const varname[] | The name of the string variable to get the value of.         |
| buffer[]        | An array into which to store the value, passed by reference. |
| len             | The length of the string that should be stored.              |

## Returns

The length of the returned string. 0 if the specified server variable is not a string or doesn't exist.

## Examples

```c
public OnGameModeInit()
{
    new hostname[64];
    GetServerVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## Notes

:::tip

When filterscripts or plugins is specified as the varname, this function only returns the name of the first specified filterscript or plugin. This is a bug.

:::

:::tip

Type 'varlist' in the server console to display a list of available server variables and their types.

:::

:::warning

Using this function on anything other than a string (int, bool or float) or a nonexistent server variable, will crash your server! This is a bug.

:::

## Related Functions

- [GetServerVarAsInt](GetServerVarAsInt): Retreive a server variable as an integer.
- [GetServerVarAsBool](GetServerVarAsBool): Retreive a server variable as a boolean.
