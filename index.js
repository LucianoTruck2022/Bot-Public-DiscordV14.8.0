const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require('discord.js');
const { loadevents, loadhandlres} = require('./funciones/funcionesbot')
const client = new Client({
    closeTimeout: 5000,
    shards: 'auto',
    allowedMentions: {
        parse: ['everyone', 'roles', 'users'],
        repliedUser: true,
    },
    failIfNotExists: true,
    presence: { activities: [{ name: 'Stars Originals', type: ActivityType.Watching , url: 'https://www.youtube.com/channel/UCzlWPjIjWRktYZsO1TVeBwQ' }], status: 'online' },
    waitGuildTimeout: 15000,
    partials: [Partials.User, Partials.Message, Partials.GuildMember, Partials.ThreadMember, Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent],
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent],
})
//////////////////////////////////////////////////////////////////////////////
client.color = '#00ffe1'
client.commands = new Collection()
client.events = new Collection()
loadevents(client)
loadhandlres(client)
//////////////////////////////////////////////////////////////////////////////
module.exports = client
client.config = require('./botconfig/config.json')
client.login(client.config.bot.token).then(() => {
}).catch((error) => console.log(error))