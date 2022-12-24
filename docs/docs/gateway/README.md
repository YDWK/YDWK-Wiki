---
permalink: /docs/gateway
keywords:
- gateway
---

# Gateway

Here you will find everything you need to know regarding the gateway.

## Introduction

The gateway as defined by the discord api is "opening a secure WebSocket connections with Discord to receive events about actions that take place in a server/guild, like when a channel is updated or a role is created. There are a few cases where apps will also use Gateway connections to update or request resources, like when updating voice state."

## Gateway structure and usage

The gateway sends events such as Slash commands, messages, etc. to the client. The client then processes the event and updates the cache accordingly. The cache is then used to retrieve entities such as users, guilds, etc.


## Events

Events are sent to the client through the gateway. They are sent in the form of JSON. The events are then processed by the client and the cache is updated accordingly. They are then emitted to the client so that the client can use them.

For a list of all events, see [here](/docs/gateway/events).

## Intents

Intents are a way to tell the gateway what events you want to receive. They are sent to the gateway when the client connects. The gateway will then send events that are related to the intents that were sent.

For a list of all intents, see [here](/docs/gateway/intents).

## Cache

The cache is a collection of entities such as guilds, channels, users, etc. The cache is updated when the gateway sends events to the client. The cache is then used to retrieve entities such as users, guilds, etc.

For more information on the cache, see [here](/docs/gateway/cache).