---
title: Textdraws
description: As the name implies, a textdraw is text that is drawn on a player's screen.
sidebar_label: Textdraws
---

## What is a Textdraw?

As the name implies, a textdraw is text that is drawn on a player's screen. Unlike [client messages](../functions/SendClientMessage) or [gametext](../functions/GameTextForPlayer) however, textdraws can be shown on a player's screen for an indefinite period of time. Textdraws can be simple text on the screen such as a website address, or complex scripted dynamic textdraws such as progress bars.

This 'textdraw editor' tool can make designing textdraws much easier.

## Global Textdraws

Global textdraws can be created, then shown to all players. There is a [limit](../resources/Limits) as to how many can be created, though. This means if you have a server with 500 players, creating more than 4 textdraws per-player is not possible. That's where **player**-textdraws come in. See further down. Here is a list of all the functions related to **global** textdraws:

- [TextDrawCreate](../functions/TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](../functions/TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](../functions/TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](../functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](../functions/TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](../functions/TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](../functions/TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](../functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](../functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](../functions/TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](../functions/TextDrawHideForAll): Hide a textdraw for all players.

## Player-textdraws

Player-textdraws are only created for one specific player. Up to 256 textdraws can be created PER-PLAYER. That's 128,000 on a server with 500 players. A little more than 2048. Player-textdraws should be used for things that are not 'static'. Do not use them to display a website address for example, but for a vehicle health indicator.

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable)).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide): Hide a player-textdraw.

## Variable Declaration

When creating a textdraw, you should always decide if the textdraw you're going to create has to be global (eg. your website address, global annoucement) or if it's going to differ per player (eg. kills, deaths, score).

### Global Textdraw

A global textdraw is the easiest to create and requires only one variable. This variable is needed to modify the textdraw and to show it to the players later on. The declaration for such a textdraw needs to be a global variable in most cases. The textdraw variable also needs to be prefixed with the _Text:_ tag and should be initialized with the value _Text:INVALID_TEXT_DRAW_. If you omit the initialization, the textdraw may conflict with others as you add more textdraws.

```c
new Text:gMyText = Text:INVALID_TEXT_DRAW;
```

### Per-Player Textdraw

A per-player textdraw is exactly the same as a regular 'global' textdraw, but only creates the textdraw for a single player. This is useful for textdraws that are unique to each player, such as a 'stats' bar showing their kills or score. This can be used to avoid going over the global-textdraw limit, as you can create 256 (as of 0.3e R2) textdraws per player. They are also easier to manage, as they automatically destroy themselves when the player disconnects.

```c
new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;
```

:::info IMPORTANT NOTE: An array is still needed for the variable, as the ID of the textdraws may differ from player to player, as other players may have more or less textdraws created than the other. :::

The function names only differ slightly, with 'TextDraw' becoming 'PlayerTextDraw', with one exception: [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw) ('TextDrawSetString' becomes 'PlayerTextDrawSetString').

## Creating the Textdraw

![Image:320px-Textdraw_map.png](/images/textdraws/320px-Textdraw_map.png)

Once you've declared a variable/array to store the ID of your textdraw(s) in, you can proceed to create the textdraw itself. For global textdraws that are always created, the code should be placed under [OnGameModeInit](../callbacks/OnGameModeInit). To create the textdraw, the function [TextDrawCreate](../functions/TextDrawCreate) must be used.

Note that this function merely creates the textdraw, other functions are used to modify it and to show it to the player(s).

**Parameters:**

TextDrawCreate(Float:x, Float:y, text[])

| Name   | Description                                  |
| ------ | -------------------------------------------- |
| x      | X coordinate at which to create the textdraw |
| y      | Y coordinate at which to create the textdraw |
| text[] | The text in the textdraw.                    |

**Return Values:**

The ID of the created textdraw

Let's proceed to create the textdraw:

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 240.0, "Hello World!");
    return 1;
}
```

We have created a textdraw in the center of the screen that says "Hello World!".

## Setting the font

There are 4 fonts available for textdraw text:

![Image:320px-Textdraw_map.png](/images/textdraws/Textdraw_font_styles.png)

| ID  | Info                                                           | Tips                                                   |
| --- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 0   | The _San Andreas_ Font.                                        | Use for header or titles, not a whole page.            |
| 1   | Clear font that includes both upper and lower case characters. | Can be used for a lot of text.                         |
| 2   | Clear font, but includes only capital letters.                 | Can be used in various instances.                      |
| 3   | _GTA font_                                                     | Retains quality when enlarged. Useful for large texts. |

As of SA-MP 0.3d, a new font (id 4) can be set. This is used in combination with the [TextDrawCreate](../functions/TextDrawCreate) and [TextDrawTextSize](../functions/TextDrawTextSize) functions to show a texture 'sprite' on the player's screen. We'll cover this later.

## Showing the textdraw

For this example, the textdraw has been created globally under OnGameModeInit and will be shown to player when they join the server.

To show a textdraw for a single player, the function [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer) is used.

**Parameters:**

TextDrawShowForPlayer(playerid, Text:text)

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player to show the textdraw for |
| text     | The ID of the textdraw to show                |

**Return Values:**

This function does not return any specific values.

The playerid is passed through OnPlayerConnect, and the text-draw ID is stored in the 'gMyText' variable.

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 320.0, "Hello World!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyText);
    return 1;
}
```

## Assorted Tips

- Try to use whole number when specifying positions, this ensures the best compatibility on different resolutions.
- Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x = 0.5 then y should be 2).
