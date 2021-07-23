---
title: TogglePlayerSpectating
description: Uključite ili isključite da li je igrač u režimu spectatora/gledatelja.
tags: ["player"]
---

## Deskripcija

Uključite ili isključite da li je igrač u režimu spectatora/gledatelja. Dok je u spectator režimu igrač može gledati ostale igrače i vozila. Nakon korištenja ove funkcije ili PlayerSpectatePlayer ili PlayerSpectateVehicle mora biti korišten.

| Ime      | Deskripcija                                           |
| -------- | ----------------------------------------------------- |
| playerid | ID koji bi trebao gledati                             |
| toggle   | 1 da uključite spectate-anje/gledanje 0 da isključite |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač ne postoji.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Zabilješke

:::tip

Kada je režim gledatelja onemogućen, automatski će se pozvati OnPlayerSpawn, ako želite vratiti stanje igrača u stanje prije gledanja, morat ćete to riješiti u OnPlayerSpawn. Takođe imajte na umu da taj igrač također može ići na odabir klase prije nego što je koristio F4 za vrijeme gledanja, igrač također MOŽE umrijeti u režimu spektakularnosti zbog različitih kvarova.

:::

:::tip

Kada je igrač u spectate načinu rada, njegov HUD je skriven, što ga čini korisnim za postavljanje igračeve kamere bez HUD-a. Također će se usmjeravati objekti u blizini kamere igrača, što ovo čini korisnim za interpolaciju kamera.

:::

:::warning

Ako igrač nije učitan prije postavljanja statusa spectatora na 0, konekcija se može neočekivano prekinuti.

:::

## Srodne Funkcije

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Nadgledaj igrača.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Nadgledaj vozilo.
