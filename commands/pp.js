const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "PrivacyandSafety",
  description: "PrivacyandSafety of our bot",
  aliases: ["pp"],

  async run(client, message, args) {
    const bruh = new MessageEmbed()
    .setTitle("Bot PrivacyandSafety")
    .setDescription("This Will Be PrivacyandSafety Of YanZ")
    .addField("Logging:", "If any of you guys are scared we log everything you say no we dont log them in any sort of way just to be clear some of you may hate we will not be responding but if you still have any concern feel free to dm us")
    .addField("Bot ToS", "Do ***NOT*** abuse the bot or i will be forced to blacklist you from the bot hope you understand us thank you have a great day bye")
    message.channel.send(bruh)
  }
}