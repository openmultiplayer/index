---
title: Hozzájárulás
description: Hogyan járulhatok hozzá az SA-MP Wiki és az open.mp dokumentációhoz.
---

Ez a dokumentációs forrás bárki számára elérhető, azért hogy hozzá tudjon járulni a változtatásokhoz! Amire szükséged van az egy [GitHub](https://github.com) fiók és egy kevés szabadidő. Valamint ajánlott egy [Notepad++](https://notepad-plus-plus.org/downloads/)-t is beszerezni, de nem kötelező. Nem kell ismerned hozzá a Git-et, mindezt megteheted a webes felületről!

## Tartalom szerkesztése

Minden oldalon található egy gomb, amely a GitHub szerkesztés oldalára vezet:

![Edit this page link present on each wiki page](/images/contributing/edit-this-page.png)

Például, ezen az oldalon [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) erre az [oldal](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md)ra juttat el, ahol egy szövegszerkesztővel módosíthatod a fájlokat (feltéve, hogy be vagy jelentkezve a GitHub-ba).

Végezzd el a szerkesztést, és küldj be egy "Pull Request" ("Húzási kérelem")-et, ez azt jelenti, hogy a Wiki fenntartói és a közösség többi tagja áttekintheti a változtatást, megbeszélheti, hogy szükség van-e további változtatásokra, majd egyesítheti.

## Új tartalom hozzáadása

Új tartalom hozzáadása kissé jobban érintett. Kétféleképpen teheted meg:

### GitHub Felület

Ha egy könyvtárat tallózol a GitHubon, a fájllista jobb felső sarkában található egy Add file ("Fájl hozzáadása") gomb:

![Add file button](/images/contributing/add-new-file.png)

Vagy feltölthetsz egy már írt Markdown fájlt, vagy közvetlenül a GitHub szövegszerkesztőbe írhatod.

A fájlnak `.md` kiterjesztéssel _kell_ rendelkeznie és tartalmaznia kell a Markdown-t. Ha többet szeretnél tudni a Markdownról, olvasd el [ezt az útmutatót](https://guides.github.com/features/mastering-markdown/).

Miután ez megtörtént, nyomd meg a "Propose new file" ("Új fájl javaslata") gombot, és a húzási kérelem megnyílik áttekintésre.

### Git

Ha használni szeretnéd a Git programot, akkor csak annyit kell tenned, hogy klónozod a Wiki-tárat:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Nyisd meg a kedvenc szerkesztődben. Én ajánlom a Visual Studio Code-t, mivel remek eszközökkel rendelkezik a Markdown fájlok szerkesztésére és formázására. Amint láthatod, ezt a Visual Studio Code segítségével írom!

![Visual Studio Code markdown preview](/images/contributing/vscode.png)

Két bővítményt ajánlok az élmény javítása érdekében:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) David Anson által - ez egy olyan kiterjesztés, amely biztosítja, hogy a Markdown formázása megfelelő legyen. Megakadályozza egyes szintaktikai és szemantikai hibákat. Nem minden figyelmeztetés fontos, de néhány segíthet az olvashatóság javításában. Használd a legjobb megítélésed szerint, és ha kétséged vannak, kérdezz meg egy ebben jártas személyt!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Prettier.js Csapat által - ez egy formázó, amely automatikusan formázza a Markdown fájlokat, így azok használata következetes stílusban történik. A Wiki adattárban vannak olyan beállítások, `package.json` amelyeket a bővítménynek automatikusan használnia kell. Ügyeljen arra, hogy engedélyezze a "Format On Save" elemet a szerkesztő beállításaiban, így a Markdown fájlok minden formázáskor automatikusan formázódnak!

## Jegyzetek, tippek és egyezmények

### Belső linkek

Ne használj abszolút URL-eket a webhelyek közötti hivatkozásokhoz. Használj relatív utakat.

- ❌

  ```md
  Az abszolút út [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  A relatív út [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` eszköz "fel megy egy könyvtárat", így ha a fájl amit szerkesztessz benne van a `functions` könyvtárban és a `callbacks`-et akarod linkelni akkor használd a `../` eszközt hogy fel menj a `scripting/` könyvtárba, hogy utána belemenj a `callbacks/` könyvtárba, azután a visszahívás fájlneve (`.md` nélkül) amit linkelni szeretnél.

### Képek

A képek egy alkönyvtárba kerülnek `/static/images`. Amikor összekapcsolod a képet egy `![]()` csak használd ezt `/images/` mint alap útvonal (nincs szükség erre `static`, ez csak az adattárolás miatt kell).

Ha kétségeid vannak, csak olvass el egy másik oldalt, amely képeket használ, és másold át, hogy hogyan működik ott.

### Metaadatok

Az első dolog _bármilyen_ dokumentumról legyen szó, itt kell lennie a metaadatoknak:

```mdx
---
title: A dokumentációm címe
description: A dokumentációm leírása.
---
```

Minden oldalnak tartalmaznia kell címet és leírást.

A teljes listához hogy mi lehet a `---` között, látogass el erre az oldalra [Docusaurus dokumentáció](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).]

