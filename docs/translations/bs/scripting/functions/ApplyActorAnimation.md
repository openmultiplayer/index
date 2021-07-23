---
title: ApplyActorAnimation
description: Primijeni animaciju na aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Primijeni animaciju na aktora.

| Ime        | Deskripcija                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actorid    | ID aktora kojem se primjenjuje animacija.                                                                                                                                                               |
| animlib[]  | Biblioteka (library) animacije iz koje se primjenjuje animacija.                                                                                                                                        |
| animname[] | Ime animacije koju hoćete primijeniti, unutar oodređene biblioteke (library-a).                                                                                                                         |
| fDelta     | Brzina reprodukcije animacija (koristi 4.1).                                                                                                                                                            |
| loop       | Ako je postavljen 1, animacija će se ponavljati. Ako je postavljen na 0, animacija će se reproducirati jednom.                                                                                          |
| lockx      | Ako je postavljen 0, aktor će se vratiti na svoeu staru x kordinatu nakon što se animacija završi (za animacije koje aktora pokreću kao npr 'walking' / 'hodanje'). 1 ga neće vratiti na staru poziciju |
| locky      | Isto kao i parametar iznad samo za Y osu. Trebalo bi se ostaviti kao i gornji.                                                                                                                          |
| freeze     | Postavljanjem ovo na 1 će zalediti aktora nakon što se animacija zavšri. 0 neće.                                                                                                                        |
| time       | Tajmer u milisekundama. Za animaciju koja se neprestano ponavlja je 0.                                                                                                                                  |

## Returns

1: Funkcija upsješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Pay anim
    return 1;
}
```

## Zabilješke

:::tip

Morate unaprijed učitati biblioteku (library) animacija za igrača za kojeg će aktor primijeniti animaciju, a ne za aktora. Uostalom, animacija neće biti primijenjena aktoru sve dok funkcija ne bude izršena ponovo.

:::

## Srodne Funkcije

- [ClearActorAnimations](ClearActorAnimations.md): Očisti sve animacije koje su primijenjene aktoru.
