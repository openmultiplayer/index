# Foreword

---

“pawn” is a simple, typeless, 32-bit “scripting” language with a C-like syntax.
Execution speed, stability, simplicity and a small footprint were essential
design
criterions for both the language and the interpreter/abstract machine that a
pawn program runs on.

An application or tool cannot do or be everything for all users.  
This not

other software systems, it also explains the presence of extensive configuration
options and macro or scripting languages in applications. My own applications
have contained a variety of little languages; most were very simple, some were
extensive. . . and most needs could have been solved by a general  
purpose
language with a special purpose library. Hence, pawn.

The pawn language was designed as a flexible language for manipulating ob-
jects in a host application. The tool set (compiler, abstract machine)  
were
written so that they were easily extensible and would run on different  
soft-
ware/hardware architectures.

## ♦

pawn is a descendent of the original Small C by Ron Cain and James Hendrix,
which at its turn was a subset of C. Some of the modifications that I did to
Small C, e.g. the removal of the type system and the substitution of pointers by
references, were so fundamental that I could hardly call my language a “subset

of C” or a “C dialect” anymore. Therefore, I stripped off the “C” from the title
and used the name “Small” for the name of the language in my publication in
Dr. Dobb’s Journal and the years since. During development and maintenance
of the product, I received many requests for changes. One of the frequently
requested changes was to use a different name for the language —searching
for information on the Small scripting language on the Internet was hindered
by “small” being such a common word. The name change occurred together
with a significant change in the language: the support of “states” (and state
machines).

I am indebted to Ron Cain and James Hendrix (and more recently, Andy
Yuen), and to Dr. Dobb’s Journal to get this ball rolling. Although I must
have touched nearly every line of the original code multiple times, the Small
C origins are still clearly visible.

## ♦

---

A detailed treatise of the design goals and compromises is in appendix C; here
I would like to summarize a few key points. As written in the previous para-
graphs, pawn is for customizing applications (by writing scripts), not for writ-
ing applications. pawn is weak on data structuring because pawn programs
are intended to manipulate objects (text, sprites, streams, queries, . . . ) in
the
host application, but the pawn program is, by intent, denied direct access to
any data outside its abstract machine. The only means that a pawn program
has to manipulate objects in the host application is by calling subroutines, so
called “native functions”, that the host application provides.

pawn is flexible in that key area: calling functions. pawn supports default val-
ues for any of the arguments of a function (not just the last),
call-by-reference
as well as call-by-value, and “named” as well as “positional” function argu-
ments. pawn does not have a “type checking” mechanism, by virtue of being
a typeless language, but it does offer in replacement a “classification
checking”
mechanism, called “tags”. The tag system is especially convenient for function
arguments because each argument may specify multiple acceptable tags.

but in their combination. For pawn, I feel that the combination of named ar-
guments —which lets you specify function arguments in any order, and default
values —which allows you to skip specifying arguments that you are not inter-
ested in, blend together to a convenient and “descriptive” way to call (native)
functions to manipulate objects in the host application.

---

[Go Back to Contents](00-Contents.md)
