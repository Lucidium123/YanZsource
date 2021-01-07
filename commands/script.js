const { MessageEmbed } = require("discord.js"),
    config = require("../config"),
    { letterTrans } = require("custom-translate"),
    dictionary = require("../script.json");

module.exports = {
    name: "script",
    usage: `${config.prefix}${module.exports.name} {text}`,
    aliases: ["scriptify"],
    description: "Rewrites text in tiny letters.",

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
                    .addField(
                        "Usage:",
                        `${module.exports.usage
                            ? module.exports.usage
                            : config.prefix + module.exports.name
                        }`,
                        true
                    )
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
    }
};
