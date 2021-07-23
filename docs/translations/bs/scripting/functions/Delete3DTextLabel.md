---
title: Delete3DTextLabel
description: Obriši 3D text label (kreiran sa Create3DTextLabel).
tags: ["3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Obriši 3D text label (kreiran sa Create3DTextLabel).

| Ime       | Deskripcija                    |
| --------- | ------------------------------ |
| Text3D:id | ID 3D text labela za obrisati. |

## Returns

1 ako je 3D text label obrisan, uostalom 0.

## Primjeri

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel(...);

Delete3DTextLabel(gMyLabel);
```

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni tekst 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
