---
title: GetSVarString
description: Gets a string server variable's value.
tags: []
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## Description

Gets a string server variable's value.

| Name          | Description                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| varname       | The name of the server variable (case-insensitive). Assigned in SetSVarString. |
| string_return | The array in which to store the string value in, passed by reference.          |
| len           | The maximum length of the returned string.                                     |

## Returns

The length of the string.

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
- [SetSVarString](SetSVarString): Set a string for a server variable.
- [SetSVarFloat](SetSVarFloat): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar): Delete a server variable.
