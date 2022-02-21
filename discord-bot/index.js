const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

//create new instance of discord bot
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
client.login(config.BOT_TOKEN);
