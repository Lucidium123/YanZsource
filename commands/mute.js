const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../config.json");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
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
        `Please Create Mute Role | Role Name : Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Muted Member`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};
