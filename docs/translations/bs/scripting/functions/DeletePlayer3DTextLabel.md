---
title: DeletePlayer3DTextLabel
description: Uništi 3D text label koji je kreiran koristeći CreatePlayer3DTextLabel.
tags: ["player", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Uništi 3D text label koji je kreiran koristeći CreatePlayer3DTextLabel.

| Ime             | Deskripcija                             |
| --------------- | --------------------------------------- |
| playerid        | ID igrača čiji se 3D text label briše.  |
| PlayerText3D:id | ID igračevog 3D text labela za brisati. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da spomenuti label ne postoji.

## Primjeri

```c
new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);

// Later...
DeletePlayer3DTextLabel(playerid, labelid);
```

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni tekst 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
