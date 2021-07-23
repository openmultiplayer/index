---
title: OnPlayerClickPlayer
description: Kliče se, ko igralec dvakrat klikne na igralca na semaforju (TAB).
tags: ["player"]
---

:::warning

Ta funkcijo je bila dodana SA-MP 0.3a in v spodnjih različicah ne deluje!

:::

## Opis

Kliče se, ko igralec dvakrat klikne na igralca na semaforju (TAB).

| Ime             | Opis                                                 |
| --------------- | ---------------------------------------------------- |
| playerid        | ID igralec, ki je kliknil na igralca na semaforju.   |
| clickedplayerid | ID igralec, na katerega se klikne.                   |
| source          | Vir klika predvajalnika.                             |

## Returns

1 - Preprečil bo druge "filterskript" prejeli to "callback".

0 - Pomeni, da bo ta "callback" se posreduje na naslednjo "filterskripte".

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new message[32];
    format(message, sizeof(message), "Kliknili ste na predvajalnik %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Opombe

:::tip

Trenutno je na voljo samo ena 'source' (0 - CLICK_SOURCE_SCOREBOARD). Vztrajnost tega argumenta kaže, da bo v prihodnosti morda podprtih več virov.

:::

## Srodne Funkcijo

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Povabljen, ko igralec klikne risanje besedila.
