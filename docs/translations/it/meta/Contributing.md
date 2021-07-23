---
titolo: contribuire
descrizione: Come contribuire alla documentazione della Wiki di SA-MP e open.mp
---

Questa documentazione è open-source per chiunque voglia contribuire! Basta solamente un account [GitHub](https://github.com) e del tempo libero. Non hai nemmeno bisogno di conoscere il linguaggio Git, puoi direttamente contribuire dall'interfaccia web!

Se vuoi mantenere una specifica lingua apri una pull request ai [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) del file e aggiungi una linea con la directory della lingua accompagnato al tuo username.

## Modifica dei contenuti

Su ogni pagina, vi è un bottone che porta alla pagina di GitHub per poterne modificare il contenuto:

!['Modifica questa pagina' link presente su ogni pagina della wiki](/images/contributing/edit-this-page.png)

Per esempio, cliccando questo sulla funzione [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) ti porterà a [questa pagina](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) che presenta un text editor per poter effettuare modifiche ad un file (assumendo il fatto che tu sia loggato su GitHub).

Fai la tua modifica e invia una "Pull request" ciò significa che i mantenitori della wiki e gli altri membri della community potranno revisionare le tue modifiche, discutere qualora vi sia il bisogno di ulteriori modifiche ed effettuare il merge.

## Aggiungere nuovi contenuti

Aggiungere nuovi contenuti è un po' più complicato. Puoi farlo in due maniere:

### Interfaccia GitHub

Quando navighi su una directory su Github, troverai un pulsante "Add file" nell'angolo in alto a destra della lista file:

![Bottone 'Add file'](/images/contributing/add-new-file.png)

Vi è anche la possibilità di poter uploddare un file Markdown che hai già scritto oppure scriverlo direttamente nel text editor di GitHub.

Il file deve avere l'estensione `.md` e contenere Markdown. Per ulteriori informazioni sul Markdown dai un'occhiata a [questa guida](https://guides.github.com/features/mastering-markdown/).

Dopo aver concluso, clicca su "Propose new file" e una Pull Request verrà aperta per effettuare la revisione del codice.

### Git

Se vuoi usare Git, tutto quello che devi fare è clonare la repository della Wiki con la bash:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Ora potrai aprire la repository nel tuo editor di testo preferito. Raccomando personalmente Visual Studio Code dato che ha degli ottimi tools per editare e formattare i file Markdown. Come puoi vedere, sto scrivendo questa documentazione usando Visual Studio Code!

![Anteprima Markdown Visual Studio Code](/images/contributing/vscode.png)

Raccomando due estensioni per un'esperienza migliore:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) di David Anson - Questa estensione si assicura del fatto che il tuo Markdown sia formattato in maniera corretta. Previene errori di sintassi e semantica. Non tutti i warnings sono importanti ma alcuni possono aiutare a migliorare la leggibilità del codice. Usa il miglior strumento di valutazione e se hai un dubbio chiedi ad un reviewer!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) creata dal team Prettier.js - Prettier.js formatterà automaticamente i tuoi file Markdown automaticamente cosicché tutto il testo usi uno stile coerente. La repository della wiki ha alcune impostazioni nel suo file `package.json` che l'estensione dovrebbe usare in modo autonomo. Assicurati di abilitare "Format On Save" nelle impostazioni dell'editor così i tuoi file Markdown verranno automaticamente formattati ogni volta che salvi il file!

## Note, consigli e convenzioni

### Link Interni

Non usare URL assoluti per i link. Usa solo percorsi relativi.

- ❌

  ```md
  Da utilizzare con [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Da utilizzare con [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` significa "salire di una directory" dunque se il file che stai editando è dentro la directory `functions` e lo stai collegando a `callbacks` si utilizza `../` per salire alla directory `scripting/` seguita da `callbacks/` per poter entrare nella directory dei callbacks, infine inserire il nome del file (senza `.md`) del callback che vuoi collegare.

### Immagini

Le immagini vanno in una sub-directory dentro `/static/images`. Successivamente quando linki un immagine in un `![]()`basta usare `/images/` come path base (non c'è nessun bisogno di usare `static`è solo per la repository).

Se hai dei dubbi, leggi un'altra pagina che usa delle immagini e imita il procedimento.

### Metadata

La prima cosa in _ogni_ documento dovrebbe essere il metadata:

```mdx
---
titolo: Il mio documento
descrizione: Questa pagina parla di roba, cose e hamburgers, evvai!
---
```

Ogni pagina dovrebbe includere un titolo e una descrizione.

Per una lista completa di cosa può andare in mezzo alle `---` dai un'occhiata qui [Documentazione di Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Headings

Non creare un header di livello 1 (`<h1>`) con `#` dato che viene generato automaticamente. Il tuo primo header dovrebbe _sempre_ essere `##`

- ❌

  ```md
  # Il mio titolo

  Questa è una documentazione per ...

  # Sottosezione
  ```

- ✔

  ```md
  Questa è una documentazione per ...

  ## Sottosezione
  ```

### Usa gli Snippets di `Code` per referenze tecniche

Quando stai scrivendo un paragrafo che contiene nomi di funzioni, numeri, espressioni o qualsiasi cosa che non sia un linguaggio non-standard, avvolgili in questo modo \`backticks\`. Questo facilita la separazione del linguaggio e la descrizione delle cose da riferimenti a elementi tecnici come nomi di funzioni o pezzi di codice.

- ❌

> La funzione fopen ritornerà un valore che contiene il tag del tipo di file:, non c'è nessun problema su quella linea di codice poiché il valore ritornato è storato in una variabile che inoltre contiene anche il tag del file: (notare che anche i casi sono gli stessi). In ogni caso nella linea successiva il valore 4 è aggiunto al handle file. 4 non ha nessun tag [...]

- ✔

> La funzione `fopen` ritornerà un valore che contiene il tag del tipo di `file:`, non c'è nessun problema su quella linea di codice poiché il valore ritornato è storato in una variabile che inoltre contiene anche il tag del `file:` (notare che anche i casi sono gli stessi). In ogni caso nella linea successiva il valore `4` è aggiunto al handle file. `4` non ha nessun tag.

Nel precedente esempio, `fopen` è il nome di una funzione, non una parola inglese, dunque avvolgila usando `codice` evidenziare usando gli snippets aiuta a distinguerli da altri contenuti.

Inoltre, se il paragrafo si riferisce ad un esempio di blocco di codice, esso aiuta il lettore ad associare le parole con degli esempi.

### Tabelle

Se una tabella ha un header, va nella parte superiore:

- ❌

  ```md
  |         |                                       |
  | ------- | ------------------------------------- |
  | Vita    | Stato del motore                      |
  | 650     | Non danneggiato                       |
  | 650-550 | Fumo bianco                           |
  | 550-390 | Fumo grigio                           |
  | 390-250 | Fumo nero                             |
  | < 250   | In fiamme (esploderà successivamente) |
  ```

- ✔

  ```md
  | Vita    | Stato del motore                      |
  | ------- | ------------------------------------- |
  | 650     | Non danneggiato                       |
  | 650-550 | Fumo bianco                           |
  | 550-390 | Fumo grigio                           |
  | 390-250 | Fumo nero                             |
  | < 250   | In fiamme (esploderà successivamente) |
  ```

## Migrare dalla Wiki di SA-MP

La maggior parte dei contenuti sono stati spostati, però se trovi una pagina mancante, qui vi è una piccola guida per convertire il contenuto in Markdown

### Prendere l'HTML

1. Clicca questo bottone

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Posiziona il mouse in alto a sinistra della pagina wiki principale, nel margine sinistro o nell'angolo finché non vedi `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Oppure cerca `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Copia l'HTML interno di quell'elemento

   ![image](/images/contributing/8c7c75cfabad.png)

   Ora hai _solamente_ il codice HTML per il _contenuto_ concreto della pagina, il materiale che ci importa e che puoi convertire in Markdown.

### Convertire l'HTML in Markdown

Per convertire l'HTML di base (niente tabelle) in Markdown usa:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Nota come tutta la tabella si sia sballata completamente...

### Tabelle HTML a Tabelle in Markdown

Il tool soprastante non supporta le tabelle, usa questo tool:

https://jmalarcon.github.io/markdowntables/

E copia solo l'elemento della tabella `<table>` dentro:

![image](/images/contributing/57f171ae0da7.png)

### Pulire

La conversione molto probabilmente non sarà pervetta. Pertanto avrai da fare un po' di pulizia manuale. L'estensioni di formattazione citate sopra dovrebbero aiutare ma potresti tuttavia avere ancora bisogno di spendere del tempo per sistemarlo manualmente.

Se non hai tempo, non ti preoccupare! Inoltra una bozza non finita e qualcun altro può riprendere da dove hai lasciato!

## Contratto di licenza

Tutti i progetti open.mp hanno un [Contratto di licenza per collaboratori][https://cla-assistant.io/openmultiplayer/homepage]. Questo in pratica significa solamente che accetti di lasciarci usare il tuo lavoro, e metterlo sotto licenza open-source. Quando si apre una Pull Request per la prima volta, il bot assistente CLA posterà un link dove puoi firmare il contratto.
