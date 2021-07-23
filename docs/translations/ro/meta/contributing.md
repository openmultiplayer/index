---
title: Contribuire
description: Cum să contribui la SA-MP Wiki și la documentația open.mp
---

Această sursă de documentare este deschisă pentru oricine vrea să contribuie cu modificări! Tot ce aveți nevoie este de un cont [GitHub](https://github.com) și ceva timp liber. Nici nu trebuie să cunoașteți Git, puteți face totul din interfața web!

Dacă doriți să ajutați la menținerea unei limbi specifice, deschideți un PR împotriva fișierului [CODEOWNERS](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) și adăugați o linie pentru directorul dvs. de limbă cu numele dvs. de utilizator.

## Editarea conținutului

În fiecare pagină, există un buton care vă duce la pagina GitHub pentru editare:

![Edit this page](/images/contributing/edit-this-page.png)

De exemplu, făcând clic pe aceasta pe [SetVehicleAngularVelocity](https://www.open.mp/docs/scripting/functions/SetVehicleAngularVelocity) vă duce la [această pagină](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) care vă prezintă un editor de text pentru a face modificări la fișier (presupunând că sunteți conectat la GitHub).

Efectuați modificarea și trimiteți un „Pull Request”, aceasta înseamnă că gestionarii Wiki și alți membri ai comunității vă pot examina modificarea, discuta dacă are nevoie de modificări suplimentare și apoi o pot combina.

## Adaugarea unui continut nou:

Adăugarea de conținut nou este puțin mai implicată. Puteți face acest lucru în două moduri:

### Interfata GitHub

Când răsfoiți un director pe GitHub, există un buton „Add File” în colțul din dreapta sus al listei de fișiere:

![Add file](/images/contributing/add-new-file.png)

Puteți încărca fie un fișier Markdown pe care l-ați scris deja, fie îl puteți scrie direct în editorul de text GitHub.

Fișierul _trebuie_ să aibă o extensie `.md` și să conțină Markdown. Pentru mai multe informații despre Markdown, consultați [acest ghid](https://guides.github.com/features/mastering-markdown/).

Odată ce ați terminat, apăsați „Propose new file” și un Pull Request va fi deschisă pentru examinare.

### Git

Dacă doriți să utilizați Git, tot ce trebuie să faceți este să clonați depozitul Wiki cu:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Deschide-l în editorul tău preferat. Recomand Visual Studio Code, deoarece are unele instrumente excelente pentru editarea și formatarea fișierelor Markdown. După cum puteți vedea, scriu acest lucru folosind Visual Studio Code!

![Visual Studio Code markdown preview](/images/contributing/vscode.png)

Vă recomandăm două extensii pentru a vă îmbunătăți experiența:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) de David Anson - aceasta este o extensie care vă asigură că Markdown-ul dvs. este formatat corect. Previne unele greșeli sintactice și semantice. Nu toate avertismentele sunt importante, dar unele pot ajuta la îmbunătățirea lizibilității. Folosiți cea mai bună judecată și, dacă aveți dubii, întrebați un recenzor!

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) de echipa Prettier.js - acesta este un formatator care vă va forma automat fișierele Markdown, astfel încât toate să folosească un stil consistent. Depozitul Wiki are câteva setări în „package.json” pe care extensia ar trebui să le utilizeze automat. Asigurați-vă că activați „Format On Save” în setările editorului, astfel încât fișierele dvs. Markdown să fie formatate automat de fiecare dată când salvați!

## Notite, Trucuri si conventii

### Link-uri interne

Nu utilizați adrese URL absolute pentru link-uri inter-site. Folosiți căi relative.

- ❌

  ```md
  Pentru a fi folosit cu [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Pentru a fi folosit cu [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

  `../` înseamnă „mergeți într-un director”, deci dacă fișierul pe care îl editați se află în directorul `functions` și vă conectați la „ callbacks ”, utilizați`../`pentru a merge la`scripting /`apoi`callbacks /`pentru a intra în directorul callbacks, apoi numele fișierului (fără`.md`) al callback-ului pe care doriți să-l legați.

  ### Imagini

  Imaginile intră într-un subdirector din interiorul `/ static / images`. Apoi, atunci când conectați o imagine într-un `! [] ()` Pur și simplu utilizați `/ images /` ca cale de bază (nu este nevoie de `static`, care este doar pentru depozit).

  Dacă aveți dubii, citiți o altă pagină care folosește imagini și copiați cum se face acolo.

  ### Metadata

  Primul lucru din _orice_ document ar trebui să fie metadatele:

  ```mdx
  ---
  title: My Documentation
  description: This is a page about stuff and things and burgers, yay!
  ---
  ```

  Orice pagina ar trebui să includă un titlu și o descriere.

  Pentru o listă completă a ceea ce poate merge între `---`, consultați [documentația Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

  ### Titluri

  Nu creați un titlu de nivel 1 (`<h1>`) cu `#` deoarece acesta este generat automat. Primul dvs. titlu ar trebui să fie întotdeauna `##`

  - ❌

  ```md
  # My Title

  This is documentation for ...

  # Sub-Section
  ```

- ✔

  ```md
  This is documentation for ...

  ## Sub-Section
  ```

  ### Utilizați fragmentele `Code` pentru referințe tehnice

  Când scrieți un paragraf care conține nume de funcții, numere, expresii sau orice altceva care nu este un limbaj scris standard, înconjurați-le cu astfel de \`backticks\`. Acest lucru face mai ușoară separarea limbajului pentru descrierea lucrurilor de referințe la elemente tehnice, cum ar fi numele funcțiilor și piesele de cod.

  - ❌

  > The fopen function will return a value with a tag of type File:, there is no problem on that line as the return value is being stored to a variable also with a tag of File: (note the cases are the same too). However on the next line the value 4 is added to the file handle. 4 has no tag [...]

- ✔

  > The `fopen` function will return a value with a tag of type `File:`, there is no problem on that line as the return value is being stored to a variable also with a tag of `File:` (note the cases are the same too). However on the next line the value `4` is added to the file handle. `4` has no tag

  În exemplul de mai sus, `fopen` este un nume de funcție, nu un cuvânt în limba engleză, așa că înconjurarea acestuia cu marcatori de fragment `code` ajută la deosebirea acestuia de celălalt conținut.

  De asemenea, dacă paragraful se referă la un bloc de cod de exemplu, acest lucru îl ajută pe cititor să asocieze cuvintele cu exemplul.

  ### Tabele

  Dacă un tabel are titluri, acestea trec în partea de sus:

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

## Migrarea de pe SA-MP Wiki

Majoritatea conținutului a fost mutat, dar dacă găsiți o pagină care lipsește, iată un scurt ghid pentru conversia conținutului în Markdown.

### Obținerea codului HTML

1. Click pe acest buton:

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Plasați cursorul în partea stângă sus a paginii principale wiki, în marginea stângă sau în colț până când vedeți `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Sau cautati pentru `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Copiați HTML-ul interior al acelui element

   ![image](/images/contributing/8c7c75cfabad.png)

   Acum aveți _numai_ codul HTML pentru _contenutul_ real al paginii, lucrurile care ne interesează și îl puteți converti în Markdown.

### Conversia HTML in Markdown

Pentru conversia HTML de bază (fără tabele) la Markdown utilizați:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Observă acum că se distrug tabelele ...

### Tabelele HTML către tabelele de reducere

Deoarece instrumentul de mai sus nu acceptă tabele, utilizați acest instrument:

https://jmalarcon.github.io/markdowntables/

Și copiați doar elementul `<table>` în:

![image](/images/contributing/57f171ae0da7.png)

### Curatare

Conversia probabil că nu va fi perfectă. Deci va trebui să faceți un pic de curățare manuală. Extensiile de formatare enumerate mai sus ar trebui să vă ajute, dar este posibil să fiți nevoit să petreceți doar timp făcând lucrări manuale.

Dacă nu ai timp, nu-ți face griji! Trimiteți o schiță neterminată și altcineva poate ridica locul unde ați rămas!

## Acord de licențiere

Toate proiectele open.mp au un [Acord de licență pentru colaboratori][https://cla-assistant.io/openmultiplayer/homepage]. Acest lucru înseamnă doar că sunteți de acord să ne permiteți să vă folosim lucrarea și să o puneți sub o licență open-source. Când deschideți o cerere de extragere pentru prima dată, botul CLA-Assistant va posta un link unde puteți semna acordul.
