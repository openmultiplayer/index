---
title: GetVehicleParamsEx
description: Gets a vehicle's parameters.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Gets a vehicle's parameters.

| Ime               | Deskripcija                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| vehicleid         | ID vozila za dobiti parametre.                                                 |
| & motor           | Doznajte status motora. Ako je 1, motor radi.                                  |
| i svjetla         | Doznajte stanje svjetla u vozilu. Ako je 1 svjetla upaljena.                   |
| & alarm           | Doznajte stanje alarma u vozilu. Ako je 1 alarm se oglašava (ili se oglašava). |
| i vrata           | Dobiti status zaključavanja vrata. Ako su 1 vrata su zaključana.               |
| & poklopac motora | Dobiti status poklopca motora / poklopca motora. Ako je 1, otvoreno je.        |
| & boot            | Dobiti status pokretanja / prtljažnika. 1 znači da je otvoren.                 |
| & cilj            | Steknite objektivni status. 1 znači da je cilj uključen.                       |

## Returns

1 - uspješno

0 - greška (nevažeći ID vozila).

Parametri vozila pohranjeni su u referentnim varijablama, a ne u povratnoj vrijednosti.

## Primjeri

```c
new
    engine, lights, alarm, doors, bonnet, boot, objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
//To bi uzrokovalo da sva gore navedena varijabla postane status subjekta.
```

## Zabilješke

:::tip

Ako se parametar ne postavi (SetVehicleParamsEx se prethodno nije koristio), vrijednost će biti -1 ('unset').

:::

## Srodne Funkcije

- [SetVehicleParamsEx](SetVehicleParamsEx): Postavlja parametre vozila za sve igrače.
