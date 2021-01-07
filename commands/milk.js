const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    name: "milk",
    category: "image",
    description: "Send A Milk Image!",
    usage: "Milk <Mention User>",
    run: async (client, message, args) => {

        //Start

        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!Member) return message.channel.send(`Please Mention A User!`);

        let Embed = new MessageEmbed()
        .setColor(Color)
        .setImage(`https://vacefron.nl/api/icanmilkyou?user1=${message.author.displayAvatarURL()}&user2=${Member.user.displayAvatarURL()}`)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};