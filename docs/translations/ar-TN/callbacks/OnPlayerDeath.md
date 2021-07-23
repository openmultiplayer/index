---
el 3onwan : OnPlayerDeath
el Wasf: Testa3mel el callback hadha wa9talli player ymout yenta7r wala yo9tlouh.
tags: ["player"]
---
## Wasf

Testa3mel el callback hadha wa9talli player ymout yenta7r wala yo9tlouh.

## Arguments
|---------------------------------------------------------------------------------------------------|
| Esm el argument     | el Wasf                                                                     |
| --------------------|-----------------------------------------------------------------------------|
| playerid            | El id mta3 el player eli meet.                                              |
|---------------------|-----------------------------------------------------------------------------|
| killerid            | El id mta3 el player eli 9tal wala `INVALID_PLAYER_ID` ken mafamech killer. |
|---------------------|-----------------------------------------------------------------------------|
| Reason              | El id mta3 el reason eli met bih.                                           |
|---------------------|-----------------------------------------------------------------------------|

## Returns
0 - El callback hadha mahouch bach yet3adda lel filterscripts w mahouch bach ye5dem fel filterscipts kan 3amel ``return 0``
1 - Bach yet3adda lel filterscripts w bach ye5dem fel filterscripts lo5rin kan ta3mel ``return 1``
Kan 3andek filterscript, El callback bech yet9ra fel filterscript 9bal.

## Mithel:

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, reason)
{
    SendDeathMessage(killerid, playerid, reason); // tab3eth el kill fel kill log eli tal9ah 3al ymin el screen.

    // tchouf ken el killer id s7i7 wala le. ma3neha fi 7alet enou el killer khraj el id hetheka ywali invalid.
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }
  
    PlayerDeaths[playerid] ++;
    return 1;
}

```

## Astuces

> :::tip 
>
> el reason mta3 el deaths eli sbabhom nar (ya3ni el player yet7ra9 b2ay tari9a)el id mte3hom ID 37 (mathalan player ymout b flame thrower)
> 
> el reason mta3 ay mouta fiha tfargi3a kima (RPG, 9onbla, ...) el ID mta3 el reason ID 51
>
> Lezem dima tet2aked eli el `killerid` s7i7 9bal matesta3mlou fi ay 7aja. bech tet2akd testa3mel `INVALID_PLAYER_ID`.
>
> `playerid` el wa7id eli ynejem yet3adalou el callback hetha.(bech twa9ef el Fake death)
>
> :::

> :::warning
>
> Lezem dima tet2aked eli el `killerid` s7i7 9bal matesta3mlou fi ay 7aja. bech tet2akd testa3mel `INVALID_PLAYER_ID`., sinon el script ynejem yetcrasha.
> :::


## Functions teb3in el callback:


- [SendDeathMessage](../functions/SendDeathMessage): tab3eth el kill fel kill log eli tal9ah 3al ymin el screen.
- [SetPlayerHealth](../functions/SetPlayerHealth): ta3ti dam lel player.

