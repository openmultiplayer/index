---
title: strpack
description: Pack a string.
tags: ["string"]
---

<LowercaseNote />

## Description

Pack a string. Packed strings use 75% less memory.

| Name                    | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| dest[]                  | The destination string to save the packed string in, passed by reference. |
| const source[]          | The source, original string.                                              |
| maxlength=sizeof string | The maximum size to insert.                                               |

## Returns

The number of characters packed.

## Examples

```c
new string[32 char];
strpack(string, "Hi, how are you?");
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
- [strdel](strdel): Delete part of a string.
