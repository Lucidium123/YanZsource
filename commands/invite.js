const Discord = require('discord.js')
const Color = 'RANDOM';


module.exports = {
  name: "invite",
  description: "Invite",

  async run(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Here :D`)
      .setDescription(`[Invite](
    https://discord.com/api/oauth2/authorize?client_id=740447451307180104&permissions=0&scope=bot)`)
      .setTimestamp();
    message.channel.send(embed)
  }
}