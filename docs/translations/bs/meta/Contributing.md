---
title: Doprinos
description: Kako doprinijeti SA-MP Wiki i open.mp dokumentaciji.
---

Ovaj izvor dokumentacije otvoren je za sve za doprinos promjenama! Sve što trebate je [GitHub](https://github.com) nalog i malo slobodnog vremena. Čak ne morate da znate Git, sve to možete uraditi preko web sučelja!

Ako želite pomoći u održavanju određenog jezika, otvorite _pull request_(PR) na [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) fajl i dodajte novu liniju sa direktorijumom vašeg jezika sa vašim korisničkim imenom.

## Uređivanje Sadržaja

Na svakoj stranici nalazi se dugme koje vas dovodi na GitHub stranicu za uređivanje:

![Uredi ovu stranicu](/images/contributing/edit-this-page.png)

Naprimjer, Ukoliko kliknete ovo dugme na [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) odvesti će vas na [ovu stranicu](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) koji vam nudi uređivač teksta kako biste mogli napraviti promjene u fajlu (Pod pretpostavkom da ste prijavljeni na vaš GitHub račun).

Uredi ga i postavi "Pull Request" , to znači da će Wiki održavatelji i ostali članovi zajednice pregledati vašu izmjenu, diskutovati o tome da li su potrebne dodatne izmjene i onda spojiti to.

## Dodavanje Novog Sadržaja

Dodavanje novog sadržaja je malo više komplicirano. Možete to uraditi na dva načina:

### GitHub Sučelje

Kada pregledavate direktorijum na GitHub-u, Tu se nalazi "Dodaj fajl" (Add File) dugme u gornjem desnom ćošku od liste fajlova:

![Dodaj fajl dugme](/images/contributing/add-new-file.png)

Možete prenijeti MarkDown fajl koji ste već prethodno napisali ili ga napisati u GitHub tekst uređivaču.

Fajl _mora_ imati `.md` nastavak i sadržavati MarkDown. Za više informacija o MarkDown-u, provjerite [ovaj vodič](https://guides.github.com/features/mastering-markdown/).

Kada je to gotovo, kliknite "Predloži novi fajl" (Propose new file) i Pull Request će biti otvoren za pregled.

### Git

Ukoliko želite da koristite Git, sve što trebate jeste da klonirate Wiki repositorij sa:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Otvorite ga u vašem omiljenom text editoru. Preporučujem Visual Studio Code jer ima odličnih alata za uređivanje i formatiranje Markdown fajlova. Kao što možete da vidite, ja pišem ovo koristeći Visual Studio Code!

![Visual Studio Code markdown pregled](/images/contributing/vscode.png)

Predlažem dva produžetka (ekstenzije) za bolje iskustvo:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) izradio: David Anson - ovo je produžetak (ekstenzija) koja osigurava da je vaš MarkDown korektno formatiran. To sprečava neke sintaksičke i semantičke greške. Nisu sva upozorenja važna, ali neka mogu pomoći za poboljšanje čitljivosti. Koristite najbolju presudbu a ako se dvoumite, samo pitajte recenzenta.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) izradili: Prettier.js Team - Ovo je formater koji će automatski fprmatirati vaše Markdown fajlove tako da svi koriste dosljedan stil. Wiki Repository ima nekoliko podešavanja u svome `package.json` koje će ekstenzija automatski koristiti. Budite sigurni da omogućite "Formatiranje Pri Čuvanju" (Format On Save) u postavkama vašeg uređivača tako da vaši Markdown fajlovi butu automatski formatirani svaki put kada ih sačuvate.

## Zabilješke, Savjeti i konvencije

### IInterne Veze

Ne koristite apsolutne URL-ove za internetske veze. Koristite relativne puteve.

- ❌

  ```md
  Za upotrebu sa [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Za upotrebu sa [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` znači "idi gore za jedan direktorijum" (go up one directory) tako da ako je fajl kojeg editujete unutar `functions` direktorijumu a vi povezujete za `callbacks` koristite `../` da idete gore na `scripting/` zatim `callbacks/` kako biste ušli u callbacks direktorijum, zatim ime fajla (bez `.md`) kojeg želite povezati.

### Slike

Slike idu unutar poddirektorija u `/static/images`. Nakon što povežete sliku u `![]()` samo koristite `/images/` kao osnovni put (path) (nema potrebe za `static` to je samo za repositorij).

Ako ste u dilemi, pročitajte drugu stranicu koja koristi slike i kopirajte kako je tu urađeno.

### Metadata

prva stvar u _bilo kojem_ dokumentu ovdje trebala bi biti metadata:

```mdx
---
title: Moja Dokumentacija
description: Ovo je stranica o stvarima i burgerima, yay!
---
```

Svaka stranica bi trebala sadržati naslov (title) i deskripciju (description)

