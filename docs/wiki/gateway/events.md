---
keywords:

- Events

---

# Events

## Introduction

Events are a way to communicate between different parts of the Discord api.

There is 2 way to use a method. You can use `ydwk.on<Event>` or you can extend `ListenerAdapter()`.

## Event List

| Event Name                                     | Description                                                                                |
|------------------------------------------------|--------------------------------------------------------------------------------------------|
| `Ready Event`                                  | Contains the initial state information                                                     |
| `Resumed Event`                                | Response to Resume                                                                         |
| `Reconnect Event `                             | Server is going away, client should reconnect to gateway and resume                        |
| `Invalid Session Event  `                      | Failure response to `Identify` or `Resume` valid active session                            |
| `Application Command Permissions Update Event` | Application command permission was updated                                                 |
| `Auto Moderation Rule Create Event      `      | Auto Moderation rule was created                                                           |
| `Auto Moderation Rule Update Event    `        | Auto Moderation rule was updated                                                           |
| `Auto Moderation Rule Delete Event    `        | Auto Moderation rule was deleted                                                           |
| `Auto Moderation Action Execution Event   `    | Auto Moderation rule was triggered and an action was executed (e.g. a message was blocked) |
| `Channel Create Event                `         | Channel was updated                                                                        |
| `Channel Delete Event               `          | Channel was deleted                                                                        |
| `Channel Pins Update Event                   ` | Message was pinned or unpinned                                                             |
| `Thread Create Event                         ` | Thread created, also sent when being added to a private thread                             |
| `Thread Update Event                         ` | Thread was updated                                                                         |
| `Thread Delete Event                         ` | Thread was deleted                                                                         |
| `Thread List Sync Event                      ` | Sent when gaining access to a channel, contains all active threads in that channel         |
| `Thread Member Update Event                  ` | Thread member for the current user was updated                                             |
| `Thread Members Update Event                 ` | Some user(s) were added to or removed from a thread                                        |
| `Guild Create Event                          ` | Lazy-load for unavailable guild, guild became available, or user joined a new guild        |
| `Guild Update Event                          ` | Guild was updated                                                                          |
| `Guild Delete Event                          ` | Guild became unavailable, or user left/was removed from a guild                            |
| `Guild Ban Add Event                         ` | User was banned from a guild                                                               |
| `Guild Ban Remove Event                      ` | User was unbanned from a guild                                                             |
| `Guild Emojis Update Event                   ` | Guild emojis were updated                                                                  |
| `Guild Stickers Update Event                 ` | Guild stickers were updated                                                                |
| `Guild Integrations Update Event             ` | Guild integration was updated                                                              |
| `Guild Member Add Event                      ` | New user joined a guild                                                                    |
| `Guild Member Remove Event                   ` | User was removed from a guild                                                              |
| `Guild Member Update Event                   ` | Guild member was updated                                                                   |
| `Guild Members Chunk Event                   ` | Response to Request Guild Members                                                          |
| `Guild Role Create Event                     ` | Guild role was created                                                                     |
| `Guild Role Update Event                     ` | Guild role was updated                                                                     |
| `Guild Role Delete Event                     ` | Guild role was deleted                                                                     |
| `Guild Scheduled Event Create Event          ` | Guild scheduled event was created                                                          |
| `Guild Scheduled Event Update Event          ` | Guild scheduled event was updated                                                          |
| `Guild Scheduled Event Delete Event          ` | Guild scheduled event was deleted                                                          |
| `Guild Scheduled Event User Add Event        ` | User subscribed to a guild scheduled event                                                 |
| `Guild Scheduled Event User Remove Event     ` | User unsubscribed from a guild scheduled event                                             |
| `Integration Create Event                    ` | Guild integration was created                                                              |
| `Integration Update Event                    ` | Guild integration was updated                                                              |
| `Integration Delete Event                    ` | Guild integration was deleted                                                              |
| `Interaction Create Event                    ` | User used an interaction, such as an Slash Command                                         |
| `Invite Create Event                         ` | Invite to a channel was created                                                            |
| `Invite Delete Event                         ` | Invite to a channel was deleted                                                            |
| `Message Create Event                        ` | Message was created                                                                        |
| `Message Update Event                        ` | Message was edited                                                                         |
| `Message Delete Event                        ` | Message was deleted                                                                        |
| `Message Delete Bulk Event                   ` | Multiple messages were deleted at once                                                     |
| `Message Reaction Add Event                  ` | User reacted to a message                                                                  |
| `Message Reaction Remove Event               ` | User removed a reaction from a message                                                     |
| `Message Reaction Remove All Event           ` | All reactions were explicitly removed from a message                                       |
| `Message Reaction Remove Emoji Event         ` | All reactions for a given emoji were explicitly removed from a message                     |
| `Presence Update Event                       ` | User was updated                                                                           |
| `Stage Instance Create Event                 ` | Stage instance was created                                                                 |
| `Stage Instance Update Event                 ` | Stage instance was updated                                                                 |
| `Stage Instance Delete Event                 ` | Stage instance was deleted or closed                                                       |
| `User Update Event                           ` | Properties about the user changed                                                          |
| `Voice State Update Event                    ` | Someone joined, left, or moved a voice channel                                             |
| `Voice Server Update Event                   ` | Guild's voice server was updated                                                           |
| `Webhooks Update Event                       ` | Guild channel webhook was created, update, or deleted                                      |
