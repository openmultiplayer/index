---
title: InterpolateCameraLookAt
description: Interpolirajte/pomjerajte tačku "pogleda u" kamere kamere između dve kordinatame zadanom brzinom.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Interpolirajte/pomjerajte tačku "pogleda u" kamere kamere između dve kordinatame zadanom brzinom.

| Ime         | Deskripcija                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID igrača čije će se kamera pomjerati.                                                                                                         |
| Float:FromX | X pozicija kamere gdje bi se trebala početi pomicati.                                                                                          |
| Float:FromY | Y pozicija kamere gdje bi se trebala početi pomicati.                                                                                          |
| Float:FromZ | Z pozicija kamere gdje bi se trebala početi pomicati.                                                                                          |
| Float:ToX   | X pozicija kamere gdje bi se trebala pomaketi.                                                                                                 |
| Float:ToY   | Y pozicija kamere gdje bi se trebala pomaketi.                                                                                                 |
| Float:ToZ   | Z pozicija kamere gdje bi se trebala pomaketi.                                                                                                 |
| time        | Vrijeme u milisekundama za dovršiti interpoliranje/pomjeranje.interpolation                                                                    |
| cut         | ['Jumpcut'](../resources/cameracutstyles) za koristiti. Zadano na CAMERA_CUT (besmisleno). Postavi na CAMERA_MOVE za interpolaciju/pomjeranje. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // The kamera počinje gledati (x1, y1, z1). Zatim će se okretati i nakon
        // 10000 milisekundi (10 sekundi) gledati će na (x2, y2, z2).
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Upotrijebite TogglePlayerSpectating da se objekti prikažu igraču/klijentu tokom reprodukcije kamere. Pomoću SetCameraBehindPlayer možete resetovati kameru iza igrača/klijenta.

:::

## Srodne Funkcije

- [InterpolateCameraPos](InterpolateCameraPos): Pomjerite kameru igrača od jedne lokacije do druge.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Postavite gdje će igračeva kamera gledati.
- [SetPlayerCameraPos](SetPlayerCameraPos): Postavi poziciju kamere igrača.
