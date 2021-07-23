---
title: SetPlayerDrunkLevel
description: Postavlja nivo pijanosti igrača zbog kojeg se igračeva kamera njiše i vozila teško kontroliraju.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja nivo pijanosti igrača zbog kojeg se igračeva kamera njiše i vozila teško kontroliraju.

| Ime      | Deskripcija                       |
| -------- | --------------------------------- |
| playerid | ID igrača za postaviti pijanstvo. |
| level    | Nivo pijanstva za postaviti.      |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
if (strcmp(cmdtext, "/drunk", true) == 0)
{
    SetPlayerDrunkLevel (playerid, 4000);
    SendClientMessage(playerid, 0xFFFFFFAA, "Sada si pijan; nemoj da piješ i voziš!");
    return 1;
}
```

## Zabilješke

:::tip

Pijani nivo igrača automatski će se smanjiti s vremenom, na osnovu njihovog FPS-a (igrači sa 50 FPS-a izgubit će 50 'nivoa' u sekundi. Ovo je korisno za određivanje FPS-a igrača!). U 0.3a nivo pijanca će se smanjiti i zaustaviti na 2000. U 0.3b + nivo pijanca se smanjuje na nulu.) Nivoi preko 2000 čine igrača pijanim (njihanje kamere i vozila teško kontrolirati). Maksimalni nivo pijanosti je 50000. Dok je nivo pijanosti iznad 5000, HUD igrača (radar itd.) će biti sakriven.

:::

## Srodne Funkcije

- [GetPlayerDrunkLevel](GetPlayerDrunkLevel): Vraća trenutni nivo pijanstva igrača.
