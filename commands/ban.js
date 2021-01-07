const discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "bans the user",

    async run(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to use this command...**")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`**I don\'t have the permission \`BAN_MEMBERS\` for this command to work i require it!**`)
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.channel.send("**You must provide a user to Ban!**")
        if (!user.banable) return message.reply(`**I can't ban this user! My role is below the mentioned user or the user is not in the guild**`)
        if (user.id === message.guild.owner.id) return message.channel.send(`**You cannot Ban the guild owner!**`)
        var reason = (args.splice(1).join(' ') || '**No reason specified.**');
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban({ reason: `${message.author.tag}: ${reason}` }).catch(err => {
                    message.reply('**I was unable to ban the mentioned user**');
                    return console.error(err);
                });
                message.reply(`**Banned ${user.user.tag} for ${reason}**`);
            } else {
                message.reply("**That user isn't in this guild!**");
            }
        } else {
            message.reply('**Please mention a valid user to ban**');
        }
    }
}
