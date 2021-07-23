---
title: floatstr
description: Converts a string to a float.
tags: ["string", "floating-point"]
---

<LowercaseNote />

## Description

Converts a string to a float.

| Name   | Description                         |
| ------ | ----------------------------------- |
| string | The string to convert into a float. |

## Returns

The requested float value.

## Examples

```c
new before[4] = "6.9"; // A STRING holding a FLOAT.
SetPlayerPos(playerid, 0, 0, floatstr(before));
```

## Related Functions

- [floatround](floatround): Convert a float to an integer (rounding).
- [float](float): Convert an integer to a float.
