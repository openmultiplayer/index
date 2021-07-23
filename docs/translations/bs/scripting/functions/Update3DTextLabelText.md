---
title: Update3DTextLabelText
description: Ažurira text i boju 3D Text Labela.
tags: ["3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ažurira text i boju 3D Text Labela.

| Ime       | Deskripcija                                     |
| --------- | ----------------------------------------------- |
| Text3D:id | 3D Text Label kojeg želite ažurirati.           |
| color     | Boja 3D Text Labela kojeg će od sada imati.     |
| text[]    | Novi text kojeg će 3D Text Label od sada imati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    new Text3D: mylabel;
    mylabel = Create3DTextLabel("Ja sam na kordinatama:\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Update3DTextLabelText(mylabel, 0xFFFFFFFF, "New text.");
    return 1;
}
```

## Zabilješke

:::warning

Ako je text[] prazan, server/client-i pored texta će možda crashovati.

:::

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Obriši 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
