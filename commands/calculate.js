const { MessageEmbed } = require("discord.js"),
    config = require("../config.json"),
    math = require("mathjs");

module.exports = {
    name: "calculate",
    usage: `${config.prefix}calculate {problem}`,
    aliases: ["calc", "math", "solve"],
    description: "Calculates a math problem.",

    run: (client, message, args) => {
        const solution = math.evaluate(args.join(" "));

        try {
            message.channel.send(
                new MessageEmbed()
                    .setColor(config.color)
                    .setDescription(`${args.join(" ")} **=** ${solution}`)
            );
        } catch (e) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(config.color)
                    .setDescription("That problem is invalid.")
            );
        }
    }
};