---
title: Special Actions
description: A list of all the player special actions to be used with the [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction) function.
tags: ["player"]
sidebar_label: Special Actions
---

This page compiles the list of all the player special actions to be used with the [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction) function. Both pages contain examples on how to use the values below.

## Special Actions

:::warning Special Actions marked with \* can't be set :::

| ID  | Action                          | Description                                     |
| --- | ------------------------------- | ----------------------------------------------- |
| 0   | SPECIAL_ACTION_NONE             | Clears player of special actions                |
| 2   | SPECIAL_ACTION_USEJETPACK       | Will make make the player using jetpack         |
| 5   | SPECIAL_ACTION_DANCE1           | Applies dancing animation for player            |
| 6   | SPECIAL_ACTION_DANCE2           | Applies dancing animation for player            |
| 7   | SPECIAL_ACTION_DANCE3           | Applies dancing animation for player            |
| 8   | SPECIAL_ACTION_DANCE4           | Applies dancing animation for player            |
| 10  | SPECIAL_ACTION_HANDSUP          | Will make make the player put hands up          |
| 11  | SPECIAL_ACTION_USECELLPHONE     | Will make make the player speaking on cellphone |
| 12  | SPECIAL_ACTION_SITTING \*       | Detects if the player is sitting                |
| 13  | SPECIAL_ACTION_STOPUSECELLPHONE | Makes players stop using cellphone              |

:::warning These animations are added in SA:MP 0.3 version. :::

| ID  | Action                          | Description                                                               |
| --- | ------------------------------- | ------------------------------------------------------------------------- |
| 1   | SPECIAL_ACTION_DUCK \*          | Detect if the player is crouching.                                        |
| 3   | SPECIAL_ACTION_ENTER_VEHICLE \* | Detect if the player is entering a vehicle via an animation.              |
| 4   | SPECIAL_ACTION_EXIT_VEHICLE \*  | Detect if the player is exiting a vehicle via an animation.               |
| 20  | SPECIAL_ACTION_DRINK_BEER       | Will increase the player's drunk level when used                          |
| 21  | SPECIAL_ACTION_SMOKE_CIGGY      | Will give the player a cigar.                                             |
| 22  | SPECIAL_ACTION_DRINK_WINE       | Will give the player a wine bottle to get drunk from                      |
| 23  | SPECIAL_ACTION_DRINK_SPRUNK     | Will give the player a sprunk bottle to drink from                        |
| 68  | SPECIAL_ACTION_PISSING          | Will make make the player perform the pissing animation with visible pee. |

:::warning These animations are added in SA:MP 0.3e version. :::

| ID  | Action                | Description                                                                                     |
| --- | --------------------- | ----------------------------------------------------------------------------------------------- |
| 24  | SPECIAL_ACTION_CUFFED | Will force the player in to cuffs (hands are behind their back) (**does not work on CJ skin**). |

:::warning These animations are added in SA:MP 0.3x version. :::

| ID  | Action               | Description                                                                                                                   |
| --- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 25  | SPECIAL_ACTION_CARRY | Will apply a 'carrying' animation to the player and make them unable to sprint, jump or punch (**does not work on CJ skin**). |
