const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const { Color } = require("../config.json");

module.exports = {
  name: "unmute",
  aliases: [],
  description: "Unmute A User!",
  usage: "Unmute <Mention User>",
  run: async (client, message, args) => {
    //Start

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
      if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("**You do not have permission to use this command...**")
      if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send(`**I don\'t have the permission \`MUTE_MEMBERS\` for this command to work i require it!**`)


    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `There Is No Mute Role, So Member Is Not Muted Anymore!`
      );

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Unmuted!`);
    }

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Unmuted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Unmuted Member`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};