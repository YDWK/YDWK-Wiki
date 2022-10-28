---
keywords:
- Sample
- Example
---

# Sample Bot

To create a bot, you can use the `createDefaultBot` function. This function will create a bot with all recommended
intents.

```kotlin
fun main() {
    createDefaultBot("TOKEN").build()
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
    val ydwk = createDefaultBot(JConfigUtils.getString("token")).build()
    ydwk.addEvent(Bot())
}
```

or

```kotlin
fun main() {
    val ydwk = createDefaultBot(JConfigUtils.getString("token")).build()

    ydwk.on<ReadyEvent> { println("Ready!") }
}
```