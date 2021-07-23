---
title: strmid
description: Extract a range of characters from a string.
tags: ["string"]
---

<LowercaseNote />

## Description

Extract a range of characters from a string.

| Name                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| dest[]                | The string to store the extracted characters in.                     |
| const source[]        | The string from which to extract characters.                         |
| start                 | The position of the first character.                                 |
| end                   | The position of the last character.                                  |
| maxlength=sizeof dest | The length of the destination. (Will be the size of dest by default) |

## Returns

The number of characters stored in dest[]

## Examples

```c
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); //string contains "HELLO"
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
- [strdel](strdel): Delete part of a string.
