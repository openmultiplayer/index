---
title: SetVehicleNumberPlate
description: Postavite registarsku tablicu vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Postavite registarsku tablicu vozila.

| Ime         | Deskripcija                                          |
| ----------- | ---------------------------------------------------- |
| vehicleid   | ID vozila za postaviti registarsku tablicu.          |
| numberplate | Tekst koji će biti prikazan na registarskoj tablici. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
new
    vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```

## Zabilješke

:::tip

Ova funkcija nema internu provjeru grešaka. Ne dodjeljujte prilagođene registarske tablice vozilima bez tablica (čamci, avioni, itd.) Jer će to rezultirati nekim nepotrebnim vremenom obrade na klijentu. Da bi promjene stupile na snagu, vozilo se mora ponovno mrijestiti ili reproducirati. Na svakoj tablici postoji ograničenje od 32 znaka (uključujući ugrađene boje). Dužina teksta koja se može vidjeti na pločici s brojevima je oko 9 do 10 znakova, a više znakova uzrokovat će razdvajanje teksta. Neki modeli vozila imaju unazad registarsku tablicu, npr. Boxville (498) (kao alternativu ovom vozilu možete koristiti model vozila ID 609, koji je duplicirani Boxville (zvan Boxburg), ali s redovnom tablicom). Ova funkcija radi samo u verzijama 0.2.1, 0.2.2, 0.2x i 0.3c (i novije).

:::

:::tip

Na tekstu pločice možete koristiti ugrađivanje boja.

:::

## Srodne Funkcije

- [SetVehicleToRespawn](SetVehicleToRespawn): Respawnuj vozilo.
- [ChangeVehicleColor](ChangeVehicleColor): Postavi boju vozila.
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Promijeni paintjob na vozilu.
