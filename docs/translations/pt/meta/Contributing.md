---
title: Contribuição
description: Como contribuir com SA-MP Wiki e a documentação open.mp.
---

Esta documentação está aberta para qualquer um contribuir para seu desenvolvimento e aperfeiçoamento! Tudo que você precisa é uma conta no [GitHub](https://github.com) e algum tempo livre. Você inclusive não necessita ter conhecimentos de Git, podendo fazer tudo pela interface da web.

## Editando Conteúdo

Em cada página há um botão que o(a) leverá para uma página no GitHub para editar:

![Edit this page link present on each wiki page](/images/contributing/edit-this-page.png)

Por exemplo, clicando em [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) o(a) levará para [esta página](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) a qual contém um editor de texto para fazer algumas mudanças no arquivo(assumindo que você esteja logado(a) no GitHub).

Faça suas edições e envie um "Pull Request", isso significa que os organizadores da Wiki e outros membros da comunidade irão revisar suas mudanças, discutir se são necessárias então incorporá-las ou não.

## Adicionando um Conteúdo Novo

Adicionar um novo conteúdo pode ser um pouco mais complicado, poderá fazer de duas maneiras:

### Interface do GitHub

Quando pesquisar um diretório no GitHub, haverá um botão Add file no canto direito superior do arquivo:

![Add file button](/images/contributing/add-new-file.png)

Você pode tanto enviar um arquivo 'Markdown' que você já escreveu, ou escrever diretamento no editor de texto do GitHub.

Este arquivo _PRECISA_ conter a extensão `.md` e conter 'Markdown'. Para mais informações sobre 'Markdown, acesse [este guia](https://guides.github.com/features/mastering-markdown/).

Uma vez feito isso, clique em "Propose new file" (Propor novo arquivo) e um "Pull Request" será aberto para revisão.

### Git

Se você deseja usar Git, tudo que precisa é clonar o repositório da WIki com:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Abre o repositório em seu editor favorito. Eu recomendo Visual Studio Code, pois contém ótimas ferramentas de edição e formatação de arquivos "Markdown". Como pode ver, estou escrevendo usando Visual Studio Code!

![Visual Studio Code markdown preview](/images/contributing/vscode.png)

Eu recomendo duas extensões que irão aperfeiçoar sua experiência:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) por David Anson - Essa extensão faz com que o arquivo seja formatado corretamente, prevenindo alguns erros semânticos e sintáticos. Nem todos avisos são importantes, mas alguns podem ajudar a melhorar e leitura. Use ao seu julgamento, em caso de dúvida, consulte um revisor.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Pelo time Prettier.js - Este formatará automaticamente seus arquivos "Markdown" para que todos usem um estilo consistente. O repositório da Wiki contém algumas configurações em `package.json` que a extensão deverá usar automaticamente. Tenha certeza de habilitar "Format On Save" nas configurações do seu editor, para que os arquivos sejam formatados automaticamente a cada save.

## Notas, Dicas e Convenções

### Links Internos

Não utilize URL's absolutas para links dentro do site. Use caminhos relativos.

- ❌

  ```md
  Para ser usado com [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Para ser usado com [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` significa "vá até o diretório", então se o arquivo que está editando estiver dentro do diretório `functions` e estiver 'linkando' com `callbacks` você usará `../` para ir até `scripting/` e então `callbacks/` para entrar no diretório, e então o nome do arquivo (sem `.md`) da callback que gostaria de 'linkar'.

### Imagens

Imagens vão dentro de um sub-diretório em `/static/images`. Então quando quando você 'linkar' uma imagem em `![]()` você utiliza `/images/` como o caminho base (sem necessidade de `static`, é apenas para o repositório).

Em caso de dúvida, leia uma página que contenha imagens e copie como está feito nela.

### Metadata

A primeira coisa em _qualquer_ documento aqui deve ser a "metadata":

```mdx
---
title: Minha Documentação
description: Esta é uma página sobre coisas, comidas e X-Burguer!
---
```

Toda página deve conter um título e uma descrição.

