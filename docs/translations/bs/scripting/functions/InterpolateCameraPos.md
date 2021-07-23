---
title: InterpolateCameraPos
description: Pomjerite kameru igrača od jedne pozicije do druge, unutar postavljenog vremena.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Pomjerite kameru igrača od jedne pozicije do druge, unutar postavljenog vremena. Korisno za scenarije cut scnea

| Ime         | Deskripcija                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID igrača čija će se kamera pomjerati.                                                                                                  |
| Float:FromX | X pozicija kamere gdje bi se trebala početi pomicati.                                                                                   |
| Float:FromY | Y pozicija kamere gdje bi se trebala početi pomicati.                                                                                   |
| Float:FromZ | Z pozicija kamere gdje bi se trebala početi pomicati.                                                                                   |
| Float:ToX   | X pozicija kamere gdje bi se trebala pomaketi.                                                                                          |
| Float:ToY   | Y pozicija kamere gdje bi se trebala pomaketi.                                                                                          |
| Float:ToZ   | Z pozicija kamere gdje bi se trebala pomaketi.                                                                                          |
| time        | Vrijeme u milisekundama.                                                                                                                |
| cut         | ['Jumpcut'](../resources/cameracutstyles) za koristiti. Zadano na CAMERA_CUT (besmisleno). Postavi na CAMERA_MOVE za glatko pomjeranje. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        //pomjeraj kameru igrača od tačke A do tačke B u 10000 milieskundi (10 sekundi).
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

- [InterpolateCameraLookAt](InterpolateCameraLookAt): Premjestite prikaz kamere igrača s jedne lokacije na drugu.
- [SetPlayerCameraPos](SetPlayerCameraPos): Postavi poziciju kamere igrača.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Postavite gdje će igračeva kamera gledati.
