const discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "slap",
    description: "slap",

    async run(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        const slapped = message.author.id === user.id ? "themselfs" : user.username;

        const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) =>
            res.json()
        );
        const embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username} slapped ${slapped}`)
            .setImage(`${data.url}`)
        message.channel.send(embed);
    }
}