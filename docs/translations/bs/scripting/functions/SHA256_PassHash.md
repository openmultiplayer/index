---
title: SHA256_PassHash
description: Hashira lozinku pomoću algoritma heširanja SHA-256.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 R1 i ne radi u nižim verzijama!

:::

## Deskripcija

Hashira lozinku pomoću algoritma heširanja SHA-256. Uključuje salt. Izlaz je uvijek 256 bita, ili ekvivalent od 64 Pawn ćelija.

| Ime          | Deskripcija                                    |
| ------------ | ---------------------------------------------- |
| password[]   | Lozinka za heširati.                           |
| salt[]       | Salt za koristiti u heširanju.                 |
| ret_hash[]   | Vraćeni heš u velikom heksadecimalnom sažetku. |
| ret_hash_len | Vraćeni heš u maksimalnoj dužini.              |

## Returns

Heš je pohranjen u određenom nizu.

## Primjeri

```c
public OnGameModeInit()
{
    new MyHash[64 + 1]; // + 1 za račun potrebnog nultog terminatora
    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);
    printf("Returned hash: %s", MyHash); // Vratio hash: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF
    return 1;
}
```

## Zabilješke

:::tip

Vraćeni hash nema nula popunjavanja (npr. mogući prefiks 00ABCD123...).

:::

:::tip

Salt je dodan na kraj lozinke, što znači da lozinka 'foo' i salt 'bar' čine 'foobar'. Salt bi treba biti nasumičan, jedinstven za svakog igrača i najmanje dug kao hashirana lozinka. Treba ga pohraniti uz stvarni heš na računu igrača.

:::

:::warning

Ova funkcija nije binarno sigurna. Korištenje binarnih vrijednosti na lozinci i soli može dati neočekivani rezultat.

:::

## Srodne Funkcije
