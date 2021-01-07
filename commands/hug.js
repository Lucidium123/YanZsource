const discord = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "hug",
    description: "hug",

    async run(client, message, args) {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first() : message.author) || message.author;

        try {
            const url = 'https://nekos.life/api/v2/img/hug';
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    const embed = new discord.MessageEmbed()
                        .setTitle("Here's your Hug, 🤗")
                        .setImage(json.url)
                        .setDescription(`${victim} is hugged by ${message.author}`)
                    return message.channel.send(embed)
                })
        } catch (error) {
            return;
        }
    }
}