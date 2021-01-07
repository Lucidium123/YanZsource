const discord = require("discord.js");

module.exports = {
    name: "simp",
    description: "SIMP METER",
    run: async (client, message, args) => {

        if (!message.mentions.users.size) {
            return message.channel.send("Please Mention the user");
        }

        let embed = new discord.MessageEmbed()

            .setTitle("Simp Meter")
            .setDescription(`<@${message.mentions.users.first().id}> is \`${Math.floor(Math.random() * 101)}%\` SIMP!`)
            .setImage("https://cdn.discordapp.com/attachments/778655306901094400/786946833133469726/b6e5c185f1d0461d22d7684768be70fb.png")
            .setColor('RANDOM')

        message.channel.send(embed);
    }
};