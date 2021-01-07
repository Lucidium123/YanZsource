const discord = require("discord.js");

module.exports = ({
    name: "serverinfo",
    description: "Gives the Server Information",
    run: async (client, message, args) => {

        let embed = new discord.MessageEmbed()

            .setAuthor("ServerInfo", message.author.avatarURL({ dynamic: true }))
            .addField("Server Name", `${message.guild.name}`, true)
            .addField("Server Owner", `<@${message.guild.ownerID}>`, true)
            .addField("Server Region", `${message.guild.region}`, true)
            .addField("Server ID", `${message.guild.id}`, true)
            .addField("Roles", `${message.guild.roles.cache.size}`, true)
            .addField("Channels", `${message.guild.channels.cache.size}`, true)
            .addField("Verification Level", `${message.guild.verificationLevel}`, true)
            .addField("Emojis", `${message.guild.emojis.cache.size}`, true)
            .addField("Boosts", `${message.guild.premiumSubscriptionCount}`, true)
            .addField("Rules", `${message.guild.rulesChannel}`, true)
            .addField("Update Channel", `${message.guild.publicUpdatesChannel}`, true)
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")

        message.channel.send(embed)

    }
})