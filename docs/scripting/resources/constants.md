---
title: Constants
description: A list of all standard library constant definitions.
tags: []
---

# a_samp

## Limits

| Constant              | Value             |
|-----------------------|-------------------|
| MAX_PLAYER_NAME       | 24                |
| MAX_PLAYERS           | 1000              |
| MAX_VEHICLES          | 2000              |
| MAX_ACTORS            | 1000              |
| MAX_OBJECTS           | 2000              |
| MAX_GANG_ZONES        | 1024              |
| MAX_TEXT_DRAWS        | Text:2048         |
| MAX_PLAYER_TEXT_DRAWS | PlayerText:256    |
| MAX_MENUS             | Menu:128          |
| MAX_3DTEXT_GLOBAL     | Text3D:1024       |
| MAX_3DTEXT_PLAYER     | PlayerText3D:1024 |
| MAX_PICKUPS           | 4096              |

## Invalid Constants

| Constant                 | Value               |
|--------------------------|---------------------|
| NO_TEAM                  | 255                 |
| INVALID_PLAYER_ID        | 0xFFFF              |
| INVALID_VEHICLE_ID       | 0xFFFF              |
| INVALID_ACTOR_ID         | 0xFFFF              |
| INVALID_OBJECT_ID        | 0xFFFF              |
| INVALID_MENU             | Menu:0xFF           |
| INVALID_TEXT_DRAW        | Text:0xFFFF         |
| INVALID_PLAYER_TEXT_DRAW | PlayerText:0xFFFF   |
| INVALID_GANG_ZONE        | -1                  |
| INVALID_3DTEXT_ID        | Text3D:0xFFFF       |
| INVALID_PLAYER_3DTEXT_ID | PlayerText3D:0xFFFF |

## Weapon Constants

| Weapon            | Constant                | Value |
|-------------------|-------------------------|-------|
| Brass Knuckle     | WEAPON_BRASSKNUCKLE     | 1     |
| Golf Club         | WEAPON_GOLFCLUB         | 2     |
| Nitestick         | WEAPON_NITESTICK        | 3     |
| Knife             | WEAPON_KNIFE            | 4     |
| Baseball Bat      | WEAPON_BAT              | 5     |
| Shovel            | WEAPON_SHOVEL           | 6     |
| Pool Stick        | WEAPON_POOLSTICK        | 7     |
| Katana            | WEAPON_KATANA           | 8     |
| Chainsaw          | WEAPON_CHAINSAW         | 9     |
| Dildo             | WEAPON_DILDO            | 10    |
| Dildo             | WEAPON_DILDO2           | 11    |
| Vibrator          | WEAPON_VIBRATOR         | 12    |
| Vibrator          | WEAPON_VIBRATOR2        | 13    |
| Flower            | WEAPON_FLOWER           | 14    |
| Cane              | WEAPON_CANE             | 15    |
| Grenade           | WEAPON_GRENADE          | 16    |
| Teargas           | WEAPON_TEARGAS          | 17    |
| Molotov           | WEAPON_MOLTOV           | 18    |
| Colt-45           | WEAPON_COLT45           | 22    |
| Silenced Pistol   | WEAPON_SILENCED         | 23    |
| Deagle            | WEAPON_DEAGLE           | 24    |
| Shotgun           | WEAPON_SHOTGUN          | 25    |
| Sawn-Off Shotgun  | WEAPON_SAWEDOFF         | 26    |
| Combat Shotgun    | WEAPON_SHOTGSPA         | 27    |
| Micro SMG         | WEAPON_UZI              | 28    |
| MP-5              | WEAPON_MP5              | 29    |
| AK-47             | WEAPON_AK47             | 30    |
| M4                | WEAPON_M4               | 31    |
| Tec-9             | WEAPON_TEC9             | 32    |
| Rifle             | WEAPON_RIFLE            | 33    |
| Sniper            | WEAPON_SNIPER           | 34    |
| Roocket Launcher  | WEAPON_ROCKETLAUNCHER   | 35    |
| Heat Seeker       | WEAPON_HEATSEEKER       | 36    |
| Flame Thrower     | WEAPON_FLAMETHROWER     | 37    |
| Minigun           | WEAPON_MINIGUN          | 38    |
| Satchel Charge    | WEAPON_SATCHEL          | 39    |
| Bomb              | WEAPON_BOMB             | 40    |
| Spraycan          | WEAPON_SPRAYCAN         | 41    |
| Fire Extinguisher | WEAPON_FIREEXTINGUISHER | 42    |
| Camera            | WEAPON_CAMERA           | 43    |
| Parachute         | WEAPON_PARACHUTE        | 46    |
| Vehicle           | WEAPON_VEHICLE          | 49    |
| Drown             | WEAPON_DROWN            | 53    |
| Collision         | WEAPON_COLLISION        | 54    |

