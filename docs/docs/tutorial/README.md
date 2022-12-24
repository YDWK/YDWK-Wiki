---
permalink: /docs/tutorial
keywords:

- tutorial

---

# Creating a Discord Application

This page will show you how to create a discord application. This is the first step to creating a bot.

## Creating the application

To create the application, you need to go to the [Discord Developer Portal](https://discord.com/developers/applications)
and click on the blue 'New Application' button.

![New Application](/assets/images/docs/tutorial/new-application.png)

Once you have clicked on the button, you will be prompted to enter the name of the application. Enter the name of the
application, click agree to the terms and conditions and then click the 'Create' button.

![Create Application](/assets/images/docs/tutorial/create-application.png)

Once you have created the application, you will be taken to the application page. Here you can see the name of the
application, the application id and the application icon. You can also see the 'Bot' tab and the 'OAuth2' tab.

![Application Page](/assets/images/docs/tutorial/application-page.png)

## Creating the bot

To create the bot, you need to click on the 'Bot' tab. Once you have clicked on the tab, you will see a button that
says 'Add Bot'. Click on the button.

![Add Bot](/assets/images/docs/tutorial/add-bot.png)

Once you have clicked on the button, you will be prompted to confirm that you want to add the bot. Click on the 'Yes, do
it!' button.

![Confirm Bot](/assets/images/docs/tutorial/confirm-bot.png)

Once you have confirmed that you will need to rest the token. This is because the token is not shown to you when you
first create the bot. To reset the token, click on the 'Rest Token' button. Then hit the 'Yes, do it!' button.

![Reset Token](/assets/images/docs/tutorial/reset-token.png)

Copy the token and store it somewhere safe. You will need it later.

## Adding the bot to a server

After you will want to the add the bot to your test server.

Go to the OAuth2 tab and click on the URL Generator button. Once done that you will want to click on the 'bot' and '
applications.commands' checkboxes. You then want to select the permissions that you want the bot to have. Once you have
done that, copy the URL and paste it into your browser. You will be prompted to select the server that you want to add
the bot to. Select the server and click the 'Authorize' button.

![OAuth2](/assets/images/docs/tutorial/oauth2.png)

Once you have added the bot to the server, you can start coding the bot.

# Creating a Basic Bot

See [here](/docs/tutorial/basicbot.md) page.
