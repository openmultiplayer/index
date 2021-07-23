---
title: AddMenuItem
description: Добавляет элемент в меню.
tags: ["menu"]
---

## Описание

Добавляет элемент в меню.

| Параметр| Описание                         |
| ------- | -------------------------------- |
| menuid  | Id меню                          |
| column  | Столбец ( 0 - 1 )                |
| title[] | Текст 		                     |

## Возвращаемые данные

Индекс строки в которую добавлен данный элемент.

## Пример

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Примечания

:::tip

Вызывает крэш при указании неверного menuid. Можно иметь 12 элементов меню (13ый идёт наверх в название правого столбца ( название имеет другой цвет ), 14ый элемент и выше не будет показан вообще). Можно добавить только 2 столбца ( 0 и 1 ). Можно добавить 8 цветовых кодов для 1 элемента (~r~, ~g~ и др.). Максимальная длинна текста элемента 31 символ.

:::

## Связанные функции

- [CreateMenu](CreateMenu.md): Создание меню.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Устанавливает загаловок столбца.
- [DestroyMenu](DestroyMenu.md): Удаляет меню.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Вызывается, когда игрок выбрал строку в меню.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Вызывается, когда игрок закрыл меню.
