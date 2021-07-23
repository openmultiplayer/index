---
title: CreateActor
description: Kreiraj statičnog aktora u svijetu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Kreiraj statičnog aktora u svijetu. Ovi aktori su kao NPC-ovi, kakogod imaju ograničene mogućnosti. Ne zauzimaju server slotove.

| Ime      | Deskripcija                                     |
| -------- | ----------------------------------------------- |
| modelid  | ID modela (skin ID) kojeg će aktor imati.       |
| x        | X kordinata na kojoj će se kreirati aktor.      |
| y        | Y kordinata na kojoj će se kreirati aktor.      |
| z        | Z kordinata na kojoj će se kreirati aktor.      |
| Rotation | Smjer gledanja (rotacija) kojeg će imati aktor. |

## Returns

ID kreiranog aktora (počinje sa 0).

INVALID_ACTOR_ID (65535) ako je dostignut limit aktora (1000).

## Primjeri

```c
new gActorCJ;

public OnGameModeInit()
{
    // Kreiraj aktora (CJ) u Blueberry Acres (Centar SA mape)
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // Uništimo našeg dragog aktora (CJ)
    DestroyActor(gActorCJ);
}
```

## Zabilješke

:::tip

Aktori su zamišljeni da samo negdje stanu, na primjer blagajnici i barmeni. Oni mogu izvoditi animacije (jednom ili petljom) pomoću ApplyActorAnimation.

:::

:::warning

Aktori su potpuno odvojeni od NPC-a. NE koriste ID-ove igrača / utora na poslužitelju i NE MOGU se s njima postupati kao s NPC-ima. Aktori su ograničeni na 1000 (MAX_ACTORS). Vozače mogu potiskivati ​​glumce, upotrijebite timer da biste ih vratili na njihova mjesta. Od 0,3,7 R2 aktori su zadani da budu neranjivi.

:::

## Srodne Funkcije

- [DestroyActor](DestroyActor): Uništi aktora.
- [SetActorPos](SetActorPos): Postavi poziciju aktora.
- [GetActorPos](GetActorPos): Dobij poziciju aktora.
- [SetActorFacingAngle](SetActorFacingAngle): Postavi smjer gledanja aktora.
- [GetActorFacingAngle](GetActorFacingAngle): Dobij smjer gledanja aktora.
- [SetActorVirtualWorld](SetActorVirtualWorld): Postavi virtualni svijet za aktora.
- [GetActorVirtualWorld](GetActorVirtualWorld): Dobij virtualni svijet aktora.
- [ApplyActorAnimation](ApplyActorAnimation): Primijeni animaciju na aktoru.
- [ClearActorAnimations](ClearActorAnimations): Očisti animaciju koje su primijenjene na aktora.
- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Dobij ID aktora (ako ima) u kojeg igrač gleda.
- [IsActorStreamedIn](IsActorStreamedIn): Provjeri da li je aktor učitan kod igrača.
- [SetActorHealth](SetActorHealth): Postavi zdravlje aktoru.
- [GetActorHealth](GetActorHealth): Dobij helte/zdravlje aktora.
- [SetActorInvulnerable](SetActorInvulnerable): Postavi aktoru neranjivost.
- [IsActorInvulnerable](IsActorInvulnerable): Provjeri da li je aktor neranjiv.
- [IsValidActor](IsValidActor): Provjeri da li je id aktora validan.
- [GetActorPoolSize](GetActorPoolSize): Dobij največi actorid na serveru.
- [GetPlayerTargetActor](GetPlayerTargetActor): Dobij id aktora koji je naciljan od strane nekog igrača.
- [OnActorStreamIn](../callbacks/OnActorStreamIn): Pozvano kada je aktor učitan za igrača.
- [OnActorStreamOut](../callbacks/OnActorStreamOut): Pozvano kada je aktor isčitan za igrača.
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): Ovaj callback je pozvan kada igrač ozlijedi aktora.
