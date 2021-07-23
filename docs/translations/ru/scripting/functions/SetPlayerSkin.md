---
title: SetPlayerSkin
description: Устанавливает скин игрока.
tags: ["player"]
---

## Описание

Устанавливает скин игрока. Скин игрока - это модель персонажа.

| Параметр | Описание                                                     |
| -------- | ------------------------------------------------------------ |
| playerid | ID игрока которому хотите установить скин.                   |
| skinid   | [ID скина](../resources/skins.md) который хотите установить. |

## Возвращаемые данные

1: Функция выполнена успешно

0: Функция не выполнена

Заметьте, что функция выполняется успешно, даже когда значение ID скина неверное (не в пределах 0-311 или равное 74) и установлен скин номер ID 0 (CJ).

## Примеры

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/fireman", true) == 0)
    {
        // Устанавливает скин ID 277 ( скин пожарника ).
        SetPlayerSkin(playerid, 277);
        return 1;
    }
    return 0;
}

SetPlayerSkinFix(playerid, skinid)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        Float:tmpPos[4],
        vehicleid = GetPlayerVehicleID(playerid),
        seatid = GetPlayerVehicleSeat(playerid);

    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
    GetPlayerFacingAngle(playerid, tmpPos[3]);

    // Если значение скина неверное ( меньше 0, или больше 311, или равно 74 ), то ничего не делает и возвращает 0
    if (0 > skinid > 311 || skinid == 74)
    {
        return 0;
    }

    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)
    {
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // убирает заморозку игрока ( не обязательно )
        return SetPlayerSkin(playerid, skinid);
    }
    else if (IsPlayerInAnyVehicle(playerid))
    {
        new
            tmp;

        RemovePlayerFromVehicle(playerid);
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // убирает заморозку игрока ( важно, т.к. запущена анимация выхода из транспорта )
        tmp = SetPlayerSkin(playerid, skinid);
        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128) ? 0 : seatid);
        return tmp;
    }
    else
    {
        return SetPlayerSkin(playerid, skinid);
    }
}
```

## Примечания

:::warning

Известные Баги: Если игроку установлен скин, когда он присел, находится в машине или выполняет определенные анимации, игрок может заморозиться или произойдёт сбой. Это может быть исправлено путём использования TogglePlayerControllable. Для определения положения сидя игрока используется GetPlayerSpecialAction (SPECIAL_ACTION_DUCK). Другие игроки могут поймать крэш, если он в машине или он входит/выходит из транспорта. Установка скина игроку, когда он мёртв может спровоцировать крэш игрокам, находящимся рядом с ним. Перерывается сидение на байках.

:::

## Связанные Функции

- [GetPlayerSkin](GetPlayerSkin.md): Получает значение ID скина игрока.
- [SetSpawnInfo](SetSpawnInfo.md): Установка информации для спавна игрока.
