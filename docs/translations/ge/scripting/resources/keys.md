---
title: "Keys"
---

:::note

To be used with [GetPlayerKeys](../functions/GetPlayerKeys) and [OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange).

SA-MP uses bitmasking to determine which keys are pressed and which are not. Here's an article on bitmasking: [http://en.wikipedia.org/wiki/Mask\_(computing)](<http://en.wikipedia.org/wiki/Mask_(computing)>)

:::

| Macro                    | Value     | Embedding Code (On Foot) (7) | Embedding Code (In Vehicle) (7) | Default Key (On Foot)                                    | Default Key (In Vehicle) |
| ------------------------ | --------- | ---------------------------- | ------------------------------- | -------------------------------------------------------- | ------------------------ |
| KEY_ACTION               | 1         | ~k~~PED_ANSWER_PHONE~        | ~k~~VEHICLE_FIREWEAPON_ALT~     | TAB                                                      | ALT GR / LCTRL / NUM0    |
| KEY_CROUCH               | 2         | ~k~~PED_DUCK~                | ~k~~VEHICLE_HORN~               | C                                                        | H / CAPSLOCK             |
| KEY_FIRE                 | 4         | ~k~~PED_FIREWEAPON~          | ~k~~VEHICLE_FIREWEAPON~         | LCTRL / LMB (Left Mouse Button)                          | LALT                     |
| KEY_SPRINT               | 8         | ~k~~PED_SPRINT~              | ~k~~VEHICLE_ACCELERATE~         | SPACE                                                    | W                        |
| KEY_SECONDARY_ATTACK     | 16        | ~k~~VEHICLE_ENTER_EXIT~      | ~k~~VEHICLE_ENTER_EXIT~         | ENTER                                                    | ENTER                    |
| KEY_JUMP                 | 32        | ~k~~PED_JUMPING~             | ~k~~VEHICLE_BRAKE~              | LSHIFT                                                   | S                        |
| KEY_LOOK_RIGHT           | 64        | -                            | ~k~~VEHICLE_LOOKRIGHT~          | -                                                        | E                        |
| KEY_HANDBRAKE/KEY_AIM(1) | 128       | ~k~~PED_LOCK_TARGET~         | ~k~~VEHICLE_HANDBRAKE~          | RMB (Right Mouse Button)                                 | SPACE                    |
| KEY_LOOK_LEFT            | 256       | -                            | ~k~~VEHICLE_LOOKLEFT~           | -                                                        | Q                        |
| KEY_LOOK_BEHIND          | 512       | ~k~~PED_LOOKBEHIND~          | ~k~~VEHICLE_LOOKBEHIND~         | NUM1 / MMB (Middle Mouse Button - Click the mouse wheel) | 2                        |
| KEY_SUBMISSION           | 512       | -                            | ~k~~TOGGLE_SUBMISSIONS~         | NUM1 / MMB (Middle Mouse Button - Click the mouse wheel) | 2 / NUMPAD +             |
| KEY_WALK                 | 1024      | ~k~~SNEAK_ABOUT~             | -                               | LALT                                                     | -                        |
| KEY_ANALOG_UP            | 2048      | -                            | ~k~~VEHICLE_TURRETUP~           | NUM8(6)                                                  | NUM8                     |
| KEY_ANALOG_DOWN          | 4096      | -                            | ~k~~VEHICLE_TURRETDOWN~         | NUM2(6)                                                  | NUM2                     |
| KEY_ANALOG_LEFT          | 8192      | ~k~~VEHICLE_LOOKLEFT~        | ~k~~VEHICLE_TURRETLEFT~         | NUM4                                                     | NUM4                     |
| KEY_ANALOG_RIGHT         | 16384     | ~k~~VEHICLE_LOOKRIGHT~       | ~k~~VEHICLE_TURRETRIGHT~        | NUM6                                                     | NUM6                     |
| KEY_YES(2)               | 65536     | ~k~~CONVERSATION_YES~        | ~k~~CONVERSATION_YES~           | Y                                                        | Y                        |
| KEY_NO(2)                | 131072    | ~k~~CONVERSATION_NO~         | ~k~~CONVERSATION_NO~            | N                                                        | N                        |
| KEY_CTRL_BACK(2)         | 262144(4) | ~k~~GROUP_CONTROL_BWD~       | ~k~~GROUP_CONTROL_BWD~          | H                                                        | H                        |
| UNDEFINED(3)             | -         | ~k~~GROUP_CONTROL_FWD~       | ~k~~GROUP_CONTROL_FWD~          | G                                                        | G                        |
| KEY_UP                   | -128      | ~k~~GO_FORWARD~              | ~k~~VEHICLE_STEERUP~            | UP                                                       | UP                       |
| KEY_DOWN                 | 128       | ~k~~GO_BACK~                 | ~k~~VEHICLE_STEERDOWN~          | DOWN                                                     | DOWN                     |
| KEY_LEFT                 | -128      | ~k~~GO_LEFT~                 | ~k~~VEHICLE_STEERLEFT~          | LEFT                                                     | LEFT                     |
| KEY_RIGHT                | 128       | ~k~~GO_RIGHT~                | ~k~~VEHICLE_STEERRIGHT~         | RIGHT                                                    | RIGHT                    |

**(1)** Key not defined in SA:MP includes. You must

```c
#define KEY_AIM KEY_HANDBRAKE
```

or use KEY_HANDBRAKE.

**(2)** Supported since 0.3d. Not detectable in earlier versions. This key can not be detected when the player is in [spectator mode](../functions/TogglePlayerSpectating).

**(3)** GROUP_CONTROL_FWD cannot be detected in SA-MP, as it used internally to enter vehicles as passenger. However, the gametext definition still exists.

**(4)** If the key number "262144" does not work, just use key number "2".

**(6)** Only detected when "JOYPAD" configuration is selected for controller.

**(7)** Embedding codes only work for [client messages](../functions/SendDeathMessage), [textdraws](../functions/TextDrawCreate) and [gametexts](../functions/GameTextForPlayer).
