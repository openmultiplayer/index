---
title: CreateObject
description: Kreira objekat na određenim kordinatama iz igre.
tags: []
---

## Deskripcija

Kreira objekat na određenim kordinatama iz igre.

| Ime                | Deskripcija                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| modelid            | Model za kreirati.                                                                                                                                                                   |
| Float:X            | X kordinata za kreirati objekat.                                                                                                                                                     |
| Float:Y            | Y kordinata za kreirati objekat.                                                                                                                                                     |
| Float:Z            | Z kordinata za kreirati objekat.                                                                                                                                                     |
| Float:rX           | X rotacija za objekat.                                                                                                                                                               |
| Float:rY           | Y rotacija za objekat.                                                                                                                                                               |
| Float:rZ           | Z rotacija za objekat.                                                                                                                                                               |
| Float:DrawDistance | (neobavezno) Udaljenost na kojoj San Andreas prikazuje predmete. 0.0 uzrokovat će prikazivanje objekata na zadanim udaljenostima. Upotrebljiv od 0,3b. Ograničeno na 300 prije 0,3x. |

## Primjeri

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Objekt će se prikazati na zadanoj udaljenosti.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Objekt će se prikazati na 300,0 jedinica.
    return 1;
}
```

## Zabilješke

:::tip

Postoji limit od 1000 objekata (MAX_OBJECTS). Da biste zaobišli ovo ograničenje, možete upotrijebiti streamer.

:::

## Srodne Funkcije

- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [SetObjectMaterial](SetObjectMaterial): Zamijeni teksturu objekta sa teksturom drugog modela iz igre.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Zamijeni teksturu player objekta sa tekstom.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Zamijeni teksturu player objekta sa teksturom drugog modela iz igre.
