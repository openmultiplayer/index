---
title: strins
description: Insert a string into another string.
tags: ["string"]
---

<LowercaseNote />

## Description

Insert a string into another string.

| Name                    | Description                                |
| ----------------------- | ------------------------------------------ |
| string[]                | The string you want to insert substr in.   |
| const substr[]          | The string you want to insert into string. |
| pos                     | The position to start inserting.           |
| maxlength=sizeof string | The maximum size to insert.                |

## Returns

This function does not return any specific values.

## Examples

```c
// Add an [AFK] tag to the start of players' names
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
	strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strdel](strdel): Delete part of a string.
- [strlen](strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
