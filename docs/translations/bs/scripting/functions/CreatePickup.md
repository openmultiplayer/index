---
title: CreatePickup
description: Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim što returna (vraća) ID pickupa koji se može upotrijebiti za njegovo uništavanje nakon čega se može pratiti pomoću OnPlayerPickUpPickup.
tags: []
---

## Deskripcija

Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim što returna (vraća) ID pickupa koji se može upotrijebiti za njegovo uništavanje nakon čega se može pratiti pomoću OnPlayerPickUpPickup.

| Ime                              | Deskripcija                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | Model pickupa.                                                                        |
| [type](../resources/pickuptypes) | Tip pickupa. Određuje kako će pickup reagovati.                                       |
| Float:X                          | X kordinata za kreirati pickup.                                                       |
| Float:Y                          | Y kordinata za kreirati pickup.                                                       |
| Float:Z                          | Z kordinata za kreirati pickup.                                                       |
| virtualworld                     | ID virtualnog svijeta pickupa. Koristi -1 da bi se pickup prikazao u svim svjetovima. |

## Returns

ID kreiranog pickupa, -1 ukoliko dođe do greške (pickup max limit).

## Primjeri

```c
new pickup; // kreiramo varijablu u koju ćemo sačuvati ID pickupa

public OnGameModeInit()
{
    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Kreiramo armor pickup i čuvamo ga u 'pickup' varijablu
    return 1;
}

// Kasnije..
DestroyPickup(pickup); // Primjer korištenja Pickup ID-a
pickup = 0; // varijablu pickupa treba resetirati kako bi se izbjegli budući problemi
```

## Zabilješke

:::tip

Jedina vrsta pickupa koja se može pokupiti iz vozila je 14 (osim posebnih pickupa poput bribe-a). Pickupi su prikazani i mogu ih pokupiti svi igrači. Moguće je da ako se DestroyPickup () koristi kada se podiže, više od jednog igrača može pokupiti pickup zbog zaostajanja. To se može zaobići korištenjem varijabli. Određene vrste pickupa dolaze s "automatskim odgovorima", na primjer, upotreba modela M4 u pickupa automatski će dati igraču oružje i malo streljiva. Za potpuno skriptirane pickupe treba koristiti tip 1.

:::

:::warning

Poznati Bug(ovi): Pickupi koji imaju X ili Y niži od -4096,0 ili veći od 4096,0 neće se pojaviti niti će pokrenuti OnPlayerPickUpPickup.

:::

## Srodne Funkcije

- [AddStaticPickup](AddStaticPickup): Dodaj statični pickup.
- [DestroyPickup](DestroyPickup): Uništi pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Pozvano kada igrač pokupi pickup.
