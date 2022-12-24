---
keywords:

- gateway
- Cache

---

# Cache

## Introduction

The cache literal definition is "a collection of items of the same type stored in a hidden or inaccessible place."

In the context of YDWK, the cache is a collection of Discord entities such as guilds, channels, users, etc.

Each entity has a unique ID (except for members which will be explained later) called "snowflake".

::: tip
Discord sends entity creation/update/deletion to the gateway through events. The cache is updated accordingly. More info
on events [here](/docs/gateway/events).
:::

## Cache structure and usage

The way the cache is stored is through using a HashMap which takes the snowflake id and the object itself. This makes it
easier to access and retrieve.

The way the cache is retrieved for a set entity is through the 'YDWK' interface which is the heart of the library. Say
for example you want to get a user from the cache using there id you would do the following:

```kotlin
val ydwk = createDefaultBot("TOKEN").build()
val user = ydwk.getUserById("USER_ID")
```

What the getUserById does is it checks if the ability to store users cache is enabled which it is by default. If it is
enabled it will check if the user is in the cache and if it is it will return the user object. If it is not in the cache
it will return null.

It is not possible to delete entities from the cache yourself and this is done automatically by the library.

### Members

Members are a special case as they don't have a unique id. The way this is solved is by using the guild id and the user
id. This is done by concatenating the two ids together and using that as the key for the HashMap. The value is the
member object.

An example of this is:

```kotlin
val ydwk = createDefaultBot("TOKEN").build()
val member = ydwk.getMemberById("GUILD_ID", "USER_ID")
```

This works the same as the getUserById method but instead of using the user id it uses the guild id and the user id.

## Enabling and disabling cache

### List of cache types

| Cache type    | Enabled by default   |
|---------------|----------------------|
| `GUILDS`      | :white_check_mark:   |
| `USER`        | :white_check_mark:   |
| `CHANNELS`    | :white_check_mark:   |
| `ROLES`       | :white_check_mark:   |
| `EMOJIS`      | :x:                  |
| `Message`     | :white_check_mark:   |
| `STICKER`     | :x:                  |
| `ATTACHMENT`  | :white_check_mark:\* |
| `APPLICATION` | :white_check_mark:\* |

::: warning
\* This means that the type being enabled by default is subject to change.
:::

To enable or disable a cache type you would do the following:

```kotlin
 val ydwk =
    createDefaultBot(JConfigUtils.getString("token") ?: throw Exception("Token not found!"))
        .setAllowedCache(mutableListOf(CacheIds.USER, CacheIds.GUILD, CacheIds.CHANNEL))
        .setDisallowedCache(mutableListOf(CacheIds.ROLE, CacheIds.EMOJI))
        .build()
```

The setAllowedCache method takes a list of cache types that you want to enable. The setDisallowedCache method takes a
list of cache types that you want to disable.

Well that's it for the cache!