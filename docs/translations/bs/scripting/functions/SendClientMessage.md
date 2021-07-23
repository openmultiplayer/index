---
title: SendClientMessage
description: Ova funkcija šalje poruku navedenom igraču sa odabranom bojom u chatu.
tags: []
---

## Deskripcija

Ova funkcija šalje poruku navedenom igraču sa odabranom bojom u chatu. Cijela linija u chatboxu će biti u postavljenoj boji sve dok se ne koristi ugrađivanje boja u tekstu (0.3c ili kasnije verzije).

| Ime             | Deskripcija                             |
| --------------- | --------------------------------------- |
| playerid        | ID igrača za prikazati poruku.          |
| color           | Boja poruke (0xRRGGBBAA Hex format).    |
| const message[] | Tekst za prikazati (max 144 karaktera). |

## Returns

1: Funkcija uspješno izvršena. Uspješno je prijavljeno i kada je string veći od 144 karaktera, ali poruka neće biti poslana.

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "Ovaj tekst je crven");
    SendClientMessage(playerid, 0x00FF00FF, "Ovaj tekst je zelen.");
    SendClientMessage(playerid, -1, "Ovaj tekst je bijel.");
    return 1;
}
```

## Zabilješke

:::tip

Ugradnju boja možete koristiti za više boja u poruci. Korištenje '-1' kao boje učinit će tekst bijelim (iz jednostavnog razloga što je -1, kada je predstavljen u heksadecimalnom zapisu, 0xFFFFFFFF).

:::

:::warning

Ako je poruka duža od 144 znaka, neće se poslati. Skraćivanje se može koristiti da se to spriječi. Prikazivanje poruke u više redaka također će riješiti ovaj problem. Izbjegavajte upotrebu znaka postotka (ili specifikatora formata) u stvarnom tekstu poruke, a da ga pravilno ne izbjegnete (poput %%). U suprotnom će rezultirati padovima.

:::

## Srodne Funkcije

- [SendClientMessageToAll](SendClientMessageToAll): Pošalji poruku svim igračima.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Prisilite igrača da pošalje tekst za jednog igrača.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Prisilite igrača da pošalje tekst za sve igrače.
