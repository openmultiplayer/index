---
title: OnDialogResponse
description: ეს ფუნქცია გამოიძახება მას შემდეგ, რაც მოთამაშე გააკეთებს არჩევანს ფუნქცია ShowPlayerDialog-ში.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## აღწერა

ეს ფუნქცია გამოიძახება მას შემდეგ, რაც მოთამაშე გააკეთებს არჩევანს ფუნქცია ShowPlayerDialog-ში.

| დასახელება  | აღწერა                                                                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | მოთამაშის ID რომელმაც გააკეთა არჩევანი დიალოგში.                                                                                                                             |
| dialogid    | დიალოგის ID რომელიც თქვენ მითითებული გაქვთ ფუნქცია ShowPlayerDialog-ში                                                                                                      |
| response    | 1 როდესაც მარცხენა ღილაკზე დააჭირა მოთამაშემ, ხოლო 0 როდესაც მოთამაშემ დააჭირა მარჯვენა ღილაკზე.                                                                            |
| listitem    | ჩამონათვალიდან არჩეული აითამის ID (იწყება 0-დან, და გამოიყენება მხოლოდ მაშინ თუ თქვენი დიალოგი არის DIALOG_STYLE_LIST ან DIALOG_STYLE_TABLIST, სხვა შემთხვევაში listitem = -1) |
| inputtext[] | ტექსტი რომელიც შეიყვანა მოთამაშემ გრაფაში (გამოიყენება მხოლოდ მაშინ თუ თქვენი დიალოგი არის DIALOG_STYLE_INPUT)                                                                |

## Returns

ეს ფუნქცია ყოველთვის გამოიყენება პირველად ჯერ Filterscript-ებში. ამიტომ return 1 დაბლოკავს ამას.

## მაგალითები

```c
// გამოვიყენოთ ეს რათა ადვილად დავაფიქსიროთ დიალოგის ID
#define DIALOG_RULES 1


ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Serveris Wesebi", "- Aranairi Cheteroba\n- Aranairi Chatis Gaspamva\n- Pativi Vcet Administracias\n\nEtanxmebit Am Wesebs?", "Ki", "Ara");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // თუ მოთამაშემ დააჭირა Ki-ს ან Enter-ს.
        {
            SendClientMessage(playerid, COLOR_GREEN, "Madloba Radgan Etanxmebit Wesebs.");
        }
        else // დააჭირა არას ან ღილაკს ESC
        {
            Kick(playerid);
        }
        return 1; 
    }

    return 0; 
}
#define DIALOG_LOGIN 2

ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Avtorizacia", "Sheikvanet Tqveni Paroli:", "Avtorizacia", "Gatishva");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // თუ მოთამაშემ დააჭირა 'გათიშვა'-ს ან ღილაკს ESC
        {
            Kick(playerid);
        }
        else // დააჭირა 'ავტორიზაცია'-ს ან ღილაკს ENTER
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Tqven Gaiaret Avtorizacia!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "Avtorizacia Ver Moxerxda.");

                // Re-show the login dialog
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Avtorizacia", "Sheikvanet Tqveni Paroli:", "Avtorizacia", "Gatishva");
            }
        }
        return 1; 
    }

    return 0; 
}
#define DIALOG_WEAPONS 3

ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Iaragebi", "Desert Eagle\nAK-47\nCombat Shotgun", "Archeva", "Gatishva");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // თუ მოთამაშემ დააჭირა 'არჩევა'-ს ან ორჯერ დააჭირა მისთვის სასურველ იარაღს.
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // გადავცეთ მოთამაშეს იარაღი DESERT EAGLE
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // გადავცეთ მოთამაშეს იარაღი AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // გადავცეთ მოთამაშეს იარაღი Combat Shotgun
            }
        }
        return 1; 
    }

    return 0; 
}
#define DIALOG_WEAPONS 3

ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Iaragebi",
"Iaragi\tTkviebi\tFasi\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response)  // თუ მოთამაშემ დააჭირა 'არჩევა'-ს ან ორჯერ დააჭირა მისთვის სასურველ იარაღს.
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // გადავცეთ მოთამაშეს იარაღი M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // გადავცეთ მოთამაშეს იარაღი MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // გადავცეთ მოთამაშეს იარაღი AK-47
            }
        }
        return 1; 
    }

    return 0;
}
```

## Notes

:::tip

Parameters can contain different values, based on dialog's style ([click for more examples](../resources/dialogstyles)).

:::

:::tip

It is appropriate to switch through different dialogids, if you have many.

:::

:::warning

A player's dialog doesn't hide when the gamemode restarts, causing the server to print "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" if a player responded to this dialog after restart.

:::

## Related Functions

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Show a dialog to a player.
