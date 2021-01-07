const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    name: "grave",
    category: "image",
    description: "Send A grave Image!",
    usage: "grave | <Mention User>",
    run: async (client, message, args) => {

        //Start

        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!Member) return message.channel.send(`Invalid User!`);

        let Embed = new MessageEmbed()
        .setColor(Color)
        .setImage(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL()}`)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};