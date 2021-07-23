---
title: Starting IDs
description: Everything like objects, players or vehicles use IDs. Some IDs start with 0, others start with 1.
sidebar_label: Starting IDs
---

Everything like objects, players or vehicles use IDs. Some IDs start with 0, others start with 1.

| Type                      | Starting ID |
| ------------------------- | ----------- |
| 3D Text Label             | 0           |
| Actor                     | 0           |
| File                      | 0           |
| GangZone                  | 0           |
| Object                    | 1           |
| Pickup                    | 0           |
| Player                    | 0           |
| Player Class              | 0           |
| TextDraw / PlayerTextDraw | 0           |
| Timer                     | 1           |
| Vehicle                   | 1           |

You see, vehicles and objects start using 1, not 0! So if you plan to use an array to hold all IDs you have to use the ID from CreateObject/CreateVehicle/... and subtract 1 to get the array element ID.
