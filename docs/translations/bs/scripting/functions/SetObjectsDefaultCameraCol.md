---
title: SetObjectsDefaultCameraCol
description: Omogućuje da se sudaranje kamere s novostvorenim objektima onemogući prema zadanim postavkama.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućuje da se sudaranje kamere s novostvorenim objektima onemogući prema zadanim postavkama.

| Ime     | Deskripcija                                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------- |
| disable | 1 za onemogućavanje sudara kamere za novostvorene objekte i 0 za njihovo omogućavanje (omogućeno prema zadanim postavkama). |

## Returns

Note

Ova funkcija utječe samo na sudare kamera objekata stvorenih NAKON njegove upotrebe - ne uključuje sudare kamera postojećih objekata.

## Primjeri

```c
public OnGameModeInit()
{
    // Onemogući sudar kamere
    SetObjectsDefaultCameraCol(1);

    // Stvaranje mapiranih objekata
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Gore navedeni objekti NEĆE imati sudara kamere

    // Ponovo omogućite sudare kamere
    SetObjectsDefaultCameraCol(0);

    // Stvaranje mapiranih objekata
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Gore navedeni objekti NEĆE imati sudara kamere

    // ALI, prvi set I dalje NEĆE imati sudara kamere

    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija utječe samo na sudare kamera objekata stvorenih NAKON njegove upotrebe - ne uključuje sudare kamera postojećih objekata.

:::

:::warning

Ova funkcija radi SAMO izvan normalnih granica SA mape (preko 3000 jedinica).

:::

## Srodne Funkcije

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Onemogućava sudare između kamere i objekta.
- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): Onemogućava sudare između kamere i objekta playera.
