const Discord = require('discord.js')


module.exports = {
    name: "say",
    description: "Say",

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are missing perms lol')
        if (!args[0]) return message.channel.send(`Bruh give me text to say`)
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()
        if (textChannel) {
            msg = args.slice(1).join(" ")
        } else {
            msg = args.join(" ")
            message.channel.send(msg)
        }
    }
}