---
title: PlayCrimeReportForPlayer
description: Ova funkcija reproducira prijavu zločina za igrača - baš kao i kod jednog igrača kada CJ počini zločin.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ova funkcija reproducira prijavu zločina za igrača - baš kao i kod jednog igrača kada CJ počini zločin.

| Ime       | Deskripcija                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid  | ID igrača koji će čuti prijavu zločina (crime report)..                                                          |
| suspectid | ID osumnjičeni igrač koji će biti opisan u krivičnoj prijavi.                                                    |
| crimeid   | [Crime ID](../resources/crimelist), koji će biti prijavljen kao 10-kod (tj. 10-16 ako je 16 donesen kao zločin). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 je napravio zločin (10-16).");
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [PlayerPlaySound](PlayerPlaySound): Reprodukujte zvuk za igrača.
