---
keywords:
- Intents
---

# Intents

Intents are a way to tell the gateway what events you want to receive. You can specify intents when creating a bot with createDefaultBot or createCustomBot.

## Intents

| Intent                          | Safe to Disable    | Privileged         | Enabled by Default |
|---------------------------------|--------------------|--------------------|--------------------|
| `GUILDS`                        | :x:                | :x:                | :white_check_mark: |
| `GUILD_MEMBERS`                 | :heavy_check_mark: | :heavy_check_mark: | :white_check_mark: |
| `GUILD_BANS`                    | :warning:\*        | :x:                | :white_check_mark: |
| `GUILD_EMOJIS`                  | :warning:\*        | :x:                | :white_check_mark: |
| `GUILD_INTEGRATIONS`            | :heavy_check_mark: | :x:                | :white_check_mark: |
| `GUILD_WEBHOOKS`                | :heavy_check_mark: | :x:                | :white_check_mark: |
| `GUILD_INVITES`                 | :heavy_check_mark: | :x:                | :white_check_mark: |
| `GUILD_VOICE_STATES`            | :warning:\*        | :x:                | :white_check_mark: |
| `GUILD_PRESENCES`               | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| `GUILD_MESSAGES`                | :heavy_check_mark: | :x:                | :white_check_mark: |
| `GUILD_MESSAGE_REACTIONS`       | :heavy_check_mark: | :x:                | :white_check_mark: |
| `GUILD_MESSAGE_TYPING`          | :heavy_check_mark: | :x:                | :white_check_mark: |
| `DIRECT_MESSAGES`               | :heavy_check_mark: | :x:                | :white_check_mark: |
| `DIRECT_MESSAGE_REACTIONS`      | :heavy_check_mark: | :x:                | :white_check_mark: |
| `DIRECT_MESSAGE_TYPING`         | :heavy_check_mark: | :x:                | :white_check_mark: |
| `MESSAGE_CONTENT`               | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| `AUTO_MODERATION_CONFIGURATION` | :heavy_check_mark: | :x:                | :x:                |
| `AUTO_MODERATION_EXECUTION`     | :heavy_check_mark: | :x:                | :x:                |