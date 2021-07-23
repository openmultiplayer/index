---
title: SetSVarString
description: Set a string server variable.
tags: []
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## Description

Set a string server variable.

| Name           | Description                      |
| -------------- | -------------------------------- |
| varname[]      | The name of the server variable. |
| string_value[] | The string to be set.            |

## Returns

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarString("Version", "0.3.7");
// will print version that server has
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## Related Functions

- [SetSVarInt](SetSVarInt): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
- [SetSVarFloat](SetSVarFloat): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar): Delete a server variable.