## Marker Modes used by ShowPlayerMarkers()

| Constant                       | Value |
|--------------------------------|-------|
| PLAYER_MARKERS_MODE_OFF        | 0     |
| PLAYER_MARKERS_MODE_GLOBAL     | 1     |
| PLAYER_MARKERS_MODE_STREAMED   | 2     |

## Keys

| Constant                       | Value  |
|--------------------------------|--------|
| KEY_ACTION                     | 1      |
| KEY_CROUCH                     | 2      |
| KEY_FIRE                       | 4      |
| KEY_SPRINT                     | 8      |
| KEY_SECONDARY_ATTACK           | 16     |
| KEY_JUMP                       | 32     |
| KEY_LOOK_RIGHT                 | 64     |
| KEY_HANDBRAKE                  | 128    |
| KEY_LOOK_LEFT                  | 256    |
| KEY_SUBMISSION                 | 512    |
| KEY_LOOK_BEHIND                | 512    |
| KEY_WALK                       | 1024   |
| KEY_ANALOG_UP                  | 2048   |
| KEY_ANALOG_DOWN                | 4096   |
| KEY_ANALOG_LEFT                | 8192   |
| KEY_ANALOG_RIGHT               | 16384  |
| KEY_YES                        | 65536  |
| KEY_NO                         | 131072 |
| KEY_CTRL_BACK                  | 262144 |

## Dialog Styles

| Constant                       | Value |
|--------------------------------|-------|
| DIALOG_STYLE_MSGBOX            | 0     |
| DIALOG_STYLE_INPUT             | 1     |
| DIALOG_STYLE_LIST              | 2     |
| DIALOG_STYLE_PASSWORD          | 3     |
| DIALOG_STYLE_TABLIST           | 4     |
| DIALOG_STYLE_TABLIST_HEADERS   | 5     |

## TextDraw

| Constant                       | Value |
|--------------------------------|-------|
| TEXT_DRAW_FONT_SPRITE_DRAW     | 4     |
| TEXT_DRAW_FONT_MODEL_PREVIEW   | 5     |

## SVar Enumeration

| Constant                       | Value |
|--------------------------------|-------|
| SERVER_VARTYPE_NONE            | 0     |
| SERVER_VARTYPE_INT             | 1     |
| SERVER_VARTYPE_STRING          | 2     |
| SERVER_VARTYPE_FLOAT           | 3     |

## Artwork / Net Models

| Constant                       | Value |
|--------------------------------|-------|
| DOWNLOAD_REQUEST_EMPTY         | 0     |
| DOWNLOAD_REQUEST_MODEL_FILE    | 1     |
| DOWNLOAD_REQUEST_TEXTURE_FILE  | 2     |

## Click Source Scoreboard

| Constant                       | Value |
|--------------------------------|-------|
| CLICK_SOURCE_SCOREBOARD        | 0     |

## Edit Response

| Constant                       | Value |
|--------------------------------|-------|
| EDIT_RESPONSE_CANCEL           | 0     |
| EDIT_RESPONSE_FINAL            | 1     |
| EDIT_RESPONSE_UPDATE           | 2     |

## Select Object

| Constant                       | Value |
|--------------------------------|-------|
| SELECT_OBJECT_GLOBAL_OBJECT    | 1     |
| SELECT_OBJECT_PLAYER_OBJECT    | 2     |

## Bullet Hit Type

| Constant                       | Value |
|--------------------------------|-------|
| BULLET_HIT_TYPE_NONE           | 0     |
| BULLET_HIT_TYPE_PLAYER         | 1     |
| BULLET_HIT_TYPE_VEHICLE        | 2     |
| BULLET_HIT_TYPE_OBJECT         | 3     |
| BULLET_HIT_TYPE_PLAYER_OBJECT  | 4     |

