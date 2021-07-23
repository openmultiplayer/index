---
title: CreatePlayer3DTextLabel
description: Kreira 3D Text Label samo za jednog određenog igrača.
tags: ["player", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Kreira 3D Text Label samo za jednog određenog igrača.

| Ime             | Deskripcija                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| playerid        | Igrač koji bi trebao vidjeti novokreirani 3D Text Label.                      |
| text[]          | Tekst za prikazati.                                                           |
| color           | Boja teksta.                                                                  |
| x               | X kordinata (ili pomak ako je priložen)                                       |
| y               | Y kordinata (ili pomak ako je priložen)                                       |
| z               | Z kordinata (ili pomak ako je priložen)                                       |
| DrawDistance    | Udaljenost od mjesta na kojem možete vidjeti 3D text label                    |
| attachedplayer  | Igrač za kojeg žeite prikvačiti 3D text label. (Ako nema: INVALID_PLAYER_ID)  |
| attachedvehicle | Vozilo za koje žeite prikvačiti 3D text label. (Ako nema: INVALID_VEHICLE_ID) |
| testLOS         | 0/1 Testirajte vidokrug tako da se ovaj tekst ne može vidjeti kroz objekte    |

## Returns

ID novokreiranog 3D Text Labela, ili INVALID_3DTEXT_ID ako je dostignut Player 3D Text Label limit (MAX_3DTEXT_PLAYER).

## Primjeri

```c
if (strcmp(cmd, "/playerlabel", true) == 0)
{
    new
        PlayerText3D: playerTextId,
        Float: X, Float: Y, Float: Z;

    GetPlayerPos(playerid, X, Y, Z);
    playerTextId = CreatePlayer3DTextLabel(playerid, "Cao\nja sam na tvojoj poziciji", 0x008080FF, X, Y, Z, 40.0);
    return 1;
}
```

## Zabilješke

:::tip

drawdistance se čini da je mnogo manja prilikom spectateanja

:::

:::warning

Ako je text[] prazan, server/clients pored teksta če možda crashati!

:::

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Obriši 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni tekst 3D text labela.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
