---
title: GetVehicleModelInfo
description: Dohvatite informacije o određenom modelu vozila, poput veličine ili položaja sjedala.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvatite informacije o određenom modelu vozila, poput veličine ili položaja sjedala.

| Ime          | Deskripcija                         |
| ------------ | ----------------------------------- |
| vehiclemodel | Model vozila za dobiti informacije. |
| infotype     | Tip informacije za dobiti.          |
| &Float:X     | Float za pohraniti X vrijednost.    |
| &Float:Y     | Float za pohraniti Y vrijednost.    |
| &Float:Z     | Float za pohraniti Z vrijednost.    |

## Returns

Informacije vozila su pohranjene u navedenim varijablama.

## Primjeri

```c
new
    Float: x, Float: y, Float: z;
//Dobij veličinu modela 411 (Infernus)
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);
//Ispiši "infernus je širok 2.3m, 5.7m dug i visok 1.3m" u konzolu
printf("infernus je širok %.1fm, %.1fm dug i visok %.1fm", X, Y, Z);
```

## Srodne Funkcije

- [GetVehicleModel](GetVehicleModel): Dobij ID modela vozila.
