const Discord = module.require("discord.js");

module.exports = {
    name: "unlock",
    description: "unlock",


    async run(client, message, args) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You don't have enough Permissions!")
        if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I dont have the permission to use this')

        let roled = message.guild.roles.cache.find(role => role.name === "@everyone").id;
        console.log(message.channel.permissionOverwrites.array());
        try {
            let x = message.channel.permissionOverwrites.array();
            x.forEach(async (e) => {
                message.channel.updateOverwrite(message.guild.roles.cache.get(e.id), { SEND_MESSAGES: null });
            });
        } catch (e) {
            console.log(e);
        }
        const embed = new Discord.MessageEmbed()
            .setTitle('Channel is unlocked noobs')
            .setDescription(`<#${message.channel.id}> is now unlocked`)
        await message.channel.send(embed);
        message.delete();
    }
}