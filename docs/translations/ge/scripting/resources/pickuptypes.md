---
title: "Pickup Types"
---

### Available Pickup Types

:::note

Most other IDs are either undocumented or are similar to type 1 (but do not use them just because they seem similar to ID 1, they might have side-effects like ID 18 and 20).

:::

| id  | Description                                                                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | The pickup does not always display. If displayed, it can't be picked up and does not trigger OnPlayerPickUpPickup and it will stay after server shutdown.                                |
| 1   | Exists always. Disables pickup scripts such as horseshoes and oysters to allow for scripted actions ONLY. Will trigger OnPlayerPickUpPickup every few seconds.                           |
| 2   | Disappears after pickup, respawns after 30 seconds if the player is at a distance of at least 15 meters.                                                                                 |
| 3   | Disappears after pickup, respawns after death.                                                                                                                                           |
| 4   | Disappears after 15 to 20 seconds. Respawns after death.                                                                                                                                 |
| 8   | Disappears after pickup, but has no effect.                                                                                                                                              |
| 11  | Blows up a few seconds after being created (bombs?)                                                                                                                                      |
| 12  | Blows up a few seconds after being created.                                                                                                                                              |
| 13  | Invisible. Triggers checkpoint sound when picked up with a vehicle, but doesn't trigger OnPlayerPickUpPickup.                                                                            |
| 14  | Disappears after pickup, can only be picked up with a vehicle. Triggers checkpoint sound.                                                                                                |
| 15  | Same as type 2.                                                                                                                                                                          |
| 18  | Similar to type 1. Pressing Tab (KEY_ACTION) makes it disappear but the key press doesn't trigger OnPlayerPickUpPickup.                                                                  |
| 19  | Disappears after pickup, but doesn't respawn. Makes "cash pickup" sound if picked up.                                                                                                    |
| 20  | Similar to type 1. Disappears when you take a picture of it with the Camera weapon, which triggers "Snapshot # out of 0" message. Taking a picture doesn't trigger OnPlayerPickUpPickup. |
| 22  | Same as type 3.                                                                                                                                                                          |
