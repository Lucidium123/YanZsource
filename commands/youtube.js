const Discord = require('discord.js');
const ytsr = require("ytsr");

module.exports = {
    name: "youtube",
    description: "youtubesearch",

    async run(client, message, args) {
        const query = args.join(" ");
        if (!query) return message.channel.send("Please Provide A Search Query");

        const res = await ytsr(query).catch(e => {
            return message.channel.send("No Search Results Found");
        });

        const video = res.items.filter(i => i.type === "video")[0];
        if (!video) return message.channel.send("Please Provide A Search Query");

        const embed = new Discord.MessageEmbed()
        .setTitle(video.title)
        .setImage(video.thumbnail)

        return message.channel.send(embed);
    }
}