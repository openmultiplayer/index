# ChangeVehicleColor

## El-Wasf

tbadel el loun lowel wel theny mta3 el vehicle.

| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| vehicleid     | el Id mta3 el karhba eki t7eb tbadellha el color           |
| color 1       | el color el owel.                                          |
| color 2       | el color el theny.                                         |

## Returns

1- el function t3adet wel color tbadel.
0- El function t3adetch,(el vehicle Id mouch mawjoud)

## Mithel:

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // tbadel el color lowel ak7el wel theny abyedh.
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```
:::tip

Famma vehicles 3andhom juste 1 color w famma vehicles el colors mte3hom maytbadlouch. w famma vehicles 3ndhom 4 colors zouz menhom maynejmouch yetbadlo.

:::

## Functions teb3in el callback

[ChangeVehiclePaintjob](ChangeVehiclePaintjob.md): Tbadel el paintjob mta3 el vehicle.
[OnVehicleRespray](OnVehicleRespray.md): Tetcalla wa9teli el vehicle todkhol fel garage eli ybadel el loun.


