---
title: SetPlayerName
description: Postavlja ime igrača.
tags: ["player"]
---

## Deskripcija

Postavlja ime igrača.

| Ime          | Deskripcija                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID igrača za postaviti ime.                                                                                                      |
| const name[] | Ime za postaviti. Mora biti dug između 1-24 karaktera i samo sadržavati važeće karaktere (0-9, a-z, A-Z, [], (), \$ @ . \_ i =). |

## Returns

1 Ime je uspješno promijenjeno

0 Igrač već ima to ime

-1 Ime se ne može promijeniti (već je u upitrebi, previše je veliko ili sadrži nevažeće karaktere)

## Primjeri

```c
// Komanda prosto postavlja ime igrača u "Superman" ako je moguće, bez provjera greški ili poruka.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    SetPlayerName(playerid, "Superman");
    return 1;
}

// Komanda postavlja ime igrača u "Superman" ako je moguće, obavještava igrača ako postoje određene greške
// koristeći "switch" statement
if (strcmp(cmdtext, "/superman", true) == 0)
{
    switch (SetPlayerName(playerid, "Superman"))
    {
        case -1:
        {
            SendClientMessage(playerid, 0xFF0000FF, "Neuspješno mjenjanje imena, neko se već zove 'Superman'.");
        }
        case 0:
        {
            SendClientMessage(playerid, 0xFF0000FF, "Već se zoveš 'Superman'");
        }
        case 1:
        {
            SendClientMessage(playerid, 0x00FF00FF, "Sada se zoveš 'Superman'");
        }
    }
    return 1;
}
```

## Zabilješke

:::warning

Promjena imena igrača u isto ime, ali s različitim slučajevima slova (npr. "John" u "JOHN") neće uspjeti. Ako se koristi u OnPlayerConnect, novo ime neće biti prikazano za povezujećeg igrača. Prosljeđivanje null niza kao novog imena srušit će server. Imena igrača mogu imati do 24 znaka kada se koristi ova funkcija, ali kada se pridružuju serveru iz pregledača servera SA-MP, imena igrača ne smiju biti veća od 20 i manja od 3 znaka (server će odbiti ulazak). Ovo omogućava dodavanje 4 znaka kada koristite SetPlayerName.

:::

## Srodne Funkcije

- [GetPlayerName](GetPlayerName): Dobij ime igrača.
