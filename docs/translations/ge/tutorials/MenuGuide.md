---
title: Menu Guide
---

A short tutorial that explains how to use the menu system of the game. This menu system is different to SA-MP dialogs and better reflects the traditional UI of the original game.

## Menus in SA-MP

Menus look very complicated and difficult to script for the most players, although it isn't. Here I will show you how to create a simple menu. At the end we will have created a teleport menu.

## First menu steps

First we have to create a menu. The prefix before is `Menu:` this makes the variable the correct [tag](../scripting/language/tags). There are different types for different uses such as `Float:` `bool:` `Text3D:` etc. Write the following code near the top of your script:

```c
new Menu:teleportmenu;
```

Okay, we created the variable to store the menu. Now we have to create the menu and assign the variable we created to the menu. Type this into `OnGameModeInit`:

```c
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Now a bit of an explanation about the [CreateMenu](../scripting/functions/CreateMenu) arguments.

**Parameters:**

| Parameter       | Specifies                                                        |
| --------------- | ---------------------------------------------------------------- |
| title           | The heading of the menu                                          |
| columns         | The number here defines how much columns are used (2 is maximum) |
| Float:x         | The heigth position of the menu on screen (left to right)        |
| Float:y         | The width position of the menu on screen (up and down)           |
| Float:col1width | The width of the first column                                    |
| Float:col2width | The width of the second column                                   |

## Add some menu items

Ok, now we've got the Menu, but we need some items, under which you can choose in the menu. You add them underneath the `CreateMenu` that we made earlier.

```c
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");
 
AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

The explanation for [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | The menuid of the menu where the item shall be displayed |
| ------ | -------------------------------------------------------- |
| column | The column in which the item shall be shown              |
| text   | The text of the item                                     |

## Creating the effects for the items

Okay, now that we have created a full menu with items what should happen when you choose an item? In our example we want to make a teleportmenu, so we should get teleported to the position we choose. When a player selects an item on a menu the script calls the callback [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). The best way to do it is to do it with a switch, this is like several if statements to check if a variable is worth certain values. But first we only want these effects for the menu we want so we need to create a variable that holds what menu the player is looking at, this is done with `GetPlayerMenu`:

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

Now, when somebody selects something on the menu, their menuid will be saved in `CurrentMenu`.

Now we have to check that the menu they selected on is the menu we want:

```c
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //stuff
    }
    return 1;
}
```

Now in between these brackets is where the `switch` is, this checks what item the player selected or `row` this can be done with `if` statements checking what `row` it is, but the `switch` is a much simpler way of writing it.

```c
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Grove Street");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Jizzy's Nightclub!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");
        }
    }
}
```

## Last steps

Now we need a command to show the menu. This is the easiest step. Just a comparison with `strcmp` and a `ShowMenuForPlayer`. This is done in `OnPlayerCommandText`. Or, if you have a command processor already, use that instead to call `ShowMenuForPlayer`.

```c
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

Really easy, wasn't it?

## Last words

Okay, after you read this AND understood it, try your own menu. As you could see, it isn't that difficult, but will impress the players on your server all the more. And you can script really cool effects with this. It's also very cool for general stores or supermarkets for the things you can buy. Then you can subtract some money as effect and the price is shown in another column in the menu. But now, work on your own.

You can also add [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) with `false` after `ShowPlayerMenu` and [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) with `true` at end of `OnPlayerSelectedMenuRow` so that player may not move while they are browsing menus.

I hope you learned something from this tutorial. If you have any questions, ask in the forums/discord.
