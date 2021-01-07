const discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "dog",
    description: "dog",

    async run(client, message, args) {
        try {
            const url = 'https://no-api-key.com/api/v1/animals/dog';
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    const embed = new discord.MessageEmbed()
                        .setTitle('Random dog image')
                        .setImage(json.image)
                        .setColor("RANDOM")
                        .setTimestamp()
                    return message.channel.send(embed)
                })
        } catch (error) {
            retrurn;
        }
    }
}