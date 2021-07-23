---
title: GetVehicleRotationQuat
description: Vraća rotaciju vozila na svim osama kao kvaternion.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća rotaciju vozila na svim osama kao kvaternion.

| Ime       | Deskripcija                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| vehicleid | ID vozila za dobiti njegovu rotaciju.                                             |
| &Float:w  | Float varijabla za pohraniti prvi kvarterionski ugao, proslijeđeno referencom.    |
| &Float:x  | Float varijabla za pohraniti srugi kvarterionski ugao, proslijeđeno referencom.   |
| &Float:y  | Float varijabla za pohraniti treći kvarterionski ugao, proslijeđeno referencom.   |
| &Float:z  | Float varijabla za pohraniti četvrti kvarterionski ugao, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeno vozilo ne postoji.

Rotacija vozila pohranjena je u navedenim varijablama.

## Zabilješke

:::tip

Ne postoji 'set' varijacija ove funkcije; ne možete podesiti rotaciju vozila (osim Z ugla). Ova funkcija može vratiti netačne vrijednosti za nenaseljena vozila. Razlog je taj što se treći red matrice interne rotacije vozila ošteti ako se ažurira dok je nenastanjen.

:::

## Srodne Funkcije

- [GetVehicleZAngle](GetVehicleZAngle): Provjerite trenutni ugao vozila.
- [GetVehicleRotation](GetVehicleRotation): Nabavite rotacijska vozila na XYZ osi.
