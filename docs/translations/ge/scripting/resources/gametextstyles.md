---
title: GameText Styles
description: GameText Styles to be used in textdraws and gametext
---

To be used with [GameText](../functions/GameTextForPlayer) and [GameTextForAll](../functions/GameTextForAll).

## Text Colors

| Prefix     | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| ~n~        | New line                                                                                 |
| ~r~        | Red                                                                                      |
| ~g~        | Green                                                                                    |
| ~b~        | Blue                                                                                     |
| ~w~ or ~s~ | White                                                                                    |
| ~y~        | Yellow                                                                                   |
| ~p~        | Purple                                                                                   |
| ~l~        | Black (lower case L)                                                                     |
| ~h~        | Turn text color lighter (used too much will make your text white, doesn't work on black) |

## Special Text Letters

| Prefix | Description                                                                                                                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ~u~    | Up arrow (gray)                                                                                                                     |
| ~d~    | Down arrow (gray)                                                                                                                   |
| ~\<~   | Left arrow (gray)                                                                                                                   |
| ~>~    | Right arrow (gray)                                                                                                                  |
| ]      | Displays a \* symbol (Only in text styles 3, 4 and 5)                                                                               |
| ~k~    | Keyboard key mapping (e.g. ~k\~~VEHICLE_TURRETLEFT~ and ~k\~~PED_FIREWEAPON~). Look [here](../resources/keys) for a list of keys |

:::caution

Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the ~ character. Example: `~`~r~Hello, ~g~how are ~y~`~`you?`~`

:::

## Text Styles

| Style   | Preview                                | Description                                                                                                                                                        |
| ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Style 0 | ![](/images/gameTextStyles/style0.png) | Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen.                                                                |
| Style 1 | ![](/images/gameTextStyles/style1.png) | Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends. |
| Style 2 | ![](/images/gameTextStyles/style2.png) | N/A                                                                                                                                                                |
| Style 3 | ![](/images/gameTextStyles/style3.png) | N/A                                                                                                                                                                |
| Style 4 | ![](/images/gameTextStyles/style4.png) | N/A                                                                                                                                                                |
| Style 5 | ![](/images/gameTextStyles/style5.png) | Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed'.                                                               |
| Style 6 | ![](/images/gameTextStyles/style6.png) | N/A                                                                                                                                                                |
