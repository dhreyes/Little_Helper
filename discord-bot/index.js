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

    //Implementing a ping command that tells you how long it took the bot to respond to the message from the user

    if (command === "ping") {
        message.channel.send("Pong!");
        message.channel.send("It took " + message.createdTimestamp - message.createdTimestamp + "ms to send the message.");
    }

    //Implementing a help command
    if (command === "help") {
        message.channel.send("The proper format for a command is !command argument1 argument2");
    }

    //Implementing the ability for the bot to create a poll for users to vote on

    if (command === "poll") {
        const pollQuestion = args.join(" ");
        message.channel.send(`@everyone ${pollQuestion}`);
    }

    //Implementing the ability for the bot to assign roles to new users that join the channel

    if (command === "role") {
        const role = args.join(' ');
        message.member.roles.add(role);
    }
});
