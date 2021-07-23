---
El 3owan: OnGameModeExit
El wasf: Testa3mel el callback hadha wa9talli el gamemode shuts down (Yetsakar)
tags: []
---

## Wasf

Testa3mel el callback hadha wa9talli el gamemode shuts down (Yetsakar), ki testa3mel gmx wala GameModeExit wala server shuts down normally

## Mithal

```c
public OnGameModeExit()
{
    print("El gamemode ended.");
    return 1;
}
```

## Notes

:::tip

El callback hadha tnajem testa3mlou fel filterscripts bach tchouf idha el gamemode tbadel bel RCON commands wala la kima ``changemode`` wala ``gmx``, w tadbil el gamemode mahouch bach ybadel 7ata chay fel filterscript. wa9talli testa3mel ``OnGameModeExit`` lazem ykoun fibalek anou el game mta3 el players tnajem tbugyy kif enti testa3mel ``RemoveBuildingForPlayer`` function fi ``OnGameModeInit`` w hadha ey najem yekrachi el game mta3 el player. w zada el callback hadha mahouch bach ye5dem kan testa3mel el kill command fi lunix wala tsaker el program ki tenzel 3al ``x`` button

:::

## Functions tab3inha

- [GameModeExit](../functions/GameModeExit): Tsaker el gamemode.
