const Discord = require('discord.js');
const anime = require('random-anime');

module.exports = {
    name: "animepic",
    description: "animepic",

    async run(client, message, args) {
        
        if (!message.channel.nsfw) {
            message.react('🔞');
            return message.channel.send({
              embed: {
                color: 16734039,
                description: "Hello It Shows NSFW sometimes so sorry about this\nuse this command in an NSFW"
              }
            })
          }
        var randomanime = require('random-anime')
        var anime = randomanime.anime()
        const embed = new Discord.MessageEmbed()
            .setDescription("animepic")
            .setImage(anime)
            .setFooter("We are not responsable if it shows NSFW as this is an API")
        message.channel.send(embed)
    }
}