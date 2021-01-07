const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "Kick",

    async run(client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You are missing perms lol')
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('YOU BETTER GIVE ME MY DANG PERMISSIONS BIG NOOB EEEEEEE')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!args[0]) return message.channel.send('ok nub mention the user......PLEASE');
        if (!member) return message.channel.send('I don\'t think they are in the server lololoolol');
        if (!member.kickable) return message.channel.send('this person might be higher then me......but if they higher then you then......LOLOLOOOLOLOLOLOLOLOLOLOLOLOLOLOLOL');
        if (member.id === message.author.id) return message.channel.send('ok nub you can\'t kick your self.......get on my level bruh i am 200 iq your like 1 iq LOLOLOLOLOLOL');
        let reason = args.slice(1).join(" ")
        if (reason === undefined) reason = 'no reason given lol what a savage';
        member.kick(reason)
            .catch(err => {
                if (err) return message.channel.send('bruh there was a fat error')
            })
        message.channel.send(`**User Kick:** ${member}\n **Moderator:** ${message.author}\n **Reason:** ${reason}`)
    }
}