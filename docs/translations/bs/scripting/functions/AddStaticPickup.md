---
title: AddStaticPickup
description: Ova funkcija kreira 'statični' pickup u igru.
tags: []
---

## Deskripcija

Ova funkcija kreira 'statični' pickup u igru. Ovi pickup-ovi podržavaju oružja, health, armor itd., sa sposobnošću da funkcioniraju bez da ih skriptate (oružja/health/armor će biti dati automatski).

| Ime                                | Deskripcija                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [model](../resources/pickupids.md) | Model pickupa.                                                                                          |
| [tip](../resources/pickuptypes.md) | Tip pickupa. Određuje kako pickup reagira kad ga pokupite.                                              |
| Float:X                            | X kordinata na koju kreirate pickup.                                                                    |
| Float:Y                            | Y kordinata na koju kreirate pickup.                                                                    |
| Float:Z                            | Z kordinata na koju kreirate pickup.                                                                    |
| virtualworld                       | ID Virtualnog svijeta(world) u kojeg stavljate taj pickup. Koristi -1 da ga prikažeš u svim svjetovima. |

## Returns

1 ako je pickup uspješno kreiran.

0 ako je neuspješno kreiran.

## Primjeri

```c
public OnGameModeInit()
{
    // Kreiraj pickup za armor armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Kreiraj pickup za malo healtha, odmah pored armora
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Zabilješke

:::tip

Funkcija ne returna ID pickupa kojeg možeš koristiti u, naprimjer, OnPlayerPickUpPickup. Koristi CreatePickup ako želite dodijeliti ID-ove.

:::

## Srodne Funkcije

- [CreatePickup](CreatePickup.md): Kreiraj pickup.
- [DestroyPickup](DestroyPickup.md): Uništi pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): Pozvano kada igrač pokupi pickup.
