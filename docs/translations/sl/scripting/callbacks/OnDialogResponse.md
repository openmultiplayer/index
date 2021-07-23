---
title: OnDialogResponse
description: Ta "callback" se pokliče, ko se predvajalnik odzove na pogovorno okno, imenovano "ShowPlayerDialog", s klikom na gumb, s pritiskom na tipko ENTER / ESC ali z dvoklikom na element seznama (če uporabljate pogovorno okno sloga "seznam").
tags: []
---

:::warning

Ta funkcijo je bila dodana SA-MP 0.3a in v spodnjih različicah ne deluje!

:::

## Opis

Ta "callback" se pokliče, ko se predvajalnik odzove na pogovorno okno s funkcijo "ShowPlayerDialog" s klikom na gumb, s pritiskom na tipko ENTER/ESC ali z dvojnim klikom na element seznama (če uporabljate pogovorno okno sloga seznama).

| Ime         | Opis                                                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID igralca, ki se je odzval na dialog.                                                                                                 |
| dialogid    | ID pogovornega okna, na katerega se je predvajalnik odzval, dodeljena iz "ShowPlayerDialog".                                           |
| response    | 1 za levi in ​​0 za desni gumb (če je prikazan samo en gumb, vedno 1).                                                                   |
| listitem    | ID seznama elementa, ki ga je izbrala naprava (začne se pri 0) (samo če uporabljate pogovorno okno za slog seznama, sicer bo -1).      |
| inputtext[] | Besedilo vneseno v "input box" s strani igralca ali besedilo izbranega elementa seznama.                                               |

## Returns

Vedno je bila povabljena prva v "filterscript" torej vrnite 1 tam blokira ostale "filterscript" da glej jo.

## Primeri

```c
// Določimo ID pogovornega okna, da lahko upravljamo odzive
#define DIALOG_RULES 1

// V ukazu pokažemo ta dialog
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Pravila strežnika ", "- Brez nedovoljeni pripomočki\n- Brez Spam\n- Spoštuj Admine \n\nSe strinjate s pravili? ", "Da", "Ne");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Če so kliknili 'Da' ali pritisnili ENTER 
        {
            SendClientMessage(playerid, COLOR_GREEN, "Hvala, ker ste sprejeli pravila!");
        }
        else // Če so kliknili ESC ali pritisnili 'Ne'
        {
            Kick(playerid);
        }
        return 1; // Pogovorno okno smo upravljali, tako da vrnemo 1. Enako kot v "OnPlayerCommandText".
    }

    return 0; // Tukaj morate vrniti 0! Kot v "OnPlayerCommandText".
}
// definiramo drug dialog, mu damo eno večjo vrednost kot prejšnjemu
#define DIALOG_LOGIN 2

// V ukazu pokažemo ta dialog
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Vpiši se ", "Prosimo vnesite svoje geslo:", "Vpiši se", "Odnehaj");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Če bi kliknili 'Odnehaj' ali pritisnite ESC
        {
            Kick(playerid);
        }
        else // Aki so pritisnili ENTER ali kliknili 'Vpiši se'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Uspešno ste prijavljeni!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "PRIJAVA NI USPELA.");

                // Ponovno pokažite pogovorno okno predvajalniku
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Vpiši se", "Prosimo vnesite svoje geslo:", "Vpiši se", "Odnehaj");
            }
        }
        return 1; // Pogovorno okno smo upravljali, tako da vrnemo 1. Enako kot v "OnPlayerCommandText".
    }

    return 0; // Tukaj morate vrniti 0! Kot v "OnPlayerCommandText".
}
// definiramo tretje pogovorno okno, spet je vrednost večja od vrednosti prejšnjega pogovornega okna
#define DIALOG_WEAPONS 3

// V ukazu pokažemo ta dialog 
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Orožje ", "Desert Eagle\nAK-47\nCombat Shotgun", "Izaberi", "Odnehaj");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Če so pritisnili 'Izberi' ali dvokliknili na element seznama
        {
            // Daje jim orožje
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Daje jim desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Daje jim AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Daje jim Combat Shotgun
            }
        }
        return 1; // Pogovorno okno smo upravljali, tako da vrnemo 1. Enako kot v "OnPlayerCommandText".
    }

    return 0; // Tukaj morate vrniti 0! Kot v "OnPlayerCommandText".
}
// to je še en način prikaza in upravljanja za tretje pogovorno okno
#define DIALOG_WEAPONS 3

// Prikažemo ga v ukazu
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Orožje",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Izaberi", "Odnehaj");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Če je pritisnil 'Select' ali dvakrat pritisnil orožje
        {
            // Daje jim orožje
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Daje jim M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Daje jim MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Daje jim AK-47
            }
        }
        return 1; // Pogovorno okno smo upravljali, tako da vrnemo 1. Enako kot v "OnPlayerCommandText".
    }

    return 0; // Tukaj morate vrniti 0! Kot v "OnPlayerCommandText".
}
```

## Opombe

:::tip

Parametri lahko vsebujejo različne vrednosti, odvisno od sloga pogovornega okna ([Kliknite za več primerov](../resources/dialogstyles.md)).

:::

:::tip

Če jih imate, je priročno preklapljati med različnimi dialogi.

:::

:::warning

Pogovorno okno predvajalnika se ne skrije ob ponovnem zagonu igralnega načina, zaradi česar strežnik natisne "Opozorilo: PlayerDialogResponse PlayerId: 0 ID pogovornega okna se ne ujema z zadnjim poslanim ID-jem pogovornega okna" (Prevod: PlayerDialogResponse PlayerId: 0), če se je igralec po dialogu odzval po ponovni zagon.

:::

## Povezane Funkcijo

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Pokaži pogovorno okno predvajalniku.
