const Discord = require('discord.js')


module.exports = {
    name: "purge",
    description: "Purge",

    async run(client, message, args) {
        const amount = args.join(" ")
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are missing perms lol')
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU BETTER GIVE ME MY DANG PERMISSIONS BIG NOOB EEEEEEE')
        if (!amount) return message.channel.send('BRUH WHERE IS THE DANG NUMBER OF MESSAGES TO DELETE')
        if (amount > 100) return message.reply('only 99 messages can be deleted')
        if (amount < 1) return message.reply('1 to messages but really to be fair type 2 to delete 1 message lol')
        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages
            )
        });
    }
}
