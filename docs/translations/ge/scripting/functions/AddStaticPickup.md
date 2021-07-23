---
title: AddStaticPickup
description: This function adds a 'static' pickup to the game.
tags: []
---

## Description

This function adds a 'static' pickup to the game. These pickups support weapons, health, armor etc., with the ability to function without scripting them (weapons/health/armor will be given automatically).

| Name                                | Description                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | The model of the pickup.                                                            |
| [type](../resources/pickuptypes) | The pickup type. Determines how the pickup responds when picked up.                 |
| Float:X                             | The X coordinate to create the pickup at.                                           |
| Float:Y                             | The Y coordinate to create the pickup at.                                           |
| Float:Z                             | The Z coordinate to create the pickup at.                                           |
| virtualworld                        | The virtual world ID to put tht pickup in. Use -1 to show the pickup in all worlds. |

## Returns

1 if the pickup is successfully created.

0 if failed to create.

## Examples

```c
public OnGameModeInit()
{
    // Create a pickup for armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Create a pickup for some health, right next to the armour
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Notes

:::tip

This function doesn't return a pickup ID that you can use in, for example, OnPlayerPickUpPickup. Use CreatePickup if you'd like to assign IDs.

:::

## Related Functions

- [CreatePickup](CreatePickup): Create a pickup.
- [DestroyPickup](DestroyPickup): Destroy a pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
