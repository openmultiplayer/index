---
title: TextDrawCreate
description: Kreira textdraw.
tags: ["textdraw"]
---

## Deskripcija

Kreira textdraw. Textdraw-ovi su, kako samo ime implicira, tekst (uglavnom - ovdje također mogu biti boxovi, sprite-ovi i pregledi modela (skinovi/vozila/oružja/objekti) koji je iscrtan na igračevom zaslonu. Pogledaj ovu stranicu za opsežne informacije o textdraw-ovima.

| Ime     | Deskripcija                                         |
| ------- | --------------------------------------------------- |
| Float:x | X (left/right) kordinata to create the textdraw at. |
| Float:y | Y (up/down) kordinata to create the textdraw at.    |
| text[]  | The text that will appear in the textdraw.          |

## Returns

ID kreiranog textdraw-a. Textdraw IDs start at 0.

## Primjeri

```c
// ova varijabla je korištena za pohraniti ID textdrawa
// kako bismo ga mogli koristiti kroz skriptu
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // Ova linija nam korisit kako bismo kreirali textdraw
    // Zabilješka: Ovo kreira textdraw bez ikakvog formatiranja.
    gMyTextdraw = TextDrawCreate(240.0,580.0,"Dobrodosli na moj SA-MP server");
    return 1;
}

public OnPlayerConnect(playerid)
{
    //Ovo je korišteno da prikaže textdraw igraču kada se konektuje.
    TextDrawShowForPlayer(playerid, gMyTextdraw);
}
```

## Zabilješke

:::tip

X, Y kordinata je gornja lijeva kordinata za područje textdrawa na osnovu 640x448 "platna" (bez obzira na razlučivost zaslona). Ako planirate koristiti TextDrawAlignment s poravnanjem 3 (desno), kordinata x, Y je gornja desna kordinata za crtanje teksta. Ova funkcija samo KREIRA izvlačenje teksta, za prikaz morate koristiti TextDrawShowForPlayer ili TextDrawShowForAll. Preporučuje se upotreba CIJELIH brojeva umjesto decimalnih mjesta prilikom kreiranja crteža teksta kako bi se osigurao dizajn prilagođen rezoluciji.

:::

:::warning

Kodovi preslikavanja tipki na tipkovnici (kao npr ~k~~VEHICLE_ENTER_EXIT~ ne rade preko 255-og karaktera.

:::

## Srodne Funkcije

- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBoxColor](TextDrawBoxColor): Postavi boju boxa u textdrawu.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Postavi boju pozadine textdrawa.
- [TextDrawAlignment](TextDrawAlignment): Postavi poravnanje textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [TextDrawLetterSize](TextDrawLetterSize): Postavi veličinu znakova teksta u textdrawu.
- [TextDrawTextSize](TextDrawTextSize): Postavi veličinu boxa u textdrawu.
- [TextDrawSetOutline](TextDrawSetOutline): Odluči da li da tekst ima outline.
- [TextDrawSetShadow](TextDrawSetShadow): Uključi/isključi sjene (shadows) na textdrawu.
- [TextDrawSetProportional](TextDrawSetProportional): Razmjestite razmak između teksta u texstdrawu na proporcionalni omjer.
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawSetString](TextDrawSetString): Postavi tekst u već postojećem textdrawu.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
