const { MessageEmbed } = require("discord.js"),
    config = require("../config.json"),
    { letterTrans } = require("custom-translate"),
    dictionary = require("../alien.json");

module.exports = {
    name: "alien",
    usage: `${config.prefix}${module.exports.name} {text}`,
    aliases: ["alien"],
    description: "Rewrites text in alien",

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
                     .addField("Usage:", "L!alien {text}")
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
                .setDescription(letterTrans(args.join(" "), dictionary, " ") )
        );
    },
};
