---
title: GetPlayerObjectModel
description: Retrieve the model ID of a player-object.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Retrieve the model ID of a player-object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to get the model of  |
| objectid | The ID of the player-object of which to retrieve the model ID |

## Returns

The model ID of the player object. If the player or object don't exist, it will return -1 or 0 if the player or object does not exist.

## Examples

```c
new objectId = CreatePlayerObject(playerid, 1234, 0, 0, 0, 0, 0, 0);
new modelId = GetPlayerObjectModel(playerid, objectId);
```

## Related Functions

- [GetObjectModel](GetObjectModel): Get the model ID of an object.
