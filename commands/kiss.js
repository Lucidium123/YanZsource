const discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "kiss",
    description: "kiss",

    async run(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        const slapped = message.author.id === user.id ? "themselfs" : user.username;

        const data = await fetch("https://no-api-key.com/api/v1/kiss").then((res) =>
            res.json()
        );
        const embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username} kissed ${slapped}`)
            .setImage(`${data.image}`)
        message.channel.send(embed)
    }
}