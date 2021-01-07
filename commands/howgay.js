const discord = require("discord.js");

module.exports = {
    name: "howgay",
    description: "Tells How Gay the User is",
    run: async (client, message, args) => {

        if (!message.mentions.users.size) {
            return message.channel.send("Please Mention the user");
        }

        let embed = new discord.MessageEmbed()

            .setTitle("Gay Machine")
            .setDescription(`:rainbow_flag: <@${message.mentions.users.first().id}> is \`${Math.floor(Math.random() * 101)}%\` Gay!`)
            .setImage("https://media.tenor.com/images/23519f42b12041a3895c75d8bac8da81/tenor.gif")
            .setColor('RANDOM')
            .setFooter("credits to:JayyTheBotDev For Helping Me Make This Command")

        message.channel.send(embed);
    }
};