Za punu listu šta sve može ići između `---`, provjerite [Docusaurus dokumentaciju](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Naslovi

Ne kreirajte nivo 1 naslov (`<h1>`) sa `#` kako je već samo generirano. Vaš prvi naslov bi _uvijek_ trebao biti `##`

- ❌

  ```md
  # Moj Naslov

  Ovo je dokumentacija za ...

  # Pododjeljak
  ```

- ✔

  ```md
  Ovo je dokumentacija za ...

  ## Pododjeljak
  ```

### Koristi `Kod` Isječke Za Tehničke Reference

Kada pišete paragraf koji sadrži ime, brojeve, izraze ili bilo šta drugo za funkcije što nije pisano standardnim jezikom kojim pišete, okruži ih sa \`backticks\` kao ovdje. To olakšava razdvajanje jezika za opisivanje stvari od referenci na tehničke elemente kao što su imena funkcija i dijelovi koda.

- ❌

  > fopen funkcija će vratiti vrijednost sa tagom File:, nema problema u toj liniji jer se povratna vrijednost pohranjuje u varijablu također sa tagom File: (imajte na umu da su i slučajevi isti). Kako god na sljedećoj liniji vrijednost 4 je dodana privremenoj referenci (file handle). 4 nema taga [...]

- ✔

  > `fopen` funkcija će vratiti vrijednost sa tagom `File:`, nema problema u toj liniji jer se povratna vrijednost pohranjuje u varijablu također sa tagom `File:` (imajte na umu da su i slučajevi isti). Kako god na sljedećoj liniji vrijednost `4` je dodana privremenoj referenci (file handle). `4` nema taga

U gornjem primjeru, `fopen` je ime funkcije, ne riječ na Bosanskom jeziku, tako da okružujući ga `code` pomaže razlikovati ga od drugog sadržaja.

Također, ako paragraf upiućuje na neki blok primjera koda, to pomaže čitaču da asocira riječi sa primjerom.

### Tabele

Ako tabela ima naslove, onda ide na prvo mjesto

- ❌

  ```md
  |          |                                                      |
  | -------- | ---------------------------------------------------- |
  | Zdravlje | Stanje Motora                                        |
  | 650      | Neoštećen                                            |
  | 650-550  | Bijeli dim                                           |
  | 550-390  | Sivi dim                                             |
  | 390-250  | Crni dim                                             |
  | < 250    | Zapaljeno (eksplodirati će nekoliko sekundi kasnije) |
  ```

- ✔

  ```md
  | Zdravlje | Stanje motora                                        |
  | -------- | ---------------------------------------------------- |
  | 650      | Neoštećen                                            |
  | 650-550  | Bijeli dim                                           |
  | 550-390  | Sivi dim                                             |
  | 390-250  | Crni dim                                             |
  | < 250    | Zapaljeno (eksplodirati će nekoliko sekundi kasnije) |
  ```

## Migracije sa SA-MP Wiki

Većina sadržaja je premještena, ali ako pronađete stranicu koja fali, ovdje možete pronaći kratki vodić kako da konvertujete sadržaj u Markdown.

### Uzimanje HTML-a

1. Kliknite ovo dugme

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Zadržite pokazivač u gornjem lijevom uglu glavne wiki stranice, na lijevoj margini ili uglu, dok ne vidite `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Ili tražite `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Kopirajte unutrašnji HTML tog elementa ![image](/images/contributing/8c7c75cfabad.png)

   Sada imate _samo_ HTML kod pravog _sadržaja_ stranice, stvari koje nas zanimaju, i možete ih konvertovati u Markdown.

### Konvertovanje HTML-a u Markdown

Za konvertovanje osnovnog HTML-a (bez tabela) u Markdown koristite:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Primijetite sada da je potpuno zeznuo tablicu...

### HTML Tablice u Markdown Tablice

S obzirom da prethodni alat ne podržava tablice, koristite ovaj:

https://jmalarcon.github.io/markdowntables/

I kopirajte samo `<table>` elemente u:

![image](/images/contributing/57f171ae0da7.png)

### Čišćenje

Pretvaranje vjerovatno neće biti perfektno. Stoga ćete morati uraditi malo čišćenje. Formatiranje ekstenzija koje su popisane gote će vam pomoći oko toga ali ćete možda opet morati provesti neko vrijeme manuelno raditi.

Ako nemate vremena, ne brinite! Predajte nedovršenu skicu i neko drugi je može preuzeti gdje ste vi stali.

## Ugovor o Licenci

Svi open.mp projekti imaju [Ugovor o Licenci Za Saradnike][https://cla-assistant.io/openmultiplayer/homepage]. Ovo zapravo znači da vi pristajete na to da mi koristimo vaš radi i da ga stavimo pod "open-source" licencu (da ju svako može preuzeti i editovati). Kada otvorite Pull Request prvi put, CLA-Assistant bot će postaviti link gdje možete potpisati ugovor.
