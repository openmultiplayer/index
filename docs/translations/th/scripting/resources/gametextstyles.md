---
title: GameText Styles
description: GameText Styles to be used in textdraws and gametext
---

To be used with [GameText](../functions/GameTextForPlayer).

## Text Colors

- `~n~` New line

- `~r~` Red

- `~g~` Green

- `~b~` Blue

- `~w~` or ~s~ White

- `~y~` Yellow

- `~p~` Purple

- `~l~` Black (lower case L)

- `~h~` Turn text color lighter (used too much will make your text white, doesn't work on black)

## Special Text Letters

- `~u~` up arrow (gray)

- `~d~` down arrow (gray)

- `~<~` left arrow (gray)

- `~>~` right arrow (gray)

- `]` displays a \* symbol (Only in text styles 3, 4 and 5)

- `~k~` keyboard key mapping (e.g. ~k~~VEHICLE_TURRETLEFT~ and ~k~~PED_FIREWEAPON~). Look here for a list of keys

:::caution

Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the ~ character. Example: `~`~r~Hello, ~g~how are ~y~`~`you?`~`

:::


## Text Styles

| Style   | Preview                                | Description                                                                                                                                                        |
| ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Style 0 | ![](/images/gameTextStyles/style0.png) | Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen.  Fixed in fixes.inc.                                                                |
| Style 1 | ![](/images/gameTextStyles/style1.png) | Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends.  Fixed in fixes.inc. |
| Style 2 | ![](/images/gameTextStyles/style2.png) | N/A                                                                                                                                                                |
| Style 3 | ![](/images/gameTextStyles/style3.png) | N/A                                                                                                                                                                |
| Style 4 | ![](/images/gameTextStyles/style4.png) | N/A                                                                                                                                                                |
| Style 5 | ![](/images/gameTextStyles/style5.png) | Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed'.  Fixed in fixes.inc.                                                               |
| Style 6 | ![](/images/gameTextStyles/style6.png) | N/A                                                                                                                                                                |
| Style 7 | ![](/images/gameTextStyles/style7.png) | Based on SA vehicle names.  Added by fixes.inc                                                                                                                                                               |
| Style 8 | ![](/images/gameTextStyles/style8.png) | Based on SA location names.  Added by fixes.inc                                                                                                                                                               |
| Style 9 | ![](/images/gameTextStyles/style9.png) | Based on SA radio station names (once selected).  Added by fixes.inc                                                                                                                                                               |
| Style 10 | ![](/images/gameTextStyles/style10.png) | Based on SA radio station names (while switching).  Added by fixes.inc                                                                                                                                                               |
| Style 11 | ![](/images/gameTextStyles/style11.png) | Based on SA positive money.  Added by fixes.inc                                                                                                                                                               |
| Style 12 | ![](/images/gameTextStyles/style12.png) | Based on SA negative money.  Added by fixes.inc                                                                                                                                                               |
| Style 13 | ![](/images/gameTextStyles/style13.png) | Based on SA stunt bonuses.  Added by fixes.inc                                                                                                                                                               |
| Style 14 | ![](/images/gameTextStyles/style14.png) | Based on SA in-game clock.  Added by fixes.inc                                                                                                                                                               |
| Style 15 | ![](/images/gameTextStyles/style15.png) | Based on SA notification popup.  Added by fixes.inc                                                                                                                                                               |
