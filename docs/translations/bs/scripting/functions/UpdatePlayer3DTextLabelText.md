---
title: UpdatePlayer3DTextLabelText
description: Ažurira igračevom 3D Text Labelu text i boju.
tags: ["player", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ažurira igračevom 3D Text Labelu text i boju.

| Ime             | Deskripcija                                     |
| --------------- | ----------------------------------------------- |
| playerid        | ID igrača za kojeg je 3D Text Label kreiran.    |
| PlayerText3D:id | 3D Text Label kojeg želite ažurirati.           |
| color           | Boja 3D Text Labela kojeg će od sada imati.     |
| text[]          | Novi text kojeg će 3D Text Label od sada imati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Zabilješke

:::warning

Ako je text[] prazan, server/client-i pored texta će možda crashovati.

:::

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Obriši 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni tekst 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
