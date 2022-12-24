---
keywords:

- JConfig
- usage

---

# Usage of JConfig

## Creating a config

To create a config you will need to use `JConfigBuilder` which is a builder class for `JConfig`. You can create a config
like this:

```kotlin
val config = JConfigBuilder()
    .setFilename("keys")
    .build()
```

The default filename is `config` so you don't need to set it if you want to use the default filename. The extension is
a `.json` so you don't need to add it.

The default path is `./` which is the current directory. You can change this by using `setPath`:

```kotlin
val config = JConfigBuilder()
    .setDirectoryPath("./config/")
    .build()
```

## Creating config.json file

The default path is `./config.json` so you will need to create a `config.json` file in the current directory. You can
change the path by using `setDirectoryPath` as shown above.

An example of a config.json file is 

```json
{
  "token" : "TOKEN"
}
```

## Getting values

