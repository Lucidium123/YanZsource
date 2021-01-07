const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { AVATARURL, BOTNAME, BOTCOLOR } = require(`../config.json`);

module.exports = {
    name: "uptime",
    description: "uptime",

    async run(client, message, args) {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const ping = new Discord.MessageEmbed()
            .setTitle(`**BOT UPTIME**`)
            .setColor(BOTCOLOR)
            .setTimestamp()
            .setFooter(`${BOTNAME}`, AVATARURL)
            .setDescription(`**Uptime:**\n${days}d ${hours}h ${minutes}m ${seconds}s`);
        return message.channel.send(ping);
    }
}