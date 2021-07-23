---
title: strval
description: Convert a string to an integer.
tags: ["string"]
---

<LowercaseNote />

## Description

Convert a string to an integer.

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| const string[] | The string you want to convert to an integer. |

## Returns

The integer value of the string. '0 if the string is not numeric.

## Examples

```c
new string[4] = "250";
new iValue = strval(string); // iValue is now '250'
```

## Related Functions

- [strcmp](strcmp): Compare two strings to see if they are the same.
- [strfind](strfind): Search for a substring in a string.
- [strdel](strdel): Delete part/all of a string.
- [strins](strins): Put a string into another string.
- [strlen](strlen): Check the length of a string.
- [strmid](strmid): Extract characters from a string.
- [strpack](strpack): Pack a string into a destination.
- [strcat](strcat): Concatenate two strings into a destination reference.
