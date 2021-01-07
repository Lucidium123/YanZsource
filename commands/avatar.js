const Discord = require('discord.js')


module.exports = {
    name: "avatar",
    description: "Avatar",

    async run(client, message, args) {
        message.delete();
        let Member =
          message.mentions.members.first() ||
          message.guild.members.cache.get(args[0]) ||
          message.member;
    
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField(
            "Links",
            `[png](${Member.user.displayAvatarURL({
              format: "png",
              dynamic: true
            })}) | [jpg](${Member.user.displayAvatarURL({
              format: "jpg",
              dynamic: true
            })}) | [webp](${Member.user.displayAvatarURL({
              format: "webp",
              dynamic: true
            })})`
          )
          .setImage(Member.user.displayAvatarURL({size: 2048, dynamic: true }))
          .setTimestamp();
    
    
        message.channel.send(embed);
    }
}