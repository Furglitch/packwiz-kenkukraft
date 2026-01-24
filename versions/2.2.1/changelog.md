Full Changelog: [*2.2.0* ➜ *2.2.1*](https://github.com/Furglitch/packwiz-kenkukraft/compare/2.2.0...2.2.1)

<ins>**Configs Changed:**</ins>
- *KubeJS*: Reworked `/time set` commands to properly update the time
  - Vanilla `/time set` reset the day count to 0 when using named times like "day" or "night" or seconds (`30s`) or ticks (`1000t`). Now these commands will set the time while preserving the current day count.
  - Day count can be set by using `time set <day_number>d`, e.g. `/time set 5d` will set the time to the start of day 5 (i.e. 120000 ticks).

<ins>**Swapped:**</ins>
- *Multiplayer Server Pause* ➜ *Ready Player Fun*: MSP does not pause when running Chunky on an empty server.
  - Note: Chunky is not included in this pack by default, but can be added via your modpack/server manager. It's recommended to disable Distant Horizons while pre-generating chunks with Chunky.
- *Counter (Day/Death)* ➜ *PainterJS*: Reimplemented counter overlay with KubeJS script for better compatibility with /setday command.