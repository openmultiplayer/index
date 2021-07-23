---
title: Per-player variable system
description: The per-player variable system (put short, PVar) is a new way of creating player variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.
---

The per-player variable system (put short, PVar) is a new way of creating player variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.

They are similar to [SVars](servervariablesystem), but are on a per-player basis. See the last 2 posts in this thread to read about the difference between pawn properties and PVars.

## Advantages

The new system introduced in SA-MP 0.3a R5 server updated has several major advantages over creating an array sized MAX_PLAYERS.

- PVars can be shared/accessed across gamemode scripts and filterscripts, making it easier to modularize your code.

- PVars are automatically deleted when a player leaves the server (after OnPlayerDisconnect), meaning you don't have to manually reset variables for the next player who joins.

- No real need for complex enums/player info structures.

- Saves memory by not allocating pawn array elements for playerids which will probably never be used.

- You can easily enumerate and print/store the PVar list. This makes both debugging and player info storage easier.

- Even if a PVar hasn't been created, it still will return a default value of 0.

- PVars can hold very large strings using dynamically allocated memory.

- You can Set, Get, Create PVars ingame.

## Drawbacks

- PVars are several times slower than regular variables. It is generally more favorable to trade in memory for speed, rather than the other way round.

## Functions

The functions for setting and retrieving the player variables are:

- [SetPVarInt](../scripting/functions/SetPVarInt) Set an integer for a player variable.
- [GetPVarInt](../scripting/functions/GetPVarInt) Get the previously set integer from a player variable.
- [SetPVarString](../scripting/functions/SetPVarString) Set a string for a player variable.
- [GetPVarString](../scripting/functions/GetPVarString) Get the previously set string from a player variable.
- [SetPVarFloat](../scripting/functions/SetPVarFloat) Set a float for a player variable.
- [GetPVarFloat](../scripting/functions/GetPVarFloat) Get the previously set float from a player variable.
- [DeletePVar](../scripting/functions/GetPVarFloat) Delete a player variable.

```c
#define PLAYER_VARTYPE_NONE   (0)
#define PLAYER_VARTYPE_INT    (1)
#define PLAYER_VARTYPE_STRING (2)
#define PLAYER_VARTYPE_FLOAT  (3)
```
