---
title: GetMyPos
description: Get position of the NPC
tags: ["npc"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Get the position of the NPC. 
 
| Name      | Description                                            |
| --------- | -------------------------------------------------------|
| &Float:x  | A float to save the X coordinate, passed by reference. |
| &Float:y  | A float to save the Y coordinate, passed by reference. |
| &Float:z  | A float to save the Z coordinate, passed by reference. |

## Returns

This function does not return any specific values.  

## Example

```c
new Float:x, Float:y, Float:z;
GetMyPos(x,y,z);
printf("I am currently at %f, %f, %f!",x,y,z);
```

## Related Functions

- [SetMyPos](SetMyPos): Set the NPC's current position.
