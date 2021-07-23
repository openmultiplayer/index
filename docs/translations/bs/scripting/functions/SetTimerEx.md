---
title: SetTimerEx
description: Postavlja tajmer za pozivanje funkcije nakon navedenog intervala.
tags: []
---

## Deskripcija

Postavlja tajmer za pozivanje funkcije nakon navedenog intervala. Ova varijanta ('Ex') može proslijediti parametre (kao npr playerID) funkciji.

| Ime            | Deskripcija                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| funcname[]     | Ime javne funkcije koju treba pozvati kada istekne tajmer.                                                                                  |
| interval       | Interval u milisekundama (1 sekunda = 1000 MS).                                                                                             |
| repeating      | Boolean (true/false (ili 1/0)) koji navodi treba li tajmer pozivati ​​više puta (može se zaustaviti samo pomoću KillTimer) ili samo jednom. |
| format[]       | Poseban format koji označava vrste vrijednosti koje će tajmer proći.                                                                        |
| {Float,\_}:... | Neograničeni broj argumenata koje treba proslijediti (mora slijediti format naveden u prethodnom parametru).                                |

## Returns

ID tajmera koji je pokrenut. ID-ovi odbrojavanja počinju na 1 i nikad se više ne koriste. Ne postoje interne provjere koje bi provjerile jesu li proslijeđeni valjani parametri (npr. Trajanje nije minus vrijednost). Y_Less-ov 'fixes2' plugin implementira ove provjere i također značajno poboljšava preciznost tajmera, a također dodaje podršku za prolazak stringa/niza.

## Primjeri

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - funkcija koja će biti pozvana
// 5000 - 5000 MS (5 sekundi). Ovo je interval. Tajmer će se pozvati nakon 5 sekundi.
// false - Ne ponavlja se. Pozvat će se samo jednom.
// "i" - I označava cijeli broj (cijeli broj). Funkciji prenosimo cijeli broj (ID igrača).
// playerid - Vrijednost koju treba proslijediti. Ovo je cijeli broj naveden u prethodnom parametru.
// Povratni poziv događaja (OnPlayerSpawn) - ovdje ćemo pokrenuti tajmer
public OnPlayerSpawn(playerid)
{
    // Anti-Spawnkill (5 sekundi)

    // Postavi im veoma visoke helte tako da ne mogu biti ubijeni
    SetPlayerHealth(playerid, 999999);

    // Obavijesi ih
    SendClientMessage(playerid, -1, "Zasticen si od spawn-killa 5 sekundi.");

    // Započni tajmer od 5 sekundi koji će zaustaviti Anti-SpawnKill
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// Forward (učini public) funkcijom kako bi je server mogao 'vidjeti'
forward EndAntiSpawnKill(playerid);
// Tajmer funkcija - kod koji treba izvršiti kada se pozove tajmer ide ovdje
public EndAntiSpawnKill(playerid)
{
    // 5 sekundi je prošlo, tako da mu stavljamo healthe nazad na 100
    SetPlayerHealth(playerid, 100);

    // Opet ih obavijestimo
    SendClientMessage(playerid, -1, "Više nisi pod Spawn-kill zaštitom");
    return 1;
}
```

## Zabilješke

:::tip

Varijable ID-a tajmera trebaju se inicijalizirati na -1 kada mogu kako bi se smanjila mogućnost slučajnog ubijanja ID-a tajmera 0 greškom (ili upotrijebite ID tajmera 0 gore na početku OnGameModeInit). Intervali tajmera nisu tačni (otprilike 25% popusta). Postoje ispravci dostupni ovdje i ovdje. Funkcija koju treba pozvati mora biti javna. To znači da se mora proslijediti.

:::

## Srodne Funkcije

- [SetTimer](SetTimer): Postavi tajmer.
- [KillTimer](KillTimer): Zaustavi tajmer.
- [CallLocalFunction](CallLocalFunction): Pozovite funkciju u skripti.
- [CallRemoteFunction](CallRemoteFunction): Pozovite funkciju u bilo kojoj učitanoj skripti.
