---
title: Player States
description: A list of all the player states to be used with the [GetPlayerState](../functions/GetPlayerState) function or [OnPlayerStateChange](../callbacks/OnPlayerStateChange) callback.
tags: ["player"]
sidebar_label: Player States
---

This page compiles the list of all the player states to be used with the [GetPlayerState](../functions/GetPlayerState) function or [OnPlayerStateChange](../callbacks/OnPlayerStateChange) callback. Both pages contain examples on how to use the values below.

## States

| ID  | Macro                                | Description                          |
| --- | ------------------------------------ | ------------------------------------ |
| 0   | PLAYER_STATE_NONE                    | Empty (while initializing)           |
| 1   | PLAYER_STATE_ONFOOT                  | Player is on foot                    |
| 2   | PLAYER_STATE_DRIVER                  | Player is the driver of a vehicle    |
| 3   | PLAYER_STATE_PASSENGER               | Player is passenger of a vehicle     |
| 4   | PLAYER_STATE_EXIT_VEHICLE            | Player exits a vehicle               |
| 5   | PLAYER_STATE_ENTER_VEHICLE_DRIVER    | Player enters a vehicle as driver    |
| 6   | PLAYER_STATE_ENTER_VEHICLE_PASSENGER | Player enters a vehicle as passenger |
| 7   | PLAYER_STATE_WASTED                  | Player is dead or on class selection |
| 8   | PLAYER_STATE_SPAWNED                 | Player is spawned                    |
| 9   | PLAYER_STATE_SPECTATING              | Player is spectating                 |
