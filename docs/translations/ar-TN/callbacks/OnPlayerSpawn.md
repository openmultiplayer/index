---
El 3onwan: OnPlayerSpawn
El wasf: Testa3mel el callback hadha wa9talli player yespawni
tags: ["player"]
---

## Wasf

Testa3mel el callback hadha wa9talli player yespawni (e.g: Wa9talli testa3mel el function ``SpawnPlayer``...)

| Esm el argument     | El wasf                                   |
| --------------------| ------------------------------------------|
| playerid            | El ID mta3 el player eli spawna.         |

## Returns

0 - El callback hadha mahouch bach yet3adda lel filterscripts w mahouch bach ye5dem fel filterscipts kan 3amel ``return 0``

1 - Bach yet3adda lel filterscripts w bach ye5dem fel filterscripts lo5rin kan ta3mel ``return 1``

El callback hadha rahou executed fel filterscripts essa3k

## Mithal

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s e Spawna.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

Ello3ba etnajem etna7ilik 100$ flous kif tespawni 3ala 5ater GTA:SA faha bug

:::

## Functions tab3inha

- [SpawnPlayer](../functions/SpawnPlayer): Tforci player bach yespawni.
- [AddPlayerClass](../functions/AddPlayerClass): Tesna3 class
- [SetSpawnInfo](../functions/SetSpawnInfo): Trigel e spawn info lel player
