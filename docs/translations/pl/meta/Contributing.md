---
title: Przyczyń się do rozwoju
description: Jak wnieść swój wkład do SA-MP Wiki i dokumentacji open.mp.
---

Kod źródłowy tej dokumentacji jest dostępny dla każdego, kto chce wnieść jakiekolwiek zmiany! Wszystko czego potrzebujesz to konto na [GitHubie](https://github.com) i trochę wolnego czasu. Nie musisz znać obsługi systemu Git, wszystko możesz zrobić przez wersję przeglądarkową!

Jeżeli chcesz zaopiekować się konkretnym językiem, otwórz PR do pliku [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) i dodaj linię dla katalogu Twojego języka wraz ze swoją nazwą użytkownika.

## Edycja treści

Na każdej stronie widoczny jest przycisk, który przenosi Cię do jej edycji na GitHubie:

![Link „Edit this page” obecny na każdej podstronie wiki](/images/contributing/edit-this-page.png)

Na przykład, kliknięcie go na [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) przeniesie Cię do [tej strony](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md), na której dostępny jest edytor tekstowy umożliwiający wprowadzenie zmian do pliku (zakładając, że jesteś zalogowany do GitHuba).

Wprowadź swoje zmiany i wyślij „Pull Request”, który umożliwi opiekunom Wiki oraz innym członkom społeczności na przegląd Twoich zmian, dyskusję na temat ewentualnych dodatkowych zmian, a ostatecznie ich wdrożenie.

## Dodawanie nowej zawartości

Dodawanie nowej zawartości jest nieco bardziej zawiłe. Możesz to zrobić na dwa sposoby:

### Interfejs GitHub

Gdy przeglądasz katalog na GitHubie, w prawym górnym rogu listy plików widoczny jest przycisk „Add file”:

![Przycisk „Add file”](/images/contributing/add-new-file.png)

Możesz wgrać wcześniej napisany plik języka Markdown lub napisać go bezpośrednio w edytorze tekstowym GitHuba.

Plik _musi_ mieć rozszerzenie `.md` i zawierać Markdown. Po więcej informacji na temat języka Markdown, sprawdź [ten poradnik](https://guides.github.com/features/mastering-markdown/)

Kiedy skończysz, kliknij „Propose new file” – Pull Request zostanie otwarty do przeglądu.

### Git

Jeżeli chcesz użyć systemu Git, wystarczy sklonować repozytorium Wiki komendą:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Otwórz je w swoim ulubionym edytorze. Polecamy Visual Studio Code, ponieważ posiada on świetne narzędzia do edycji i formatowania plików Markdown. Jak możesz zobaczyć, ten plik został napisany przy użyciu Visual Studio Code!

![Podgląd markdown w Visual Studio Code](/images/contributing/vscode.png)

Polecamy także dwie wtyczki, aby uprzyjemnić pracę:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) autorstwa Davida Ansona - ta wtyczka upewnia się, że Twój Markdown jest sformatowany prawidłowo, poprzez zapobieganie składniowym i semantycznym pomyłkom. Nie wszystkie ostrzeżenia są ważne, ale część z nich może pomóc w poprawieniu czytelności. Jeżeli masz jakieś wątpliwości, po prostu zapytaj opiekunów!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) autorstwa zespołu Prettier.js - ta wtyczka będzie automatycznie formatować Twoje pliki Markdown, aby wszystkie utrzymywały jednolitego stylu. Repozytorium Wiki ma kilka ustawień w `package.json`, z których wtyczka powinna skorzystać automatycznie. Upewnij się, że w ustawieniach swojego edytora masz włączoną opcję „Format On Save” – dzięki temu Twoje pliki Markdown będą automatycznie formatowane przy każdym zapisie!

## Uwagi, wskazówki i konwencje

### Linki wewnętrzne

Nie używaj absolutnych URL-ów do wewnętrznych linków. Używaj relatywnych ścieżek.

- ❌

  ```md
  Do użycia z [OnPlayerClickPlayer](https://www.open.mp/docs/translations/pl/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Do użycia z [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` oznacza „przejdź katalog wyżej”, więc jeżeli plik, który edytujesz, znajduje się w katalogu `functions` i linkujesz do `callbacks`, użyj `../`, aby przejść do `scripting/`, a następnie `callbacks/`, aby dostać się do katalogu callbacks. Na końcu podaj nazwę pliku (bez `.md`) callbacka, do którego linkujesz.

### Obrazy

Obrazy trafiają do podkatalogu wewnątrz `/static/images`. Gdy chcesz go wstawić na stronę w `![]()`, używaj po prostu `/images/` jako podstawową ścieżkę (`static` jest tu zbędne, gdyż jest używane tylko w repozytorium).

Jeżeli masz wątpliwości, zajrzyj na inną stronę korzystającą z obrazów i skopiuj kod dowolnego obrazu.

### Metadane

Pierwszą rzeczą w _każdym_ dokumencie tutaj powinny być metadane:

```mdx
---
title: Moja dokumentacja
description: To jest strona o różnych rzeczach oraz burgerach, hura!
---
```

Każda strona powinna posiadać tytuł i opis.

