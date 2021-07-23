---
title: SendRconCommand
description: Šalje RCON (Remote Console) komandu.
tags: ["administration"]
---

## Deskripcija

Šalje RCON (Remote Console) komandu.

| Ime       | Deskripcija               |
| --------- | ------------------------- |
| command[] | RCON komanda za izvršiti. |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Zabilješke

:::warning

- Ne podržava login, zbog nedostatka 'playerid' parametra.
- 'password 0' će ukloniti lozinku servera ako je postavljena.
- Ova funkcija će rezultirati da se OnRconCommand pozove.

:::

## Primjeri

```c
SendRconCommand("gmx");
// Ovo je skriptana verzija korištenja "/rcon gmx" u igri.
// GMX ponovno pokreće game mode.

// Primjer koristeći format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);
```

## Srodne Funkcije

- [IsPlayerAdmin](IsPlayerAdmin): Provjerava da li je igrač prijavljen/ulogovan u RCON.

## Srodni Callback-ovi (Povratni pozivi)

- [OnRconCommand](../callbacks/OnRconCommand): Pozvano kada se pošalje RCON komanda.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Pozvano kada se napravi pokušaj pristupa ulogovanja u RCON.
