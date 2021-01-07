const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "clyde",
    description: "CLYDE SAID SOMETHING REEEEE",

    async run(client, message, args) {
        const text = args.slice(0).join(" ")
        if (!text) return message.channel.send("you need some text there")
        fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
            .then((res) => res.json())
            .then((body) => {
                console.log(body)
                let embed = new Discord.MessageEmbed()
                    .setImage(body.message)
                    .setColor("GOLD")
                message.channel.send(embed)
            })
    }
}