Po pełną listę rzeczy, które mogą trafić pomiędzy `---`, sprawdź [dokumentację Docusaurusa](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Nagłówki

Nie twórz nagłówka poziomu 1 (`<h1>`) używając `#`, ponieważ jest on generowany automatycznie. Twoim pierwszym nagłówkiem _zawsze_ powinien być `##`.

- ❌

  ```md
  # Mój tytuł

  To jest dokumentacja dla...

  # Podrozdział
  ```

- ✔

  ```md
  To jest dokumentacja dla...

  ## Podrozdział
  ```

### Używaj fragmentów `kodu` dla odniesień technicznych

Gdy piszesz tekst zawierający nazwy funkcji, liczby, wyrażenia czy cokolwiek co nie zalicza się do standardowego, pisanego języka, otocz je \`grawisami\`. Ułatwia to rozdzielenie języka opisowego od odniesień do elementów technicznych takich jak nazwy funkcji czy fragmenty kodu.

- ❌

  > Funkcja fopen zawsze zwraca wartość z tagiem File:, nie ma żadnego problemu w tej linii, ponieważ zwracana wartość jest przechowywana w zmiennej również z tagiem File: (należy pamiętać o takiej samej wielkości znaków). Natomiast w następnej linii wartość 4 jest dodana do tej samej zmiennej, a wartość 4 nie posiada żadnego tagu.

- ✔

  > Funkcja `fopen` zawsze zwraca wartość z tagiem `File:`, nie ma żadnego problemu w tej linii, ponieważ zwracana wartość jest przechowywana w zmiennej również z tagiem `File:` (należy pamiętać o takiej samej wielkości znaków). Natomiast w następnej linii wartość `4` jest dodana do tej samej zmiennej, a wartość `4` nie posiada żadnego tagu.

W powyższym przykładzie, `fopen` to nazwa funkcji, a nie polskie słowo, dlatego otoczenie go tagiem `kodu` ułatwia rozróżnienie go od pozostałej zawartości.

Dodatkowo, jeżeli tekst odnosi się do dłuższego fragmentu przykładowego kodu, ułatwia to powiązanie wyrazów z przykładem.

### Tabele

Jeżeli tabela ma nagłówki, trafiają one do jej górnej części:

- ❌

  ```md
  |         |                                          |
  | ------- | ---------------------------------------- |
  | Życie   | Status silnika                           |
  | 650     | Niezniszczony                            |
  | 650-550 | Biały dym                                |
  | 550-390 | Szary dym                                |
  | 390-250 | Czarny dym                               |
  | < 250   | Płonie (eksploduje kilka sekund później) |
  ```

- ✔

  ```md
  | Życie   | Status silnika                           |
  | ------- | ---------------------------------------- |
  | 650     | Niezniszczony                            |
  | 650-550 | Biały dym                                |
  | 550-390 | Szary dym                                |
  | 390-250 | Czarny dym                               |
  | < 250   | Płonie (eksploduje kilka sekund później) |
  ```

## Migracja z SA-MP Wiki

Większość zawartości została przeniesiona, ale jeśli znajdziesz brakującą stronę, skorzystaj z prostego poradnika konwersji zawartości na Markdown.

### Zdobycie kodu HTML

1. Kliknij ten przycisk

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Najeżdżaj na górną lewą część podstrony, na lewy margines lub na róg, aż zobaczysz `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Lub wyszukaj `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Skopiuj cały kod HTML znajdujący się wewnątrz tego elementu

   ![image](/images/contributing/8c7c75cfabad.png)

   Teraz masz _tylko_ kod HTML konkretnej _zawartości_ strony, czyli to co nas interesuje i co możesz przekonwertować na Markdown.

### Konwersja HTML na Markdown

Do konwersji podstawowego kodu HTML (bez tabel) na Markdown, użyj:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Zwróć uwagę, że tabela całkowicie się zepsuła...

### Konwersja tabel HTML na tabele Markdown

Ponieważ powyższe narzędzie nie wspiera tabel, skorzystaj z tego narzędzia:

https://jmalarcon.github.io/markdowntables/

I skopiuj sam element `<table>` do:

![image](/images/contributing/57f171ae0da7.png)

### Porządkowanie

Konwersja prawdopodobnie nie będzie perfekcyjna, więc musisz częściowo uporządkować to samemu. Wtyczki formatujące wypisane wyżej powinny w tym pomóc, ale wciąż będzie trzeba spędzić trochę czasu poprawiając pozostałości ręcznie.

Jeżeli nie masz czasu, nie przejmuj się! Wyślij nieskończoną wersję roboczą, a ktoś inny ją dokończy.

## Umowa licencyjna

Wszystkie projekty open.mp posiadają [umowę licencyjną współtwórcy][https://cla-assistant.io/openmultiplayer/homepage]. To w zasadzie oznacza, że zgadzasz się na wykorzystanie przez nas Twojej pracy i umieszczenie jej pod licencją open-source. Gdy stworzysz swój pierwszy Pull Request, bot CLA-Assistant zamieści link, w którym możesz potwierdzić swoją zgodę.