# a_players

## Limits

| Constant                        | Value |
|---------------------------------|-------|
| MAX_PLAYER_ATTACHED_OBJECTS     | 10    |
| MAX_CHATBUBBLE_LENGTH           | 144   |

## Special Actions

| Constant                        | Value |
|---------------------------------|-------|
| SPECIAL_ACTION_NONE             | 0     |
| SPECIAL_ACTION_DUCK             | 1     |
| SPECIAL_ACTION_USEJETPACK       | 2     |
| SPECIAL_ACTION_ENTER_VEHICLE    | 3     |
| SPECIAL_ACTION_EXIT_VEHICLE     | 4     |
| SPECIAL_ACTION_DANCE1           | 5     |
| SPECIAL_ACTION_DANCE2           | 6     |
| SPECIAL_ACTION_DANCE3           | 7     |
| SPECIAL_ACTION_DANCE4           | 8     |
| SPECIAL_ACTION_HANDSUP          | 10    |
| SPECIAL_ACTION_USECELLPHONE     | 11    |
| SPECIAL_ACTION_SITTING          | 12    |
| SPECIAL_ACTION_STOPUSECELLPHONE | 13    |
| SPECIAL_ACTION_DRINK_BEER       | 20    |
| SPECIAL_ACTION_SMOKE_CIGGY      | 21    |
| SPECIAL_ACTION_DRINK_WINE       | 22    |
| SPECIAL_ACTION_DRINK_SPRUNK     | 23    |
| SPECIAL_ACTION_PISSING          | 68    |
| SPECIAL_ACTION_CUFFED           | 24    |
| SPECIAL_ACTION_CARRY            | 25    |

## Fighting Styles

| Constant                        | Value |
|---------------------------------|-------|
| FIGHT_STYLE_NORMAL              | 0     |
| FIGHT_STYLE_BOXING              | 1     |
| FIGHT_STYLE_KUNGFU              | 2     |
| FIGHT_STYLE_KNEEHEAD            | 3     |
| FIGHT_STYLE_GRABKICK            | 4     |
| FIGHT_STYLE_ELBOW               | 5     |

## Weapon Skills

| Constant                        | Value |
|---------------------------------|-------|
| WEAPONSKILL_PISTOL              | 0     |
| WEAPONSKILL_PISTOL_SILENCED     | 1     |
| WEAPONSKILL_DESERT_EAGLE        | 2     |
| WEAPONSKILL_SHOTGUN             | 3     |
| WEAPONSKILL_SAWNOFF_SHOTGUN     | 4     |
| WEAPONSKILL_SPAS12_SHOTGUN      | 5     |
| WEAPONSKILL_MICRO_UZI           | 6     |
| WEAPONSKILL_MP5                 | 7     |
| WEAPONSKILL_AK47                | 8     |
| WEAPONSKILL_M4                  | 9     |
| WEAPONSKILL_SNIPERRIFLE         | 10    |

## Weapon States

| Constant                   | Value |
|----------------------------|-------|
| WEAPONSTATE_UNKNOWN        | -1    |
| WEAPONSTATE_NO_BULLETS     | 0     |
| WEAPONSTATE_LAST_BULLET    | 1     |
| WEAPONSTATE_MORE_BULLETS   | 2     |
| WEAPONSTATE_RELOADING      | 3     |

## PVar Enumeration

| Constant                   | Value |
|----------------------------|-------|
| PLAYER_VARTYPE_NONE        | 0     |
| PLAYER_VARTYPE_INT         | 1     |
| PLAYER_VARTYPE_STRING      | 2     |
| PLAYER_VARTYPE_FLOAT       | 3     |

## Map Icon

| Constant                   | Value |
|----------------------------|-------|
| MAPICON_LOCAL              | 0     |
| MAPICON_GLOBAL             | 1     |
| MAPICON_LOCAL_CHECKPOINT   | 2     |
| MAPICON_GLOBAL_CHECKPOINT  | 3     |

## Camera

| Constant                   | Value |
|----------------------------|-------|
| CAMERA_CUT                 | 2     |
| CAMERA_MOVE                | 1     |

## Spectating

| Constant                   | Value |
|----------------------------|-------|
| SPECTATE_MODE_NORMAL       | 1     |
| SPECTATE_MODE_FIXED        | 2     |
| SPECTATE_MODE_SIDE         | 3     |

