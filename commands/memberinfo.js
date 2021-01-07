const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "memberinfo",
  category: "info",
  run: async (client, message, args) => {
    const Members = message.guild.memberCount;
    const bots = message.guild.members.cache.filter(
      member => member.bot).size;
    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Members Information`)
      .addField(`All Members`, Members)
      .addField(`Humans`, humans)
      .addField(`Bots`, bots)
      .addField(
        `Members Status`,
        `Online: ${online} | Do Not Disturb: ${dnd} | Idle: ${idle} | Offline: ${offline}`
      )
      .setTimestamp();

    message.channel.send(embed);
  }
};


