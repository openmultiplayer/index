---
title: ShowPlayerDialog
description: Shows the player a synchronous (only one at a time) dialog box.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Shows the player a synchronous (only one at a time) dialog box.

| Name      | Description                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | The ID of the player to show the dialog to.                                                                                             |
| dialogid  | An ID to assign this dialog to, so responses can be processed. Max dialogid is 32767. Using negative values will close any open dialog. |
| style     | The [style](../resources/dialogstyles) of the dialog.                                                                                |
| caption[] | The title at the top of the dialog. The length of the caption can not exceed more than 64 characters before it starts to cut off.       |
| info[]    | The text to display in the main dialog. Use \n to start a new line and \t to tabulate.                                                  |
| button1[] | The text on the left button.                                                                                                            |
| button2[] | The text on the right button. Leave it blank ( "" ) to hide it.                                                                         |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
// Define the dialog IDs either with an enum:
enum
{
    DIALOG_NULL,
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// Alternatively, using macros:
#define DIALOG_NULL 0
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

// Enums are recommended, as you don't have to keep track of used IDs. However, enums use memory to store the defines, whereas defines are processed in the 'pre-processor' (compiling) stage.

// Example for DIALOG_STYLE_MSGBOX:
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "You are connected to the server", "Close", "");

// Example for DIALOG_STYLE_INPUT:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

// Example for DIALOG_STYLE_LIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\nM4\nSniper Rifle", "Option 1", "Option 2");

// Example for DIALOG_STYLE_PASSWORD:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Enter your password below:", "Login", "Cancel");

// Example for DIALOG_STYLE_TABLIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");

// Example for DIALOG_STYLE_TABLIST_HEADERS:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\tPrice\tAmmo\nDeagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");
```

## Notes

:::tip

It is recommended to use enumerations (see above) or definitions (#define) to determine which IDs dialogs have, to avoid confusion in the future. You should never use literal numbers for IDs - it gets confusing.

:::

:::tip

Use color embedding for multiple colors in the text. Using -1 as dialogid closes all dialogs currently shown on the client's screen.

:::

## Related Functions

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [OnDialogResponse](../callbacks/OnDialogResponse): Called when a player responds to a dialog.
