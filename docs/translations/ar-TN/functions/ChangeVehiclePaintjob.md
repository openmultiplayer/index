# ChangeVehiclePaintjon

## Wasf

Tbadel el paintjob mta3 el vehicle.

| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| vehicleid     | el ID mta3 el vehicle eli bech tbadlelha el paintjob       |
| paintjob id   | El id mta3 el paintjob eli bech t7otha fel vehicle         |



## Returns
1 - dima tet3ada succeed 7ata ken el vehicle id mahech mawjouda.

## Mithel

```c
new rand = random(3); // el number bech ykoun ya 0 ya 1 ya 2.
ChangeVehicleColor(GetPlayerVehicleID(playerid),1,1); // trodha el vehicle bydha 9bal bech matsirech problem.
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // tbadel el paintjob mta3 el vehicle eli rekebha el player l 0 wala 1 wala 2
```

## Notes

:::warning

Ken el Vehicle Color = ak7el el paintjob mahech bech todher. lezem trodha bydha 9bal bech maysirouch problem.

bech trodha bydha: ChangeVehicleColor(vehicleid,1,1);

:::

## Functions tab3in el callback

- [OnVehiclePaintjob](OnVehiclePaintjob.md): tetcalla wa9teli el player ybadel el paintjob.
- [ChangeVehicleColor](ChangeVehicleColor.md): tbadel el vehicle color.
