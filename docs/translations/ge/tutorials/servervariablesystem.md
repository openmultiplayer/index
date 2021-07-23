---
title: Server variable system

description: The server variable system (put short, SVar) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.
---

The **server variable system** (put short, **SVar**) is a new way of creating global server variables efficient and dynamically, meaning that they can be used in server's gamemode and filterscripts at the same time.

They are similar to [PVars](perplayervariablesystem), but are not tied to a player ID.

:::warning

This system was introduced in SA-MP 0.3.7 R2-1 and will not work in earlier versions!

:::

:::note

The SVar system is the same as the PVars, although the variables created are server-wide, not attached to any player ID, and persist through gamemode changes.

:::

## Advantages

- SVars can be shared/accessed across gamemode scripts and filterscripts.

- You can easily enumerate and print/store the SVar list. This makes debugging easier.

- Even if a SVar hasn't been created, it still will return a default value of 0.

- SVars can hold very large strings using dynamically allocated memory.

- You can Set, Get, Create SVars ingame.

## Drawbacks

- SVars are several times slower than regular variables. It is generally more favorable to trade in memory for speed, rather than the other way round.

## Related Functions

- [SetSVarInt](../scripting/functions/SetSVarInt): set an integer for a server variable.
- [GetSVarInt](../scripting/functions/GetSVarInt): get a player server as an integer.
- [SetSVarString](../scripting/functions/SetSVarString): set a string for a server variable.
- [GetSVarString](../scripting/functions/GetSVarString): get the previously set string from a server variable.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): set a float for a server variable.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): get the previously set float from a server variable
- [DeleteSVar](../scripting/functions/DeleteSVar): delete a server variable.
