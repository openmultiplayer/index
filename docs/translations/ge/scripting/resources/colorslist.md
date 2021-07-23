---
title: Color List
description: Colors are everywhere in SA-MP - vehicles, player names and blips, textdraws, gametext and since 0.3c in chat, 3D texts and dialogs (as color embedding)! Below you can find information about these different things.
sidebar_label: Color List
---

## Chat text and player color

Colors in SA-MP are generally represented in hexadecimal notation (though integers can be used also). A chattext or player color looks like this: 0xRRGGBBAA.

_RR_ is the red part of the color, _GG_ the green and _BB_ the blue. _AA_ is the alpha value. If FF is used there, the color will display without transparency and if 00 is used, it will be invisible.

For the Hex code for these colors, go to the [Hex colors](../resources/hex-colors) page.

### Alpha values (transparency)

The following images display the effect of transparency values used with a white quare under the player marker and left to the saving floppy icon. Increments of 0x11 (decimal 17) are used for demonstration, but of course you can use any value.

![Image:trans_matrix.png](/images/colorList/transparency/trans_matrix.png)

### Doing math

Since colors are just numbers it is possible to calculate with them, although it may not always make sense. For example, it is possible to adjust the player's radar marker visibility (see above) while keeping their current color the same, regardless of what is is.

```c
SetPlayerMarkerVisibility(playerid, alpha = 0xFF)
{
    new oldcolor, newcolor;

    alpha = clamp(alpha, 0x00, 0xFF); // if an out-of-range value is supplied we'll fix it here first
    oldcolor = GetPlayerColor(playerid); // get their color - Note: SetPlayerColor must have been used beforehand

    newcolor = (oldcolor & ~0xFF) | alpha; // first we strip of all alpha data (& ~0xFF) and then we replace it with our desired value (| alpha)
    return SetPlayerColor(playerid, newcolor); // returns 1 if it succeeded, 0 otherwise
}
```

### Convert string to value with pawn

Since the colors are just numbers you have to convert them sometimes from an input string "RRGGBBAA" to its number. This can be done using sscanf or the following function:

```c
stock HexToInt(string[])
{
    if (!string[0])
    {
        return 0;
    }

    new
        cur = 1,
        res = 0;

    for (new i = strlen(string); i > 0; i--)
    {
        res += cur * (string[i - 1] - ((string[i - 1] < 58) ? (48) : (55)));
        cur = cur * 16;
    }
    return res;
}
```

Use HexToInt("RRGGBBAA") and you'll get a usable number as result for [SetPlayerColor](../functions/SetPlayerColor).

### Color embedding

:::tip

Colors List was added in **SA-MP 0.3c** and will not work in earlier versions!

:::

It is possible to use colors within text in [client messages](../functions/SendClientMessage"), [dialogs](../functions/ShowPlayerDialog), [3D text labels](../functions/Create3DTextLabel), [object material texts](../functions/SetObjectMaterialText) and [vehicle numberplates](../functions/SetVehicleNumberPlate").

It is very similar to [gametext colors](../resources/gametextstyles), but allows any color to be used.

:::caution

This type of color embedding does not work in textdraws. See [GameTextStyle](../resources/gametextstyles).

:::

#### Example

```c
{FFFFFF}Hello this is {00FF00}green {FFFFFF}and this is {FF0000}red
```

Hello this is green and this is red

![Image:Example1.png](/images/colorList/Example1.png)

#### Another example

![Image:Cembed.png](/images/colorList/Cembed.png)  
The code for the above chat line looks like this:

```c
SendClientMessage(playerid, COLOR_WHITE, "Welcome to {00FF00}M{FFFFFF}a{FF0000}r{FFFFFF}c{00FF00}o{FFFFFF}'{FF0000}s {FFFFFF}B{00FF00}i{FFFFFF}s{FF0000}t{FFFFFF}r{00FF00}o{FFFFFF}!");
```

You can define colors to use like so:

```c
#define COLOR_RED_EMBED "{FF0000}"

SendClientMessage(playerid, -1, "This is white and "COLOR_RED_EMBED"this is red.");
```

Or

```c
#define COLOR_RED_EMBED "FF0000"

SendClientMessage(playerid, -1, "This is white and {"COLOR_RED_EMBED"}this is red.");
```

The second example would be better as is it clearer that embedding is used.

#### Using GetPlayerColor

To use a player's color as an embedded color, you must first remove the alpha value. To do this, perform a logical right shift.

```c
new msg[128];
format(msg, sizeof(msg), "{ffffff}This is white and {%06x}this is the player's color!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, 0xffffffff, msg);
```

The %x is the placeholder for hexadecimal values, the 6 ensures that the output string will always be six characters long and the 0 will pad it with zeros if it's not. Note that [GetPlayerColor](../resources/GetPlayerColor) only works properly if [SetPlayerColor](../resources/SetPlayerColor) has been used beforehand.

The colors used in color embedding are not like normal hex colors in Pawn. There is no '0x' prefix and no alpha value (last 2 digits).

### Color Pickers

- [SA-MP Colorpicker v1.1.0](http://www.gtavision.com/index.php?section=downloads&site=download&id=1974)
- [December.com](http://www.december.com/html/spec/color.html)
- [RGB Picker](http://psyclops.com/tools/rgb)
- [Adobe Kuler](https://kuler.adobe.com/create/color-wheel/)
- [Color Scheme Designer](http://colorschemedesigner.com/)

## GameText

For GameText colors you can use special tags to set the following text to a specific color.

```c
~r~    red
~g~    green
~b~    blue
~w~    white
~y~    yellow
~p~    purple
~l~    black
~h~    lighter color
```

Game text colour tags can be used to form different colours easily. The below colours are not exactly the same colour as above tags.

```c
~y~                yellow
~r~~h~             light red
~r~~h~~h~          red pink
~r~~h~~h~~h~       dark pink
~r~~h~~h~~h~~h~    light red pink
~r~~h~~h~~h~~h~~h~ pink
~g~~h~             light green
~g~~h~~h~          more light green
~g~~h~~h~~h~       sea green
~g~~h~~h~~h~~h~    offwhite
~b~~h~             blue
~b~~h~~h~          purplish blue
~b~~h~~h~~h~       light blue
~y~~h~~h~          offwhite
~p~~h~             medium pink
```

### Example

```c
~w~Hello this is ~b~blue ~w~and this is ~r~red
```

[![Image:Blueandred.png](/images/colorList/Blueandred.png)

Now these colors are pretty dark. You can make them brighter by using **~h~** after the color code:

```c
~w~Hello this is ~b~~h~blue ~w~and this is ~r~~h~red
```

[![Image:Blueandred2.png](/images/colorList/Blueandred2.png)
