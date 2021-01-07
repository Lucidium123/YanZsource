const Discord = require('discord.js');
const anime = require('random-anime');

module.exports = {
  name: "hentai",
  description: "hentai",

  async run(client, message, args) {

    if (!message.channel.nsfw) {
      message.react('🔞');
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "You can use this command in an NSFW Channel"
        }
      })
    } if (!message.channel.nsfw) {
      message.react(':alien:');
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "You can use this command in an NSFW Channel"
        }
      })
    }
    var randomanime = require('random-anime')
    var anime = randomanime.nsfw()
    const embed = new Discord.MessageEmbed()
      .setDescription("...")
      .setImage(anime)
    message.channel.send(embed)
  }
}