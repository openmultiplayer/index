# SetPlayerArmour

## Wasf

Ta3ti armor lel player 

| Argument     | el Wasf                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | el Id mta3 el player eli t7eb t7otlou el armor.                                                                                         |
| Float:armour | 9adech t7eb ta3tih armor, tnejem ta3ti akther men 100 armor lel player ama mayodhorch fel game bar.                                     |

## Returns

1: el function t3adet.

0: el function mat3adetch, el player id ghalet.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // ta3ti lel players %100 armor ki yspawniw
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## Notes

:::tip

el function name Armour moch Armor.

:::

:::warning

el number mta3 el armor eli bch t7oto bech yarja3 kemel ma3neha 7ata ki t7ot 50.15 raw bch tet7at 50.

:::

## Related Functions

- [GetPlayerArmour](GetPlayerArmour): Ta3ref 9adech el player 3ando armor.
- [SetPlayerHealth](SetPlayerHealth): ta3ti hp lel player.
- [GetPlayerHealth](GetPlayerHealth): ta3ref 9adech el player 3andou health.
