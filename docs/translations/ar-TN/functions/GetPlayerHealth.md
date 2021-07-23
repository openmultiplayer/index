# GetPlayerHealth

## Wasf

El function hethi tkhalik ta3ref wala el script yekhou 9adeh el player 3andou dam. el function tnejem t3awn ki 3abd y7eb ycheati w yzid damou...

| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| playerid      | el ID mta3 el player.                                      |
| &Float:health | el argument eli yet7at fih el player 9adech 3andou health. |


## Returns

1 - el function t3adet.
0 - el function mat3adetch,(player id mouch connected)

## Mithel

```c
// Trod el player el hp mte3ou 50 kenha a9al.

if (strcmp(cmdtext, "/doctor", true) == 0)
{
    new Float:health;
    GetPlayerHealth(playerid,health);
    if (health < 50.0)
    {
        SetPlayerHealth(playerid, 50.0);
    }
    return 1;
}
```

## Notes

:::warning

El health mta3 el player ki t7oto 255 keyenk 7attitou 0 w kol matzid 1 fou9 el 255 tzid we7ed fel hp mel 0.

:::

## Functions tab3in el callback

- [SetPlayerHealth](SetPlayerHealth.md): Ta3ti health lel player.
- [GetVehicleHealth](GetVehicleHealth.md): Tchouf el hp mta3 el vehicle.
