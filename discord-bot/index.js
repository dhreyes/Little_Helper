const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.login(config.BOT_TOKEN);

//Writing command handler for discord bot to use
const prefix = "!";

client.on("messageCreate", function(message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Implementing a ping command
    if (command === "ping") {
        message.channel.send("Pong!");
    }

    //Implementing a help command
    if (command === "help") {
        message.channel.send("This is a help command");
    }

});