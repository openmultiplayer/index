---
title: "Lag Compensation"
descripion: Lag compensation explanation.
---

<VersionWarn name='feature' version='SA-MP 0.3z' />

Lag compensation for fired bullets is enabled by default on SA-MP servers since 0.3z. It can be toggled using the `lagcompmode` server variable in [server.cfg](server.cfg). Setting it to 0 will disable lag compensation completely and players will have to lead their shots (fired ahead of targets).

Disabling Lag Compensation will prevent [OnPlayerWeaponShot](../../callbacks/OnPlayerWeaponShot) from being called.

This variable can only be set in [server.cfg](server.cfg).
