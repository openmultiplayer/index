---
title: Contributing
description: How to contribute to the SA-MP Wiki and open.mp documentation.
---

This documentation source is open for anyone to contribute changes to! All you need is a [GitHub](https://github.com) account and some spare time. You don't even need to know Git, you can do it all from the web interface!

If you want to help maintain a specific language, open a PR against the [`CODEOWNERS`](https://github.com/openmultiplayer/wiki/tree/master/CODEOWNERS) file and add a line for your language directory with your username.

## Editing Content

On each page, there's a button that takes you to the GitHub page for editing:

![Edit this page link present on each wiki page](/images/contributing/edit-this-page.png)

For example, clicking this on [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) takes you to [this page](https://github.com/openmultiplayer/wiki/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) which presents you with a text editor to make changes to the file (assuming you're logged in to GitHub).

Make your edit and submit a "Pull Request" this means the Wiki maintainers and other community members can review your change, discuss whether it needs additional changes and then merge it.

## Adding New Content

Adding new content is a little more involved. You can do it two ways:

### GitHub Interface

When browsing a directory on GitHub, there's an Add file button on the top right corner of the file list:

![Add file button](/images/contributing/add-new-file.png)

You can either upload a Markdown file you've written already or write it directly into the GitHub text editor.

The file _must_ have a `.md` extension and contain Markdown. For more information about Markdown, check out [this guide](https://guides.github.com/features/mastering-markdown/).

Once that's done, hit "Propose new file" and a Pull Request will be opened for review.

### Git

If you want to use Git, all you need to do is clone the Wiki repository with:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Open it in your favourite editor. I recommend Visual Studio Code as it has some great tooling for editing and formatting Markdown files. As you can see, I'm writing this using Visual Studio Code!

![Visual Studio Code markdown preview](/images/contributing/vscode.png)

I recommend two extensions to make your experience better:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - this is an extension that makes sure your Markdown is formatted correctly. It prevents some syntactical and semantic mistakes. Not all the warnings are important, but some can help improve readability. Use best judgement and if in doubt, just ask a reviewer!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by the Prettier.js Team - this is a formatter that will automatically format your Markdown files so they all use a consistent style. The Wiki repository has some settings in its `package.json` that the extension should automatically use. Be sure to enable "Format On Save" in your editor settings so your Markdown files will be automatically formatted every time you save!

## Notes, Tips and Conventions

### Internal Links

Don't use absolute URLs for inter-site links. Use relative paths.

- ❌

  ```md
  To be used with [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  To be used with [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` means "go up one directory" so if the file you're editing is inside the `functions` directory and you're linking to `callbacks` you use `../` to go up to `scripting/` then `callbacks/` to enter the callbacks directory, then the filename (without `.md`) of the callback you want to link.

### Images

Images go inside a subdirectory inside `/static/images`. Then when you link an image in a `![]()` you just use `/images/` as the base path (no need for `static` that's just for the repository).

If in doubt, read another page that uses images and copy how its done there.

### Metadata

The first thing in _any_ document here should be metadata:

```mdx
---
title: My Documentation
description: This is a page about stuff and things and burgers, yay!
---
```

Every page should include a title and a description.

For a full list of what can go between the `---`, check out [the Docusaurus documentation](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Headings

Don't create a level 1 heading (`<h1>`) with `#` as this is generated automatically. Your first heading should _always_ be `##`

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

### Use `Code` Snippets For Technical References

When writing a paragraph that contains function names, numbers, expressions or anything that's not standard written language, surround them with \`backticks\` like that. This makes it easier to separate language for describing things from references to technical elements such as function names and pieces of code.

- ❌

  > The fopen function will return a value with a tag of type File:, there is no problem on that line as the return value is being stored to a variable also with a tag of File: (note the cases are the same too). However on the next line the value 4 is added to the file handle. 4 has no tag [...]

- ✔

  > The `fopen` function will return a value with a tag of type `File:`, there is no problem on that line as the return value is being stored to a variable also with a tag of `File:` (note the cases are the same too). However on the next line the value `4` is added to the file handle. `4` has no tag

In the above example, `fopen` is a function name, not an English word, so surrounding it with `code` snippet markers helps distinguish it from other content.

Also, if the paragraph is referring to a block of example code, this helps the reader associate the words with the example.

### Tables

If a table has headings, they go in the top part:

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

## Migrating from SA-MP Wiki

Most of the content has been moved, but if you find a page that's missing, here's a short guide for converting content to Markdown.

### Getting the HTML

1. Click this button

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Hover the top left of the main wiki page, in the left margin or the corner until you see `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Or search for `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Copy the inner HTML of that element

   ![image](/images/contributing/8c7c75cfabad.png)

   Now you have _only_ the HTML code for the actual _content_ of the page, the stuff we care about, and you can convert it to Markdown.

### Converting HTML to Markdown

For converting basic HTML (no tables) to Markdown use:

https://domchristie.github.io/turndown/

![image](/images/contributing/77f4ea555bbb.png)

^^ Notice now it screwed up the table completely...

### HTML Tables to Markdown Tables

Because the above tool does not support tables, use this tool:

https://jmalarcon.github.io/markdowntables/

And copy only the `<table>` element in:

![image](/images/contributing/57f171ae0da7.png)

### Cleaning Up

The conversion likely won't be perfect. So you'll have to do a bit of manual cleanup. The formatting extensions listed above should help with that but you may still need to just spend some time doing manual work.

If you don't have time, don't worry! Submit an unfinished draft and someone else can pick up where you left off!

## License Agreement

All open.mp projects have a [Contributor License Agreement][https://cla-assistant.io/openmultiplayer/homepage]. This basically just means you agree to let us use your work, and put it under an open-source license. When you open a Pull Request for the first time, the CLA-Assistant bot will post a link where you can sign the agreement.
