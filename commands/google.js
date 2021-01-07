const Discord = require('discord.js');
const request = require("node-superfetch");

module.exports = {
    name: "google",
    description: "googlesearch",

    async run(client, message, args) {
        let googleKey = "AIzaSyBq8qZ7u15I_sVaqHMnUve96tSsDFWwpv8";
        let csx = "65fbe6fcff8eb1fbb";
        let query = args.join(" ");
        let result;

        if (!query) return message.channel.send("Enter The query please");

        href = await search(query);
        if (!href) return message.channel.send("Unknown Search");

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
        .setURL(href.link)
        .setFooter("Powered By: Google")

        return message.channel.send(embed);

        async function search(query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: googleKey, cx: csx, safe: "off", q: query
            });

            if (!body.items) return null;
            return body.items[0];
        }
    }
}