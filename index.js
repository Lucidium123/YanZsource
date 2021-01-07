const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { join } = require('path')
const { readdirSync } = require('fs');

client.once('ready', () => {
    console.log('CHICKEN NUGGETS ARE THE BEST ALSO READY!');
    client.user.setActivity(`L!help`, { type: 'STREAMING', });
});
client.commands = new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}
client.on("error", console.error);
client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error) {
            console.error(error);
        }
    }
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }
    else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);
    }

});
client.login(token);
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'server') {
        if (!args.length) {
            return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
    }
})
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'creator-info') {
        if (!args.length) {
            return message.channel.send(`HI so im the creator so i loved coding this bot but always remember dont give up on your dreams thats what i always say`);
        }
    }
})
client.on('message', message => {
    if (message.content === '?ping') {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'server-invite') {
        if (!args.length) {
            return message.channel.send(`https://discord.gg/XDVVRqx`);
        }
    }
})
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'other-bot') {
        if (!args.length) {
            return message.channel.send(`https://top.gg/bot/743836163810263141 ,make sure to vote for them`);
        }
    }
})
client.on('message', message => {
    if (message.content === 'chicken-nugget') {
        message.channel.send(`***YES CHICKEN NUGGETS ARE THE BEST AND IF YOU DONT AGREE idk your choice xD***`);
    }
}); 