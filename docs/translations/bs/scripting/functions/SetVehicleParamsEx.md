---
title: SetVehicleParamsEx
description: Postavlja parametre vozila za sve igrače.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja parametre vozila za sve igrače.

| Ime       | Deskripcija                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| vehicleid | ID vozila za postaviti parametre.                                                       |
| engine    | Status motora. 0 - Ugašen, 1 - Upaljen.                                                 |
| lights    | Status svjetla. 0 - Ugašena, 1 - Upaljena.                                              |
| alarm     | Status alarma vozila. Ako je uključen, alarm počinje. 0 - Ugašen, 1 - Upaljen.          |
| doors     | Status zaključavanja vrata. 0 - Otključana, 1 - Zaključana.                             |
| bonnet    | Status haube (hood). 0 - Zatvorena, 1 - Otvorena.                                       |
| boot      | Status gepeka (boot). 0 - Zatvoren, 1 - Otvoren.                                        |
| objective | Omogući/onemogući ciljnu (objective) strelicu iznad vozila. 0 - Onemogući, 1 - Omogući. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da vozilo ne postoji.

## Primjeri

```c
// Na vrhu naše skripte, deklarišemo globalnu varijablu
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {-1, ...};

// Ako postavljate jedan parametar, trebali biste dobiti trenutne parametre kako se ne bi SVE promijenili
new
    engine, lights, alarm, doors, bonnet, boot, objective;

// Negdje gdje kreirate vozilo..
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // SAMO parametar motora je promijenjen u VEHICLE_PARAMS_ON (1)

// Funkcija
SetVehicleParamsEx_Fixed(vehicleid, &engine, &lights, &alarm, &doors, &bonnet, &boot, &objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // Ubij tajmer, resetirajte identifikator tajmera, a zatim ga ponovo pokrenite ako je već bio pokrenut
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = -1;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        engine, lights, alarm, doors, bonnet, boot, objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    // Reset the timer identifier
    gVehicleAlarmTimer[vehicleid] = -1;
}
```

## Zabilješke

:::tip

Alarm se neće resetirati po završetku, morat ćete ga resetirati sami pomoću ove funkcije. Svjetla rade i danju (samo kada je omogućen ManualVehicleEngineAndLights).

:::

## Srodne Funkcije

- [GetVehicleParamsEx](GetVehicleParamsEx): Dobij parametre vozila.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Postavi parametre vozila za igrača.
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Ažurirajte štetu na vozilu.
