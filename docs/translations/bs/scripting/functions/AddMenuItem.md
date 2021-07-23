---
title: AddMenuItem
description: Dodaje stavku/item u određeni meniju.
tags: ["menu"]
---

## Deskripcija

Dodaje stavku/item u određeni meniju.

| Ime     | Deskripcija                             |
| ------- | --------------------------------------- |
| menuid  | ID menija u kojem dodajete stavku/item. |
| column  | Rubrika u koju dodajete stavku/item.    |
| title[] | Naslov nove stavke/itema.               |

## Returns

Indeks reda u koji je dodana ova stavka/item.

## Primjeri

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

## Zabilješke

:::tip

Crashuje kada se proslijedi nevažeći ID menija. Možete imati samo 12 stavki/itema po meniju (13i ide na desnu stranu zaglavlja od imena rubrike (obojeno), 14i i više se neće uopće pojavljivati). možete koristiti samo 2 rubrike (0 i 1). Možete dodati samo 8 kodova boja po jednoj stavci/itemu (~r~, ~g~ itd.). Maksimalna dužina teksta stavke/itema je 31 simbol.

:::

## Srodne Funkcije

- [CreateMenu](CreateMenu.md): Kreira meni.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Postavite zaglavlje za jedan od stupaca u izborniku.
- [DestroyMenu](DestroyMenu.md): Uništi meni.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Pozvano kada igrač selektuje red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Pozvano kada igrač napusti meni.
