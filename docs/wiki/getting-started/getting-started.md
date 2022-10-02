# Getting started

First of all have a look at how to install YDWK which can be found [here](/wiki/getting-started/installation).

## Creating a bot

To create a bot, you can use the `createDefaultBot` function. This function will create a bot with all recommended intents.

```kotlin
fun main() {
    createDefaultBot("TOKEN")
}
```

## Listening to events

To listen to events, you can use the `ListenerAdapter` or the `on` function.

```kotlin
class Bot : ListenerAdapter() {
    override fun onReady(event: ReadyEvent) {
        println("Bot is ready!")
    }
}

fun main() {
    val ydwk = createDefaultBot(JConfigUtils.getString("token"))
    ydwk.addEvent(Bot())
}
```

or

```kotlin
fun main() {
    val ydwk = createDefaultBot(JConfigUtils.getString("token"))

    ydwk.on<ReadyEvent> { println("Ready!") }
}
```

For storing data, you can use the `JConfigUtils` class. This class is a wrapper for the [JConfig](https://realyusufismail.github.io/JConfig/) library made by me.

```kotlin
fun main() {
    val token = JConfigUtils.getString("token")
    val ydwk = createDefaultBot(token)
}
```
