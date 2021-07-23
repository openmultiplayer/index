---
título: OnPlayerSelectedMenuRow
descripción: Este callback se llama cuando un jugador selecciona un item de un menú (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Descripción

Este callback se llama cuando un jugador selecciona un item de un menú (ShowMenuForPlayer).

| Nombre   | Descripción                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | El ID del jugador que seleccionó un item en un menú.        |
| row      | El ID de la fila elegida. La primera fila es ID 0.          |

## Devoluciones

Siempre se llama primero en el gamemode.

## Ejemplos

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Menú ejemplo", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("Item 1 Seleccionado");
            case 1: print("Item 2 Seleccionado");
        }
    }
    return 1;
}
```

## Notas

:::tip

El ID del menú no se pasa a este callback. Debes usar GetPlayerMenu para determinar en cuál menú el jugador seleccionó un item.

:::

## Funciones Relacionadas

- [CreateMenu](../functions/CreateMenu): Crear un menú.
- [DestroyMenu](../functions/DestroyMenu): Destruir un menú.
- [AddMenuItem](../functions/AddMenuItem): Añade un item a un menú específico.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Muestra un menú a un jugador.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Oculta un menú a un jugador.
