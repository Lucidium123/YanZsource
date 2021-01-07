const { MessageEmbed } = require("discord.js"),
    config = require("../config.json"),
    { letterTrans } = require("custom-translate"),
    dictionary = require("../cursive.json");

module.exports = {
    name: "cursive",
    usage: `${config.prefix}${module.exports.name} {text}`,
    aliases: ["cursiveify"],
    description: "Rewrites text in cursive.",

    run: (client, message, args) => {
        if (!args.join(" ")) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(config.prefix + module.exports.name)
                    .addField(
                        "Aliases:",
                        module.exports.aliases
                            ? module.exports.aliases.join(" \n")
                            : "No aliases found.",
                        true
                    )
                    .addField("Usage:", "L!cursive {text}")
                    .addField(
                        "Description:",
                        module.exports.description
                            ? module.exports.description
                            : "No description found."
                    )
                    .setColor(config.color)
                    .setFooter("Syntax: [] is optional, {} is required.")
            );
        }
        
        message.channel.send(
            new MessageEmbed()
                .setColor(config.color)
                .setDescription(letterTrans(args.join(" "), dictionary))
        );
    },
};