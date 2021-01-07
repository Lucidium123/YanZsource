const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const os = require('os');
const prettyMilliseconds = require('pretty-ms');
var Discord = require("discord.js");

module.exports = {
  name: 'botstatus',
  description: 'stats',

  async run(client, message, _args) {
    const embed = new MessageEmbed()
      .setColor(config.embedColor)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor('Bot Statistics', client.user.displayAvatarURL())
      .setDescription(`
**Total Guilds:** \`${client.guilds.cache.size}\`
**Total Members:** \`${client.users.cache.size}\`
**Total Channels:** \`${client.channels.cache.size}\`

**Uptime:** \`${prettyMilliseconds(client.uptime, { verbose: true })}\`
**Arch:** \`${os.arch()}\`
**Platform:** \`Windows\`
**CPU:** \`AMD Ryzen 3 3200G with Radeon Vega Graphics\`
**Memory Usage:** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/${(
          os.totalmem() /
          1024 /
          1024
        ).toFixed(2)} MB\`\n**Discord Version:** \`${Discord.version}\`\n**Node Version:** \`${process.version}\``)
    return message.channel.send(embed);
  },
};