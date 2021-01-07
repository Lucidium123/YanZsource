const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "wasted",
    description: "wasted",

    async run(client, message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        
                    const embed = new Discord.MessageEmbed()
                        .setAuthor(`${message.guild.name} was used in!`, message.guild.iconURL({ dynamic: true }))
                        .setImage(`https://some-random-api.ml/canvas/wasted?avatar=${user.user.displayAvatarURL({ format: 'png' })}`)
                        .setFooter(`${message.author.username} asked this`, message.author.displayAvatarURL({ dynamic: true }))
            
                    await message.channel.send(embed)
    }
}