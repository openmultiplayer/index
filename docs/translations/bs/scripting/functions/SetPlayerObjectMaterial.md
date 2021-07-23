---
title: SetPlayerObjectMaterial
description: Zamijeni teksturu player-objekta sa teksturom drugog modela u igri.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Zamijeni teksturu player-objekta sa teksturom drugog modela u igri.

| Ime           | Deskripcija                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid      | ID igrača za kojeg je objekat povezan/asociran.                                                                                                  |
| objectid      | ID objekta za zamijeniti teksturu.                                                                                                               |
| materialindex | Index materijala na objektu za zamijeniti (od 0 do 15)                                                                                           |
| modelid       | ID modela na kome se nalazi zamjenska tekstura. Koristite 0 za alfa. Koristite -1 za promjenu boje materijala bez mijenjanja postojeće teksture. |
| txdname       | Ime txd fatoteke koja sadrži zamjensku teksturu (koristi "none" ako nije potrebno)                                                               |
| texturename   | Ime teksture za koristiti kao zamjensku (koristi "none" ako nije potrebno)                                                                       |
| materialcolor | Boja objekta za postaviti, kao cijeli broj ili hex u ARGB formatu. Korištenjem 0 čuva trenutnu boju materijala.                                  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext,"/objmat",true))
    {
        new
            Float:X, Float:Y, Float:Z,
            myObject;

        GetPlayerPos(playerid, X, Y, Z);
        myObject = CreatePlayerObject(playerid, 19371, X, Y, Z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Mijenja teksturu našeg player-objekta sa teksturom modela 19341
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Vertex (vrhovno) osvjetljenje objekta će nestati ako se promijeni boja materijala.

:::

:::warning

MORAŠ koristiti ARGB format boje, ne RGBA kao u client porukama itd.

:::

## Srodne Funkcije

- [SetObjectMaterial](SetObjectMaterial): Zamijeni teksturu objekta sa teksturom drugog modela iz igre.

## Filterskripte koje podržavaju teksturisanje/text

- Ultimate Creator od Nexius
- Texture Studio od \[uL\]Pottus
- Fusez's Map Editor od RedFusion
- Map Editor I od adri1
