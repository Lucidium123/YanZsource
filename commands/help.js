const Discord = require('discord.js');
const Color = 'RANDOM';


module.exports = {
    name: "help",
    description: "Help",

    async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("YanZ Bot Commands! Prefix: L!", message.author.avatarURL({dynamic: true}))
            .setDescription("**Fun**\n\`calculate\`, \`animepic\`, \`slap\`, \`howgay\`, \`cursive\`, \`eject\`, \`ascii\`, \`cursive\`, \`pat\`, \`alien\`, \`gay\`, \`grave\`, \`dog\`, \`kiss\`, \`hug\`, \`milk\`, \`script\`, \`braille\`, \`covid\`, \`achievement\`, \`clyde\`, \`wasted\`, \`cry\`\n\n**Admin**\n\`ban\`, \`kick\`, \`addemoji\`, \`purge\`, \`slowmode\`, \`lock\`, \`unlock\`, \`nuke\`, \`mute\`, \`unmute\`\n\n**Search**\n\`anime\`,  \`screenshot\`, \`djs\`, \`google\`\n\n**Info**\n\`ping\`, \`beep\`, \`server\`, \`avatar\`, \`memberinfo\`, \`creator-info\`, \`invite\`, \`server-info\`, \`other-bot\`,")
            .addField("NSFW", "||hentai||")

            .setTimestamp()
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({dynamic: true}));
        message.channel.send(embed)
    }
}