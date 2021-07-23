---
title: Escape Codes
sidebar_label: Escape Codes
---

When create a string you may find that some character may be impossible or extremely difficult to express in the source code of your script, this is where escape codes come in handy - these allow you to use the symbols and expressions that come under this category. Below is a list of escape codes for the PAWN language.

| Escape Codes                                | Code         |
| ------------------------------------------- | ------------ |
| Audible beep (on server machine)            | \a (also \7) |
| Backspace                                   | \b           |
| Escape                                      | \e           |
| Form feed                                   | \f           |
| New line                                    | \n           |
| Carriage return                             | \r           |
| Horizontal tab                              | \t           |
| Vertical tab                                | \v           |
| Backslash (\)                               | \\           |
| Single quote (')                            | \'           |
| Double quote (")                            | \"           |
| Percent sign                                | \%           |
| Character code with decimal code "ddd".     | \ddd;        |
| Character code with hexidecimal code "hhh". | \xhhh;       |

:::note

The semicolon after the nddd; and nxhhh; codes is optional. Its purpose is to give the escape sequence sequence an explicit termination symbol when it is used in a string constant.

:::

Source: [pawn-lang.pdf (pg 99)](https://github.com/pawn-lang/compiler/raw/master/doc/pawn-lang.pdf)
