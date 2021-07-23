---
title: PlayAudioStreamForPlayer
description: Reprodukujte 'audio stream' za igrač.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Reprodukujte 'audio stream' za igrač. Uobičajene audio datoteke takođe rade (npr. MP3).

| Ime            | Deskripcija                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| playerid       | ID igrača za puštanje audio streama.                                                                                 |
| url[]          | URL za reprodukovati. Važeći formati su mp3 i ogg/vorbis. Veza do datoteke .pls (playlist) reproducirat će tu listu. |
| Float:PosX     | X pozicija na kojoj će se pustiti zvuk. Zadano 0.0. Nema efekta sve dok se usepos ne stavi na 1.                     |
| Float:PosY     | Y pozicija na kojoj će se pustiti zvuk. Zadano 0.0. Nema efekta sve dok se usepos ne stavi na 1.                     |
| Float:PosZ     | Z pozicija na kojoj će se pustiti zvuk. Zadano 0.0. Nema efekta sve dok se usepos ne stavi na 1.                     |
| Float:distance | Udaljenost na kojoj će se zvuk čuti. Nema efekta sve dok se usepos ne stavi na 1.                                    |
| usepos         | Koristite navedene položaje i udaljenost. Zadano onemogućeno (0).                                                    |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:X, Float:Y, Float:Z, Float:Distance = 5.0;
        GetPlayerPos(playerid, X, Y, Z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", X, Y, Z, Distance, 1);
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Zaustavi reprodukovanje audio stream-a za igrača.
- [PlayerPlaySound](PlayerPlaySound): Reprodukujte zvuk za igrača.
