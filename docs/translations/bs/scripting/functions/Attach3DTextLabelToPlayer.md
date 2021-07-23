---
title: Attach3DTextLabelToPlayer
description: Prikvači 3D tekst label za igrača.
tags: ["player", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Prikvači 3D tekst label za igrača.

| Ime       | Deskripcija                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| Text3D:id | ID 3D tekst labela kojeg želite prikvačiti. Returnovan(uzvraćen) od Create3DTextLabel. |
| playerid  | ID igrača za kojeg želite prikvačiti label.                                            |
| OffsetX   | X kordinata igrača.                                                                    |
| OffsetY   | Y kordinata igrača.                                                                    |   
| OffsetZ   | Z kordinata igrača.                                                                    |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija nije uspjela da se izvrši. To znači da igrač i/ili label ne postoje.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Izbriši a 3D text label.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Prikvači 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni boju 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
