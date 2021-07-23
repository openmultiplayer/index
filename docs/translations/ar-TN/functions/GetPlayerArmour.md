# GetPlayerArmour

## El-Wasf

Ta3ref 9adech el player 3andou armor.

| Argument      | el wasf                                                    |
| ------------- | -----------------------------------------------------------|     
| playerid      | el ID mta3 el player.                                      |
| &Float:Armor  | el varriable eli yet7at fih el player 9adech 3andou Armor  |

## Returns

1- el function t3adet.
0- El function t3adetch, el player id ghalet.(mouch connected el player)

## Mithel:

```c
new
    Float:armour,
    string[40];
GetPlayerArmour(playerid, armour);
format(string, sizeof string, "SERVER: Your armour is %0.f percent", armour);
SendClientMessage(playerid, 0xFFFFFFAA, string);
```
:::warning

El Armour points akther 7aja 255 w kol matzid we7ed 3al 255 tarja3 lel 0 w tebda tzid fi we7ed. mithel: 255 = 0 / 256 = 1 / 257 = 2

El Armour points ki ye7atou bel fasel yarj3 3dad kemel. ken t7ot 50,15 ray bech tet3ada 50.

:::

## Functions teb3in el callback

[SetPlayerArmour](SetPlayerArmour.md): Ta3ti armour lel player.
[GetPlayerHealth](GetPlayerHealth.md): Ta3ref health lel player.
[GetVehicleHealth](GetVehicleHealth.md): Ta3ref el hp mta3 el vehicle.

