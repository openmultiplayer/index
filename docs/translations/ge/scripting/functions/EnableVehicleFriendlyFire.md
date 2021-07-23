---
title: EnableVehicleFriendlyFire
description: Enable friendly fire for team vehicles.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3x' />

## Description

Enable friendly fire for team vehicles. Players will be unable to damage teammates' vehicles (SetPlayerTeam must be used!).

## Examples

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Related Functions

- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
