---
title: RemoveBuildingForPlayer
description: Uklanja standardni model San Andreasa za jednog igrača u određenom opsegu.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Uklanja standardni model San Andreasa za jednog igrača u određenom opsegu.

| Ime           | Deskripcija                                                            |
| ------------- | ---------------------------------------------------------------------- |
| playerid      | ID igrača za ukloniti objekte.                                         |
| modelid       | Model za ukloniti.                                                     |
| Float:fX      | X kordinata oko koje će objekat biti obrisan.                          |
| Float:fY      | Y kordinata oko koje će objekat biti obrisan.                          |
| Float:fZ      | Z kordinata oko koje će objekat biti obrisan.                          |
| Float:fRadius | Radijus oko navedene točke za uklanjanje objekata s navedenim modelom. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    // Kada se igrač konektuje, objekat sa modelom 615 će biti uklonjen u
    // rasponu od 200.0 od tačke 0.0, 0.0, 0.0, koja je centar San Andreas-a.
    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Kada se igrač konektuje, svi objekti sa mape će se ukloniti.
    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);
    return 1;
}
```

## Zabilješke

:::tip

U SA-MP 0.3.7 možete koristiti -1 za Modelid za uklanjanje svih objekata unutar navedenog radijusa.

:::

:::warning

Čini se da postoji ograničenje od oko 1000 linija/objekata. Zaobilazno rješenje nema. Kada uklonite isti predmet za igrača, oni će se srušiti. Obično se igrači sruše pri ponovnom povezivanju s serverom jer server uklanja zgrade na OnPlayerConnectu.

:::

## Srodne Funkcije

- [DestroyObject](DestroyObject): Uništi objekat.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
