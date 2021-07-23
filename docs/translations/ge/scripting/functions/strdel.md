---
title: strdel
description: Delete part of a string.
tags: ["string"]
---

<LowercaseNote />

## Description

Delete part of a string.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| string[] | The string to delete part of.                  |
| start    | The position of the first character to delete. |
| end      | The position of the last character to delete.  |

## Returns

This function does not return any specific values.

## Examples

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // string is now "this"
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strins](strins): Insert text into a string.
- [strlen](strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
