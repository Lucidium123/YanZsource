const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  category: "fun",
  run: async (client, message, args) => {
    const text = args.join("+");
    const search = args[0];
    if (!search) return message.channel.send({
      embed: {
        "color": 0x4D5E94,
        "description": "❌ TYPE SOMETHING REEEE"

      }
    });
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send(e);
  },
};