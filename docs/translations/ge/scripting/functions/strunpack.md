---
title: strunpack
description: This function can be used to unpack a string.
tags: ["string"]
---

<LowercaseNote />

## Description

This function can be used to unpack a string.

| Name                    | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| dest[]                  | The destination string to save the unpacked string in, passed by reference. |
| const source[]          | The source, original packed string.                                         |
| maxlength=sizeof string | The maximum size to insert.                                                 |

## Returns

The number of characters packed.

## Examples

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```

## Related Functions

- [ispacked](ispacked): Check if the given string is packed.
- [strpack](strpack): This function can be used to pack a string.
- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
- [strdel](strdel): Delete part of a string.
