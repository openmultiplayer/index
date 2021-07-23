# SetPlayerHealth

## el wasf / chneya el function ta3mel:

ta3ti health lel player.

|---------------------------------------------------------------------------------------------------|
| Esm el argument     | el Wasf                                                                     |
| --------------------|-----------------------------------------------------------------------------|
| playerid            | el id mta3 player eli t7eb tzido el dam                                     |
|---------------------|-----------------------------------------------------------------------------|
| 3dad el dam         | 9adech t7eb tzid dam.                                                       |
|---------------------|-----------------------------------------------------------------------------|

## El Returns

el function t3adet ki tebda el return `1`.

el function mat3adetch, ma3neha el player mahouch mawjoud.ki tebda el return `0`.


## Mithal

```c
//bel code hetha bch nrodou dam el player kemel
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        SetPlayerHealth(playerid, 100.0);
        return 1;
    {
//bel code hetha tna7i el dam lel player w ymout.
    if (!strcmp("/kill", cmdtext, true))
    {
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

##  Notes:

:::tip

ki t7ot el dam mta3 el player 0 ymout. Kan el hp mta3 el player a9al mel 10 wala akther men 98303 el health bar ch ywalli yor3osh (Yemchi w yarja3).

:::

:::warning

el health maynejm ykoun ken 3dad kemel ma3neha ki t7ot 50,15 bch yet3ada 50

:::

## Functions teb3in el callback

-[GetPlayerHealth](GetPlayerHealth.md): tchouf 9adech el player 3andou hp 
-[GetPlayerArmour](GetPlayerArmour.md): tchouf 9adech el player 3andou armour.
-[SetPlayerArmour](SetPlayerArmour.md): Ta3ti Armour lel player.
