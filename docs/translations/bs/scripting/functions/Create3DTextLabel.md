---
title: Create3DTextLabel
description: Kreira 3D Text Label na određenoj lokaciji u svijetu.
tags: ["3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.a i ne radi u nižim verzijama!

:::

## Deskripcija

Kreira 3D Text Label na određenoj lokaciji u svijetu.

| Ime          | Deskripcija                                                                |
| ------------ | -------------------------------------------------------------------------- |
| text[]       | Početni tekstualni niz.                                                    |
| color        | Boja texta, kao cjelobrojni ili hexadcimalni u RGBA formatu                |
| x            | X-Kordinata                                                                |
| y            | Y-Kordinata                                                                |
| z            | Z-Kordinata                                                                |
| DrawDistance | Udaljenost od mjesta na kojem možete vidjeti 3D text Label                 |
| VirtualWorld | Virtualni svijet u kojem je moguće vidjeti 3d Text                         |
| testLOS      | 0/1 Testirajte vidokrug tako da se ovaj tekst ne može vidjeti kroz objekte |

## Returns

ID novokreiranog 3D Text Labela, ili INVALID_3DTEXT_ID ako je dostignut 3D Text Label limit (MAX_3DTEXT_GLOBAL).

## Primjeri

```c
public OnGameModeInit()
{
    Create3DTextLabel("Ja sam na kordinatama:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, 0);
    return 1;
}
```

## Zabilješke

:::tip

drawdistance se čini da je mnogo manja prilikom spectateanja

:::

:::tip

Upotrijebite ugrađivanje boja za više boja u tekstu.

:::

:::warning

Ako je text[] prazan, server/clients pored teksta če možda crashati! Ako je virtualworld postavljen na -1 tekst se neće pojaviti.

:::

## Srodne Funkcije

- [Delete3DTextLabel](Delete3DTextLabel): Obriši 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni tekst 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
