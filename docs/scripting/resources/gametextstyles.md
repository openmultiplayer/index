---
title: GameText Styles
description: GameText Styles to be used in textdraws and gametext
---

To be used with [GameText](../functions/GameTextForPlayer) and [GameTextForAll](../functions/GameTextForAll).

## Text Colors
| Code                      | Colour | Description |
| ----------                | ------ | ----- |
| N/A                       | ![](/images/gameTextStyles/-.png) | Default colour, has no code.           |
| ~h~                       | ![](/images/gameTextStyles/h.png) | Lighter version of the default colour. |
| ~h~~h~                    | ![](/images/gameTextStyles/hh.png) | Lighter version of the default colour. |
| ~r~                       | ![](/images/gameTextStyles/r.png) | Has five levels of lightening.         |
| ~r~~h~                    | ![](/images/gameTextStyles/rh.png) | |
| ~r~~h~~h~                 | ![](/images/gameTextStyles/rhh.png) | |
| ~r~~h~~h~~h~              | ![](/images/gameTextStyles/rhhh.png) | |
| ~r~~h~~h~~h~~h~           | ![](/images/gameTextStyles/rhhhh.png) | |
| ~r~~h~~h~~h~~h~~h~        | ![](/images/gameTextStyles/rhhhhh.png) | |
| ~g~                       | ![](/images/gameTextStyles/g.png) | Has four levels of lightening. |
| ~g~~h~                    | ![](/images/gameTextStyles/gh.png) | |
| ~g~~h~~h~                 | ![](/images/gameTextStyles/ghh.png) | |
| ~g~~h~~h~~h~              | ![](/images/gameTextStyles/ghhh.png) | |
| ~g~~h~~h~~h~~h~           | ![](/images/gameTextStyles/ghhhh.png) | Same as `~y~~h~~h~`. |
| ~b~                       | ![](/images/gameTextStyles/b.png) | Has three levels of lightening. |
| ~b~~h~                    | ![](/images/gameTextStyles/bh.png) | |
| ~b~~h~~h~                 | ![](/images/gameTextStyles/bhh.png) | |
| ~b~~h~~h~~h~              | ![](/images/gameTextStyles/bhhh.png) | |
| ~p~                       | ![](/images/gameTextStyles/p.png) | Has two levels of lightening. |
| ~p~~h~                    | ![](/images/gameTextStyles/ph.png) | |
| ~p~~h~~h~                 | ![](/images/gameTextStyles/phh.png) | |
| ~y~                       | ![](/images/gameTextStyles/y.png) | Has two levels of lightening. |
| ~y~~h~                    | ![](/images/gameTextStyles/yh.png) | |
| ~y~~h~~h~                 | ![](/images/gameTextStyles/yhh.png) | Same as `~g~~h~~h~~h~~h~`. |
| ~l~                       | ![](/images/gameTextStyles/l.png) | Lower case "L".  Can't be lightened. |
| ~w~                       | ![](/images/gameTextStyles/w.png) | Has one level of lightening. |
| ~w~~h~                    | ![](/images/gameTextStyles/wh.png) | All colours become this when lightened too much. |

## Special Text Letters

| Code | Description                                                                                                                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ~n~    | New line                                                                                                                            |
| ~h~    | Turn selected colours lighter.  Text can appear between the main colour and the lightening, for example `~r~Hello ~h~world` will make "Hello" red and "world" slightly lighter red. |
| ~u~    | Up arrow (gray)                                                                                                                     |
| ~d~    | Down arrow (gray)                                                                                                                   |
| ~\<~   | Left arrow (gray)                                                                                                                   |
| ~>~    | Right arrow (gray)                                                                                                                  |
| ]      | Displays a \* symbol (Only in text styles 3, 4 and 5)                                                                               |
| ~k~    | Keyboard key mapping (e.g. ~k\~~VEHICLE_TURRETLEFT~ and ~k\~~PED_FIREWEAPON~). Look [here](../resources/keys) for a list of keys    |

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
