const discord = require('discord.js');


module.exports = {
    name: "nuke",
    description: "nuke",

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply('You Not Have **PERMISSION !**')
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`**I don\'t have the permission \`BAN_MEMBERS\` for this command to work i require it!**`)
        let channel = client.channels.cache.get(message.channel.id)
        var posisi = channel.position;


        channel.clone().then((channel2) => {
            channel2.setPosition(posisi)
            channel.delete()
            channel2.send("Channel Has been nuked !", {
                files: ['https://media.tenor.com/images/0754697c9c4dd44ca8504dbf1b36b927/tenor.gif']
            })
        })
    }
}
