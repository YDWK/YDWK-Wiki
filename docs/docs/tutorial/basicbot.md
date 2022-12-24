---
keywords:

- basic bot

---

# Creating a Basic Bot

what is a bot?

A bot is a program that can interact with the discord api. It can send messages, read messages, and do many other
things. In this tutorial, we will be creating a basic bot that can send a message when a slash command is triggered.

## Creating the application

To create the application see [here](/docs/tutorial/README.md) page.

## Creating the bot

So now that we have the application created, we need to get the bot token which was explained in the previous page.

To create the bot, we need to use the `createDefaultBot` function. This function contains all the default settings for
the
bot. It also takes the bot token as a parameter.

```kotlin
val ydwk = createDefaultBot("TOKEN").build()
```

I don't recommend storing the token in the code as it is not secure. Instead, you should use a `config.json` file or a
secure file of some sort.

For an idea of how to use config.json file see [this](/docs/jconfig/usage.md) page.

## Starting the bot

We need to create a main function to start the bot. The main function should look like this:

```kotlin
fun main() {
    val ydwk = createDefaultBot("TOKEN").build()
}
```

This when run will start the bot. However, it will not do anything. We need to add some code to make it do something.

## Adding a slash command

To add a slash command, we need to wait for the API to be ready and then add the slash command. To do this, we need to
use waitForReady variable. The variable is a suspend function that waits for the API to be ready.

We can use this variable to wait and then add the slash command using the slashBuilder variable. The slashBuilder
contains all the functions to create a slash command. We will use the 'addSlashCommand' function to add the slash
command.

The `addSlashCommand` function either take the parameters 'name' and 'description' or a 'SlashCommand' object. We will
use the 'name' and 'description' parameters.

Once we have added the slash command, we need to trigger the sending of the slash command and this is done through using
the function '.build()'.

```kotlin
fun main() {
    val ydwk = createDefaultBot("TOKEN").build()
    ydwk.waitForReady().slashBuilder
        .addSlashCommand("ping", "Pong!")
        .build()
}
```

## Responding to the slash command

Now that we have added the slash command, we need to respond to it. To do this, we need to listen for
the `SlashCommandEvent`. This can be done it two ways which is explained [here](/docs/gateway/events.md).

We will be using the `on` function to listen for the `SlashCommandEvent`. The `on` function takes the event as a
parameter and a lambda function.

```kotlin
fun main() {
    val ydwk = createDefaultBot("TOKEN").build()
    ydwk.waitForReady().slashBuilder
        .addSlashCommand("ping", "Pong!")
        .build()

    ydwk.on<SlashCommandEvent> {
        // code
    }
}
```

Here we will listen for any `SlashCommandEvent` and then respond to it. To respond to the event, we need to check for
the slash command name 'ping'. If the slash command name is 'ping', we will respond with 'Pong!' using the `reply`
function.

```kotlin
 val ydwk = createDefaultBot("TOKEN").build()
ydwk.waitForReady().slashBuilder
    .addSlashCommand("ping", "Pong!")
    .build()

ydwk.on<SlashCommandEvent> {
    if (it.slash.name == "ping") {
        it.reply("Pong!").trigger()
    }
}
```

This will trigger the bot to respond to the slash command 'ping' with 'Pong!'. The `trigger` function is used to send
the message.

## Conclusion

We have gone through the basics of creating a bot. We have created a bot that responds to a slash command when it hears
the name "ping". How to reply and to trigger the reply.
We have also gone through the steps on how to create the actual slash command.