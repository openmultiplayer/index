---
title: Attach3DTextLabelToVehicle
description: Prikvači 3D text label za vozilo.
tags: ["vehicle", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Prikvači 3D text label za vozilo.

| Ime       | Deskripcija                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| Text3D:id | 3D Text Label kojeg želite prikvačiti.                                       |
| vehicleid | Vozilo na koje želite prikvačiti 3D text label.                              |
| OffsetX   | Koordinata Offset-X vozila igrača (the vehicle is 0.0,0.0,0.0)..             |
| OffsetY   | Koordinata Offset-Y vozila igrača (the vehicle is 0.0,0.0,0.0)..             |
| OffsetZ   | Koordinata Offset-Z vozila igrača (the vehicle is 0.0,0.0,0.0)..             |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Creating the TextLabel for later use
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0. 0.0, 15.0, 5, 0, 120); // Creating the Vehicle.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Attaching Text Label To Vehicle.
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## Srodne Funkcije

- [Create3DTextLabel](Create3DTextLabel): Kreiraj 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Izbriši a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Prikvači 3D text label za igrača.
- [Update3DTextLabelText](Update3DTextLabelText): Promijeni boju 3D text labela.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Kreiraj 3D text label za jednog igrača.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Obriši igračev 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Promijeni tekst igračevog 3D text labela.
