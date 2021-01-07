const Discord = require('discord.js')
const reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']
module.exports = {
    name: "poll",
    description: "create a poll.",
    category: "utilities",
    usage: "[question | choice]",
    userPerms: ["MANAGE_MESSAGES"],
    cooldown: 5,
    run: async (client, message, args) => {
        const [question, ...choices] = args.join(' ').split(' | ')
        if (!question) return message.reply("uhhh what is the question for your poll?")
        if (!choices.length) return message.reply("hmmmm, are you making a poll without choices??")
        if (choices.length > 20) return message.reply("Thats tooo much choices, i can only accept 20 choices")
        message.delete()
        const sent = await message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${question}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setAuthor(`Poll Created by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`**\`React to the emojis on what you choose!\`**\n` + choices.map((choice, i) => `${reactions[i]} ${choice}`).join('\n')))
        for (i = 0; i < choices.length; i++) await sent.react(reactions[i])
    }
}