# SetPlayerColor

## Wasf

Tekhou el color mta3 el player's name wala el bilp eli fel map, w matekhdem ken mba3d SetPlayerColor
| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| playerid      | el ID mta3 el player eli t7eb tekhou el color te3ou        |   
| color         | el color eli t7eb t7tou lel player                         |



## Returns
el function ma3ndhech returns

## Mithel

```c
nesta3mlou fel hexadecimal noation fel example hetha:
// Red, using hexadecimal notation:
SetPlayerColor(playerid, 0xFF0000FF);

//Red, using decimal notation:
SetPlayerColor(playerid, 4278190335);
```

## Notes

:::tip
El function hethy bech tbadel el color mta3 el player lel ness lkol ( ma3neha ness lkol ychoufou el color hetheka) 7ata ken el color tbadel b SetPlayerMarkerForPlayer.

ken testa3mlha ta7t OnPlayerConnect el player eli badaltlou el color mayrach el color fi TAB.
:::

## Functions tab3in el callback

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer.md): t7ot Marker lel player.
- [GetPlayerColor](GetPlayerColor.md): Tekhou el player color (ma3neha tnejem testa3mlou).
- [ChangeVehicleColor](ChangeVehicleColor.md): tbadel el color mta3 el vehicle.
