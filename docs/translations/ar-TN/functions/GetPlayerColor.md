# GetPlayerColor

## Wasf

Tekhou el color mta3 el player's name wala el bilp eli fel map, w matekhdem ken mba3d SetPlayerColor
| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| playerid      | el ID mta3 el player eli t7eb tekhou el color te3ou        |



## Returns
0 - ken el player ma3ndouch color wala (player id mouch connected)

## Mithel

```c
// fel SendClientMessage bech nesta3mlou el player color bch na3tiw color lel Message.
SendClientMessage(playerid, GetPlayerColor(playerid), "el message hetha bel color mte3ek :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// el message bech yokhrej :  ''color embedding'' bel colro mta3 el player.
```

## Notes

:::warning

GetPlayerColor bech treturni 0 ken masta3maltech SetPlayerColor 9bal.

:::

## Functions tab3in el callback

- [SetPlayerColor](SetPlayerColor.md): tbadel el color mta3 el player.
- [ChangeVehicleColor](ChangeVehicleColor.md): tbadel el color mta3 el vehicle.
