const Discord = require('discord.js');

module.exports = {
    name: "update",
    description: "bot updates",

    async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('NEW UPDATES TO YANZ')
        .addField("New Commands:", "google(google search)")
        .addField("Upcoming:", "YT search")
        message.channel.send(embed)
    }
}