## Recording for NPC playback

| Constant                             | Value |
|--------------------------------------|-------|
| PLAYER_RECORDING_TYPE_NONE           | 1     |
| PLAYER_RECORDING_TYPE_DRIVER         | 2     |
| PLAYER_RECORDING_TYPE_ONFOOT         | 3     |

# a_vehicles

## Car Mod Type

| Constant                | Value |
|-------------------------|-------|
| CARMODTYPE_SPOILER      | 0     |
| CARMODTYPE_HOOD         | 1     |
| CARMODTYPE_ROOF         | 2     |
| CARMODTYPE_SIDESKIRT    | 3     |
| CARMODTYPE_LAMPS        | 4     |
| CARMODTYPE_NITRO        | 5     |
| CARMODTYPE_EXHAUST      | 6     |
| CARMODTYPE_WHEELS       | 7     |
| CARMODTYPE_STEREO       | 8     |
| CARMODTYPE_HYDRAULICS   | 9     |
| CARMODTYPE_FRONT_BUMPER | 10    |
| CARMODTYPE_REAR_BUMPER  | 11    |
| CARMODTYPE_VENT_RIGHT   | 12    |
| CARMODTYPE_VENT_LEFT    | 13    |

## Vehicle Params

| Constant                  | Value |
|---------------------------|-------|
| VEHICLE_PARAMS_UNSET      | 0     |
| VEHICLE_PARAMS_OFF        | 1     |
| VEHICLE_PARAMS_ON         | 2     |

## Vehicle Model Info

| Constant                          | Value |
|-----------------------------------|-------|
| VEHICLE_MODEL_INFO_SIZE           | 1     |
| VEHICLE_MODEL_INFO_FRONTSEAT      | 2     |
| VEHICLE_MODEL_INFO_REARSEAT       | 3     |
| VEHICLE_MODEL_INFO_PETROLCAP      | 4     |
| VEHICLE_MODEL_INFO_WHEELSFRONT    | 5     |
| VEHICLE_MODEL_INFO_WHEELSREAR     | 6     |
| VEHICLE_MODEL_INFO_WHEELSMID      | 7     |
| VEHICLE_MODEL_INFO_FRONT_BUMPER_Z | 8     |
| VEHICLE_MODEL_INFO_REAR_BUMPER_Z  | 9     |

# a_objects

## Object Material Size

| Constant                     | Value |
|------------------------------|-------|
| OBJECT_MATERIAL_SIZE_32x32   | 10    |
| OBJECT_MATERIAL_SIZE_64x32   | 20    |
| OBJECT_MATERIAL_SIZE_64x64   | 30    |
| OBJECT_MATERIAL_SIZE_128x32  | 40    |
| OBJECT_MATERIAL_SIZE_128x64  | 50    |
| OBJECT_MATERIAL_SIZE_128x128 | 60    |
| OBJECT_MATERIAL_SIZE_256x32  | 70    |
| OBJECT_MATERIAL_SIZE_256x64  | 80    |
| OBJECT_MATERIAL_SIZE_256x128 | 90    |
| OBJECT_MATERIAL_SIZE_256x256 | 100   |
| OBJECT_MATERIAL_SIZE_512x64  | 110   |
| OBJECT_MATERIAL_SIZE_512x128 | 120   |
| OBJECT_MATERIAL_SIZE_512x256 | 130   |
| OBJECT_MATERIAL_SIZE_512x512 | 140   |

## Object Material Text Alignmment

| Constant                          | Value |
|-----------------------------------|-------|
| OBJECT_MATERIAL_TEXT_ALIGN_LEFT   | 0     |
| OBJECT_MATERIAL_TEXT_ALIGN_CENTER | 1     |
| OBJECT_MATERIAL_TEXT_ALIGN_RIGHT  | 2     |

# a_http


| Constant                      | Value |
|-------------------------------|-------|
| HTTP_ERROR_BAD_HOST           | 1     |
| HTTP_ERROR_NO_SOCKET          | 2     |
| HTTP_ERROR_CANT_CONNECT       | 3     |
| HTTP_ERROR_CANT_WRITE         | 4     |
| HTTP_ERROR_CONTENT_TOO_BIG    | 5     |
| HTTP_ERROR_MALFORMED_RESPONSE | 6     |
