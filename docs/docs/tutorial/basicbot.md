---
keywords:

- basic bot

---

# Creating a Basic Bot

what is a bot?

A bot is a program that can interact with the discord api. It can send messages, read messages, and do many other
things. In this tutorial, we will be creating a basic bot that can send a message when a slash command is triggered.

## Creating the application

To create the application see [this](/docs/tutorial/README.md) page.

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
