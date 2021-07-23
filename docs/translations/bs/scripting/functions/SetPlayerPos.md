---
title: SetPlayerPos
description: Postavite poziciju igrača.
tags: ["player"]
---

## Deskripcija

Postavite poziciju igrača.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za postaviti poziciju.     |
| Float:x  | X kordinata za pozicionirati igrača. |
| Float:y  | Y kordinata za pozicionirati igrača. |
| Float:z  | Z kordinata za pozicionirati igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
// Teleportuje igrača u centar San Andreasa kada napiše /middle
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/middle", true))
    {
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Korištenje ove funkcije na igraču koji je u vozilu odmah će ga ukloniti iz vozila. Korisno za brzo izbacivanje igrača.

:::

:::tip

Kada postavljate položaj igrača u enterijer, mora se postaviti i njegov enterijer.

:::

## Srodne Funkcije

- [SetPlayerPosFindZ](SetPlayerPosFindZ): Postavi poziciju igrača i pronađi tlo.
- [GetPlayerPos](GetPlayerPos): Dobij poziciju igrača.
- [SetVehiclePos](SetVehiclePos): Postavi poziciju vozila.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
