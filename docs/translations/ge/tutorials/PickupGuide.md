---
title: Pickup Guide
---

A short tutorial that describes how to use pickups.

## Define the pickupid

The first thing to be done when creating pickups is creating a place to store their ID. This will be done in a global variable so it can be set when you create the pickup and read when you pick up a pickup, calling a callback with the ID of the pickup you picked up. For this example we will use the name "gMyPickup".

```c
new gMyPickup;
```

## Creating the pickup

There are two ways to create pickups. [CreatePickup](../scripting/functions/CreatePickup) and [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup doesn't return an ID when it is created, can't be destroyed and can only be used under OnGameModeInit, so for this example we will use [CreatePickup](../scripting/functions/CreatePickup).

**The syntax for [CreatePickup](../scripting/functions/CreatePickup) is:**

**Parameters:**

| model        | The model you'd like to use for the pickup.                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| type         | The pickup spawn type, see further down this page.                                                        |
| Float:X      | The X-coordinate for the pickup to show.                                                                  |
| Float:Y      | The Y-coordinate for the pickup to show.                                                                  |
| Float:Z      | The Z-coordinate for the pickup to show.                                                                  |
| Virtualworld | The virtual world ID of the pickup. A value of -1 will cause the pickup to display in all virtual worlds. |

For this example we will create a cash pickup at Grove Street.

Now we need to decide on a model to appear in the world, there are lots of models to choose from, some are listed on the external site [here](https://dev.prineside.com/en/gtasa_samp_model_id), here choose model number 1274 which is dollar sign.

Finally we need a [Type](https://wiki.openmultiplayer.now.sh/docs/scripting/resources/pickuptypes) for the pickup, on the same page with the pickup models is a list of pickup types describing what the various ones do. We want this pickup to disappear when you pick it up, so you can't pick it up repeatedly, but to reappear after a few minutes so you can pick it up again, type 2 does just this.

Pickups are most commonly created when the script starts, in [OnGameModeInit](../scripting/callbacks/OnGameModeInit) or [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) depending on the script type, however it can go in any function (for example you could create a weapon drop script which would use OnPlayerDeath to create weapon pickups).

So here is the code to create our pickup, and store the ID in 'gMyPickup':

```c
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Choosing what it does

When you pick up a pickup, [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) is called, passing playerid (the player that picked up a pickup) and pickupid (the ID of the pickup that was picked up).

Some pickup types are designed to work automatically, so there is no need to do anything under OnPlayerPickUpPickup. Check out the [Pickup Types](../scripting/resources/pickuptypes) page for more information.

When a player picks up our new pickup, we want to give them $100, to do this first we need to check that they have picked up our dollar pickup and not a different one. When we've done that, we can give them the $100:

```c
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Check that the pickup ID of the pickup they picked up is gMyPickup
    if(pickupid == gMyPickup)
    {
        // Message the player
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        // Give the player the money
        GivePlayerMoney(playerid, 100);
    }
    // if you need to add more pickups, simply do this:
    else if (pickupid == (some other pickup))
    {
        // Another pickup, do something else
    }
    return 1;
}
```

Congratulations, you now know how to create and handle pickups!

## Further Reading

You can use the [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin to create unlimited pickups with [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>)
