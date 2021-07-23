---
title: Contribuer au rayonnement de open.MP
description: Contribuez, vous aussi, à améliorer la documentation fournie par open.MP et sa communauté.
---

Cette documentation s'adresse à tous ceux qui veulent contribuer au wiki de [open.mp](https://open.mp). Il vous suffit d'avoir du temps et libr et un [GitHub](https://github.com), peu importe si vous maîtrisez cet outil ou non.

Dans le cas où vous souhaitez vous voulez participer à la traduction du wiki, ouvrez un PR sur le fichier [`CODEOWNERS`](https://github.com/openmultiplayer/wiki/tree/master/CODEOWNERS) en ajoutant une ligne de la même façon que celles déjà écrites.

## Modifier, ajouter du contenu
### Ajouter du contenu via le navigateur

En parcourant le [Github « docs »](https://github.com/openmultiplayer/web/tree/master/docs) de open.MP, vous aurez un bouton "Add file"

![Add file button](/images/contributing/add-new-file.png)

Vous pourrez ainsi ajouter un fichier en Markdown.

Le fichier créer _doit_ avoir l'extension `.md` et contenir du Markdown. 

Pour plus d'informations sur l'utilisation de Markdown, référez vous à [ce guide](https://guides.github.com/features/mastering-markdown/).

Dès que vous avez terminé votre rédaction, cliquez sur _"Propose new file"_ et un _Pull Request_ s'enverra pour un review.

### Git

Si vous voulez utiliser git, il faut que vous cloniez le wiki :

```sh
git clone https://github.com/openmultiplayer/web/tree/master/docs.git
```

Ouvrez-le dans votre éditeur de texte. D'aucuns recommanderaient Visual Studio, qui semble être l'outil le plus apprécié des développeurs tant il est pratique :

![Visual Studio Code markdown preview](/images/contributing/vscode.png)

Cette extension peut être utile :

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) par David Anson - cette extension s'assure du bon format de votre Markdown. Elle prévient également les quelques erreurs sémantiques ou de forme. Tous les warnings ne sont pas utiles, mais ils sont des indices importants à ne pas négliger pour régler quelques difficultés.

## Notes, astuces et convetions

### Liens internes

Il convient d'utiliser les chemins d'accès plutôt qu'un lien direct.

- ❌

  ```md
  [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` permet de remonter d'un répertoire. Si le fichier que vous modifiez est dans le dossier `functions` et que vous renvoyez à un lien dans le dossier `callbacks`, utilisez `../` pour retourner au dossier `scripting/` et vous pourrez alors regagner le dossier `callbacks/` et donc viser le fichier _(sans indiquer l'extension `.md`).

### Images

Les images vont dans un sous-répertoire à l'intérieur de `/static /images`. Quand vous insérez une image avec un `! [] ()`, utilisez simplement `/images/` comme chemin de base _(pas besoin de `static`)_.

En cas de doute, lisez une autre page qui utilise des images et copiez la méthode.

### Metadonnées

La première chose à faire dans _chaque_ document, c'est d'insérer les métadonnées :

```mdx
---
title: Ma documentation
description: Documentation sur les burgers !
---
```

Chaque page doit contenir un titre et une description.

[Liste entière des métadonnées](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Titres

Ne créez pas de titres type `<h1>` avec un `#` comme cela se fait automatiquement. Le premier titre doit _toujours_ être : `##`.

- ❌

  ```md
  # Mon titre

  Nous traiterons aujourd'hui de ...

  # Ma section
  ```

- ✔

  ```md
  Nous traiterons aujourd'hui de ...

  ## Ma section
  ```

### Utilisez les balises `Code` pour les référenecs techniques.

Quand vous écrivez un paragraphe contenant des noms de fonction, des numéros, des expressions ou une notion de programmation, entourez la notion de \`guillemets obliques\`.

- ❌

  > La fonction fopen [...] un tag type File: [...]

- ✔

  > La fonction `fopen` [...] un tag type `File:` [...]
  
Dans l'exemple ci-dessus, `fopen` est un nom de fonction, donc il convient de l'entourer avec des guillemets obliques pour la distinguer des autres mots du langage courant.

### Tables

La structure de la table répond à des règles précises lorsque vous lui mettez des entêtes :

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | HP      | État du véhicule                     |
  | 650     | Bon état                             |
  | 650-550 | Fumée blanche                        |
  | 550-390 | Fumée grise                          |
  | 390-250 | Fumée noire                          |
  | < 250   | En feu (explosion imminente)         |
  ```

- ✔

  ```md
  | HP      | État du véhicule                     |
  | ------- | ------------------------------------ |
  | 650     | Bon état                             |
  | 650-550 | Fumée blanche                        |
  | 550-390 | Fumée grise                          |
  | 390-250 | Fumée noire                          |
  | < 250   | En feu (explosion imminente)         |  
  ```

## Licence d'agrément

Le projet open.MP dispose, pour ses collaborateurs, d'une [licence d'agrément](https://cla-assistant.io/openmultiplayer/homepage).

Cela signifie simplement que vous acceptez de nous laisser utiliser votre travail et de le placer sous une licence open source. Lorsque vous ouvrez une Pull Request pour la première fois, le bot CLA-Assistant publiera un lien où vous pourrez signer l'accord.
