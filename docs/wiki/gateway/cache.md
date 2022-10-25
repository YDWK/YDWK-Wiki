---
keywords:
- Cache
---

# Cache

The cache is a way to store data from the gateway. It is used to store data such as guilds, channels, members, and more. The cache is automatically updated when the gateway receives events. 
You can also manually update the cache if you cast YDWK to YDWKImpl.

## Setting custom cache

By default, these cache entities are enabled:

- GUILD
- USER
- VOICE_CHANNEL
- TEXT_CHANNEL
- CATEGORY
- MESSAGE
- MEMBER
- APPLICATION
- ATTACHMENT
- ROLE