### Címsorok

Ne hozd létre a 1. szintű fejlécet (`<h1>`) a `#` használatával, azért mert ez automatikusan létrejön. Az első címed _mindig_ ezzel kezdődjön `##`

- ❌

  ```md
  # A címem

  Ez a dokumentáció a ...

  # Alszakasz
  ```

- ✔

  ```md
  Ez a dokumentáció a ...

  ## Alszakasz
  ```

### Használd a `kód` eszközt a tehnikai hivatkozásokhoz

Ha olyan bekezdést írsz, amely függvényneveket, számokat, kifejezéseket vagy bármit, ami nem szabványos írott nyelv, tartalmaz ilyet, használj ilyen \`fordított idézőjelet\` mint ez. Ez megkönnyíti a nyelvek elkülönítését a dolgok leírásához a hivatkozásoktól a technikai elemekig, például a függvénynevekig és a kódrészletekig.

- ❌

  > A fopen függvény egy File: típusú címkével ad vissza egy értéket, nincs probléma azzal a sorral, mivel a visszatérési érték el van tárolva egy File: típusú címkével ellátott változóba((vegye figyelembe, hogy az esetek is megegyeznek). A következő sorban azonban a 4 érték hozzáadódik a fájlkezelőhöz. A 4-nek nincs címkéje [...]

- ✔

  > A `fopen` függvény egy `File:` típusú címkével ad vissza egy értéket, nincs probléma azzal a sorral, mivel a visszatérési érték el van tárolva egy `File:` típusú címkével ellátott változóba((vegye figyelembe, hogy az esetek is megegyeznek). A következő sorban azonban a `4` érték hozzáadódik a fájlkezelőhöz. A `4`-nek nincs címkéje [...]

A fenti példában az `fopen` függvény neve, nem egy angol szó, ezért a `kód` részlet jelzőkkel körbevéve segít megkülönböztetni más tartalomtól.

Továbbá, ha a bekezdés egy példakód blokkjára utal, ez segít az olvasónak a szavakat társítani a példához.

### Táblázatok

Ha egy táblázat fejléceket tartalmaz, akkor a felső részre kerülnek:

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Health  | Engine Status                        |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

- ✔

  ```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

## Áttérés a SA-MP Wikiből

A tartalom nagy része áthelyezésre került, de ha hiányzó oldalt találsz, íme egy rövid útmutató a tartalom Markdown-fé konvertálásához.

### A HTML megszerzése

Először nyisd meg a fejlesztői eszközt a Ctrl + Shift + I billentyűkombinációval.

1. Kattintson erre a gombra

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Húzd az egérmutatót a wiki főoldalának bal felső sarkába, a bal margóba vagy a sarokba, amíg meg nem jelenik a `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Vagy keress rá (Ctrl + F)`<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Másold ki az Inner HTML-t (Copy -> Inner HTML)

   ![image](/images/contributing/8c7c75cfabad.png)

   Most már _csak_ az oldal tényleges _tartalmának_ HTML kódja van ami minket érdekel, és át konvertálhatod Markdownra.

### HTML konvertálása Markdownra

Az alapvető HTML-ek (táblázatok nélküli) Markdown-ba történő konvertálásához használd:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Figyelem most teljesen elcseszte a táblázotot...

### HTML táblázatok a Markdown táblázatokhoz

Mivel a fenti eszköz nem támogatja a táblázatokat, használja ezt az eszközt:

https://jmalarcon.github.io/markdowntables/

És csak a `<table>` elemet másolja be:

![image](/images/contributing/57f171ae0da7.png)

### Takarítás

Az átalakítás valószínűleg nem lesz tökéletes. Tehát egy kis kézi tisztítást kell végezni. A fent felsorolt ​​formázó kiterjesztések segítenek ebben, de előfordulhat, hogy csak egy kis időt kell töltenie a kézi munkával.

Ha nincs időd, ne aggódj! Küld be a befejezetlen vázlatot, és valaki más folytathatja, ahol abbahagytad!

## Licencszerződés

Minden open.mp projekt rendelkezik [Közreműködői licencszerződéssel][https://cla-assistant.io/openmultiplayer/homepage].Ez alapvetően csak azt jelenti, hogy beleegyezik abba, hogy felhasználja munkáját, és nyílt forráskódú licenc alá helyezi. A "Pull Request" első megnyitásakor a CLA-Assistant bot egy linket tesz közzé, ahol aláírhatja a megállapodást.
