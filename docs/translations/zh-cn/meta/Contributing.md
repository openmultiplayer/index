---
title: 贡献
description: 如何贡献SA-MP维基和open.mp文档。
---

本文档的源代码是开放的，任何人都可以对其进行修改！你所需要的只是一个[GitHub](https://github.com)账户和一些空闲时间。你甚至不必了解 Git，您可以通过网页界面可以做到这一切！

如果您想帮助维护一种特定的语言，打开针对 [`代码的所有者`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) 文件的 拉取请求，并添加一行内容为语言目录和您的用户名。

## 编辑内容

在每个页面上，有一个按钮，带你到 GitHub 页面编辑:

![编辑每个维基页面上的这个页面链接](/images/contributing/edit-this-page.png)

例如, 点击 [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) 跳转到 [这个页面](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) 它提供一个文本编辑器来修改文件 (假设你已经登录了 Github)。

这意味着维基维护者和其他社区成员可以审查你的修改，讨论是否需要额外的修改，然后合并它。

## 添加新内容

添加新内容要复杂一些。有两种方法:

### GitHub 界面

在 GitHub 上浏览目录时，文件列表的右上角有一个“添加文件”按钮:

![添加文件按钮](/images/contributing/add-new-file.png)

你可以上传一个已经写好的 Markdown 文件，也可以直接写入到 GitHub 的文本编辑器中。

这个文件必须有`.md`后缀并且包含 Markdown 内容。有关 Markdown 的更多信息, 看看 [这个指南](https://guides.github.com/features/mastering-markdown/)。

完成后，点击“提交新文件(Propose new file)”，并创建一个拉取请求以供审查。

### Git

如果你想使用 Git，你所需要做的就是克隆维基仓库:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

在您最喜欢的编辑器中打开它。我推荐 Visual Studio Code，因为它有一些很棒的工具来编辑和格式化 Markdown 文件。如你所见，我是用 Visual Studio 写代码的!

![Visual Studio Code markdown 预览](/images/contributing/vscode.png)

我推荐两个扩展来让你的体验更好:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 作者 David Anson - 这是一个扩展，确保您的 Markdown 格式正确。它防止了一些语法和语义错误。并非所有的警告都是重要的，但有些可以帮助改善可读性。最好的判断，如果有疑问，那就去问问审查员！
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 由 Prettier.js 团队提供 - 这是一个格式化程序，它会自动格式化你的 Markdown 文件，使它们都使用一致的样式。维基仓库在`package.json`有一些设置，该扩展应该会自动使用。确保在你的编辑器设置中启用“保存时格式化”，这样你的 Markdown 文件将在每次保存时自动格式化！

## 要点，技巧以及规范

### 内部链接

站点间链接请勿使用绝对地址。采用相对路径。

- ❌

  ```md
  当用于[OnPlayerClickPlayer]时 (https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  当用于[OnPlayerClickPlayer]时 (../callbacks/OnPlayerClickPlayer)
  ```

`../`表示“上级目录”。因此，如果你正在编辑的文件位于`函数(functions)`目录下，要链接到`回调函数(callbacks)`时，请先使用`../`进入上级目录`(脚本)scripting/`，然后使用`(回调)callbacks/`进入回调函数(callbacks)目录, 然后输入你想链接到的回调函数(callback)的文件名(不带`.md`后缀)。

### 图片

图片位于`/static/images`中的子目录中。然后，当你在 `![]()` 中链接一个图像时 你只需要使用 `/images/` 作为基本路径(不需要 `static` ，那只是用于仓库)。

如有疑问，请阅读另一页中使用的图像，然后复制并查看它是如何实现的。

### 元数据

无论使用什么文档，首先都应该使用元数据:

```mdx
---
title: 我的文档
description: 这是一个关于汉堡和某些东西的页面，耶!
---
```

每一页都应该包括一个标题(title)和一个描述(description)。

要获取`---`之间的内容的完整列表，请查看 [Docusaurus 文档](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### 标题

不要通过 `#` 创建一个一级标题 (`<h1>`)，因为它是自动生成的。你的一级标题永远应该是`##`

- ❌

  ```md
  # 我的标题

  这个文档是为了 ...

  # 小节
  ```

- ✔

  ```md
  这个文档是为了 ...

  ## 小节
  ```

### 使用 `代码` 片段作为技术参考

当编写一段包含函数名、数字、表达式或任何非标准的书面语言时，像这样用\`反引号\`包裹它们。这样可以更容易地将用来描述事物的语言从技术元素的引用中分离出来，例如对函数名和代码片段的引用。

- ❌

  > fopen 函数将返回一个带有 File:类型标签的值，这一行没有问题，因为返回值被保存到同样带有 File:标签的变量中(注意，案例中也是一样的)。但是在下一行中，值 4 被添加到文件句柄中。4 没有标签 [...]

- ✔

  > `fopen`函数将返回一个带有`File:`类型标签的值，这一行没有问题，因为返回值被保存到同样带有`File:`标签的变量中(注意，案例中也是一样的)。但是在下一行中，值`4`被添加到文件句柄中。`4`没有标签

在上面的示例中，`fopen`是一个函数名，而不是一个英语单词，因此用`代码`片段标记将其包裹起来有助于将其与其他内容区分开来。

此外，如果段落中引用了一段示例代码，这可以帮助读者将这些单词与示例联系起来。

### 表格

如果一个表格有标题，它们会出现在顶部:

- ❌

  ```md
  |         |                    |
  | ------- | ------------------ |
  | 健康度  | 引擎状态           |
  | 650     | 未损坏             |
  | 650-550 | 白烟               |
  | 550-390 | 灰烟               |
  | 390-250 | 黑烟               |
  | < 250   | 着火(几秒钟后爆炸) |
  ```

- ✔

  ```md
  | 健康度  | 引擎状态           |
  | ------- | ------------------ |
  | 650     | 未损坏             |
  | 650-550 | 白烟               |
  | 550-390 | 灰烟               |
  | 390-250 | 黑烟               |
  | < 250   | 着火(几秒钟后爆炸) |
  ```

## 从 SA-MP Wiki 迁移

大部分的内容都已经被迁移了，但是如果你发现某个页面丢失了，这里有一个简短的指南来把内容转换成 Markdown 格式。

### 获取 HTML

1. 点击这个按钮

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. 将鼠标悬停在主要维基页面的左上方，在左侧空白处或角落，直到你看到 `#content`

   ![image](/images/contributing/65761ffbc429.png)

   或者搜索 `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. 复制该元素的内部 HTML

   ![image](/images/contributing/8c7c75cfabad.png)

   目前你只有 HTML 页面代码的实际内容，还有我们所关心的，你可以把它转换成 Markdown。

### 转换 HTML 到 Markdown

转换基本 HTML (无表格) 到 Markdown 使用:

https://domchristie.github.io/turndown/

![图片](/images/contributing/77f4ea555bbb.png)

^^ 注意，现在它把表格完全弄乱了...

### 转换 HTML 表格到 Markdown 表格

由于以上工具不支持表格，请使用此工具。:

https://jmalarcon.github.io/markdowntables/

并仅将`<table>`元素复制到:

![图片](/images/contributing/57f171ae0da7.png)

### 清理

这种转换可能并不完美。因此，您必须手动进行一些清理工作。上面列出的格式化扩展应该会有所帮助，但您可能仍然需要花一些时间用于手动清理。

如果你没有时间，不要担心！提交一份未完成的草稿，别人就可以接手你的工作。

## 许可协议

所有 open.mp 项目 都有一个[贡献者许可协议](https://cla-assistant.io/openmultiplayer/homepage)。这基本上意味着你同意让我们使用你的作品，并将其置于开源许可之下。当你第一次打开拉取请求时，机器人助手会发布一个链接，你可以在那里签署协议。