Para uma lista completa do que pode ir entre `---`, verifique [a documentação do Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Títulos

Não crie um Título "level 1" (`<h1>`) com `#`, pois este é gerado automaticamente. Seu primeiro título deverá _sempre_ ser `##`

- ❌

  ```md
  # Meu Título

  Esta documentação é para...

  # Sub-seção
  ```

- ✔

  ```md
  Esta documentação é para...

  ## Sub-seção
  ```

### Utilize `Code Snippets` para Referências Técnicas

Quando escrever um parágrafo que contém nomes de funções, números, expressões ou qualquer outra coisa que não seja linguagem básica (comunicação), cerque-os com \`sinal de crase\`. Isso facilita separar a linguagem ao descrever coisas de referência técnica, elementos como nome de funções ou partes de códigos.

- ❌

  > A função fopen retornará um valor com uma tag do tipo File:, não há problema nesta linha pois o valor de retorno é armazenado em um variável que também tem a tag File:. Entretanto, na próxima linha o valor 4 é adicionado ao arquivo. 5 não tem tag [...]

- ✔

  > A função `fopen` retornará um valor com uma tag do tipo `File:`', não há problema nesta linha pois o valor de retorno é armazenado em um variável que também tem a tag `File:`. Entretanto, na próxima linha o valor `4` é adicionado ao arquivo. `4` não tem tag [...]

No exemplo acima, `fopen` é o nome de uma função e não uma palavra em português, então cerca-la com `code` "snippet" (crase) ajuda a distinguir um do outro.

Também, se o parágrafo estiver relizando uma referência a um bloco de código, isso ajudaria o leitor a associar as palavras com o exemplo.

### Tabelas

Se a tabela tem títulos, eles vão na parte de cima:

- ❌

  ```md
  |         |                          |
  | ------- | ------------------------ |
  | Vida    | Estado do Motor          |
  | 650     | Sem dano                 |
  | 650-550 | Fumaça Branca            |
  | 550-390 | Fumaça Cinza             |
  | 390-250 | Fumaça Preta             |
  | < 250   | Em chamas (irá explodir) |
  ```

- ✔

  ```md
  | Vida    | Estado do Motor          |
  | ------- | ------------------------ |
  | 650     | Sem dano                 |
  | 650-550 | Fumaça Branca            |
  | 550-390 | Fumaça Cinza             |
  | 390-250 | Fumaça Preta             |
  | < 250   | Em chamas (irá explodir) |
  ```

## Migrar do SA-MP Wiki

Maior parte do conteúdo já foi movido, mas se encontrar uma página faltando, aqui está um pequeno guia de como converter o conteúdo para "Markdown".

### Pegando o HTML

1. Clique neste botão

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Passe o mouse sobre o canto esquerdo superior da página, na margem da esquerda ou no canto até você ver `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Ou pesquise por `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Copie o HTML interno daquele elemento

   ![image](/images/contributing/8c7c75cfabad.png)

   Agora você tem _apenas_ o código HTML do _conteúdo_ da página, então poderá converter para "Markdown".

### Convertendo HTML para Markdown

Para converter HTML básico (sem tabelas) para "Markdown" use:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Veja como bagunçou completamente a tabela...

### Tabelas HTML Para Tabelas Markdown

Devido a ferramenta superior não suportar tabelas, utilize esta:

https://jmalarcon.github.io/markdowntables/

Então copie apenas o elemento `<table>`:

![imagem](/images/contributing/57f171ae0da7.png)

### Toques Finais

A conversão não será perfeita, então uma limpeza manual será necessária. As ferramentas de formatação listadas acima devem ajuda-lo, mas ainda poderá gastar um tempo realizando trabalho manual.

Se você não tem tempo, não se preocupe! Envie um rascunho não finalizado, então alguém poderá continuar de onde você parou!

## Acordo de Licença

Todo projeto open.mp contém um [Acordo de Licença do Contribuidor][https://cla-assistant.io/openmultiplayer/homepage]. Isso, basicamente, significa que você concorda em usarmos o seu trabalho e coloca-lo sob a licença de código aberto. Quando abrir um Pull Request pela primeira vez, o bot CLA-Assistant irá colocar um link onde você pode assinar o acordo.
