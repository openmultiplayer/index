---
title: SetTimer
description: Postavlja 'timer' za pozvati funkciju nakon određenog vremena.
tags: []
---

## Deskripcija

Postavlja 'timer' za pozvati funkciju nakon određenog vremena. Može biti postavljen da se ponavlja.

| Ime        | Deskripcija                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| funcname[] | Ime funkcije za pozvati kao string. Ovo mora biti public/javna funkcija (forwarded). Prazan string će srušiti server. |
| interval   | Interval u milisekundama.                                                                                             |
| repeating  | Boolean (true/false) o tome treba li tajmer ponoviti ili ne.                                                          |

## Returns

ID tajmera koji je pokrenut. ID-ovi tajmera počinju od 1.

## Primjeri

```c
forward message();

public OnGameModeInit()
{
    print("Pokrecemo tajmer...");
    SetTimer("message", 1000, false); // Postavi tajmer od 1000 milisekundi (1 sekunda)
}

public message()
{
    print("1 sekunda je prošla.");
}
```

## Zabilješke

:::tip

Intervali tajmera nisu tačni (otprilike 25% popusta). Postoje ispravci dostupni ovdje i ovdje. ID-ovi tajmera nikada se ne koriste dva puta. Možete koristiti KillTimer () na ID-u tajmera i neće biti važno pokreće li se ili ne. Funkcija koju treba pozvati mora biti javna, što znači da mora biti proslijeđena. Korištenje mnogih tajmera rezultirat će povećanom upotrebom memorije / procesora.

:::

## Srodne Funkcije

- [SetTimerEx](SetTimerEx): Postavi tajmer sa parametrima.
- [KillTimer](KillTimer): Zaustavi tajmer.
