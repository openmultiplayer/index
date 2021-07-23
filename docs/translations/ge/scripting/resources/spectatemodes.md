---
title: Spectate Modes
description: Spectate Modes to be used with [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) and [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) functions.
tags: []
sidebar_label: Spectate Modes
---

Spectate Modes to be used with [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) and [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) functions.

| Type                 | Effect                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPECTATE_MODE_NORMAL | Normal spectate mode (third person point of view). Camera can not be changed.                                                                               |
| SPECTATE_MODE_FIXED  | Use SetPlayerCameraPos after this to position the player's camera, and it will track the player/vehicle set with PlayerSpectatePlayer/PlayerSpectateVehicle |
| SPECTATE_MODE_SIDE   | The camera will be attached to the side of the player/vehicle (like when you're in first-person camera on a bike and you do a wheelie).                     |
