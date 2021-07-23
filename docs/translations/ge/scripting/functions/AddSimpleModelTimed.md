---
title: AddSimpleModelTimed
description: Adds a new custom simple object model for download.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Adds a new custom simple object model for download. The model files will be stored in player's Documents\GTA San Andreas User Files\SAMP\cache under the Server IP and Port folder in a CRC-form file name.

| Name         | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | The virtual world ID to make the model available at. Use -1 for all worlds.                                                 |
| baseid       | The base object model ID to use (original object to use when download is failed).                                           |
| newid        | The new object model ID ranged from -1000 to -30000 (29000 slots) to be used later with CreateObject or CreatePlayerObject. |
| dffname      | Name of the .dff model collision file located in models server folder by default (artpath setting).                         |
| txdname      | Name of the .txd model texture file located in models server folder by default (artpath setting).                           |
| timeon       | The world game time (hour) this object will appear                                                                          |
| timeoff      | The world game time (hour) this object will disappear                                                                       |

## Returns

1: The function executed successfully.

0: The function failed to execute.

## Examples

```c
public OnGameModeInit()
{
    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18); // This wall only renders from 9:00 am to 6:00 pm
    return 1;
}
```

## Notes

:::tip

useartwork must be enabled first in server settings in order for this to work When virtualworld is set, the models will be downloaded once the player enters the specific world

:::

:::warning

There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside OnFilterScriptInit/OnGameModeInit, you run the risk that some players, who are already on the server, may not have downloaded the models.

:::

## Related Functions

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
