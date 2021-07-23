---
title: ShowPlayerDialog
description: Prikazuje igraču za sinkroni (samo jedan po jedan) dijaloški box.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Prikazuje igraču za sinkroni (samo jedan po jedan) dijaloški box.

| Ime       | Deskripcija                                                                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID igrača za prikazati dijalog.                                                                                                                                              |
| dialogid  | ID kojem treba dodijeliti ovaj dijalog, tako da se odgovori mogu obraditi. Maksimalni dialogid je 32767. Upotreba negativnih vrijednosti zatvorit će svaki otvoreni dijalog. |
| style     | [Stil](../resources/dialogstyles) dijaloga.                                                                                                                                  |
| caption[] | Naslov na vrhu dijaloga. Dužina opisa ne može premašiti više od 64 znaka prije nego što se počne odsjeći.                                                                    |
| info[]    | Tekst za prikaz u glavnom dijaloškom okviru. Koristite \n za započinjanje novog retka i \t za tabeliranje.                                                                   |
| button1[] | Tekst na lijevom dugmetu.                                                                                                                                                    |
| button2[] | Tekst na desnom dugmetu. Ostavite ga praznog ( "" ) da ga sakrijete.                                                                                                         |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
// Definiraj ID-eve dijaloga sa enumom
enum
{
    DIALOG_NULL,
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// Alternativno, koristi macros:
#define DIALOG_NULL 0
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

// Enums su preporučljivi, jer ne morate pratiti korištene ID-ove. Međutim, enumi koriste memoriju za pohranjivanje definicija, dok se definicije obrađuju u fazi 'pretprocesora' (kompajliranja).

// Primjer za DIALOG_STYLE_MSGBOX:
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "Konektovan si na server", "Close", "");

// Primjer za DIALOG_STYLE_INPUT:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Unesite svoju lozinku ispod:", "Login", "Cancel");

// Primjer za DIALOG_STYLE_LIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Oruzja", "AK47\nM4\nSniper Rifle", "Option 1", "Option 2");

// Primjer za DIALOG_STYLE_PASSWORD:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Unesite svoju lozinku ispod:", "Login", "Cancel");

// Primjer za DIALOG_STYLE_TABLIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Kupi oruzje", "Deagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");

// Example for DIALOG_STYLE_TABLIST_HEADERS:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Kupi oruzje", "Weapon\tPrice\tAmmo\nDeagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");
```

## Zabilješke

:::tip

Preporučuje se upotreba enuma (vidi gore) ili definicija (#define) da bi se utvrdilo koji ID dijalozi imaju, kako bi se izbjegla zabuna u budućnosti. Nikada ne biste trebali koristiti doslovne brojeve za ID-ove - postaje zbunjujuće.

:::

:::tip

Koristite ugrađivanje boja za više boja u tekstu. Korišćenje -1 kao dijalogida zatvara sve dijaloge koji su trenutno prikazani na ekranu klijenta.

:::

## Srodne Funkcije

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [OnDialogResponse](../callbacks/OnDialogResponse): Pozvano kada igrač odgovori na dijalog.
