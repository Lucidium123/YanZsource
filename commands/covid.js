const Discord = require("discord.js");
const discord = Discord;
const { MessageEmbed } = require("discord.js");
const Color = "RANDOM";
const track = require("novelcovid");

track.settings({
    baseUrl: 'https://disease.sh'
});

module.exports = {
    name: "covid",
    category: "info",
    description: "Show Covid-19 Stats!",
    usage: "Covid",
    run: async (client, message, args) => {

        //Start

        if (!args[0]) {
            return message.channel.send("Please give the name of country | All for all");
        }

        if (args.join(" ") === "all") {
            let corona = await track.all(); //it will give global cases

            let embed = new discord.MessageEmbed()
                .setTitle("Global Cases")
                .setColor("#ff2050")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(embed);
        } else {
            let corona;
            try {
                corona = await track.countries({ country: args.join(" ") }); //change it to countries
            } catch (error) {
                return message.channel.send(`Wrong Country!`);
            }

            let embed = new discord.MessageEmbed()
                .setTitle(`${corona.country}`)
                .setThumbnail(corona.countryInfo.flag)
                .setColor("#ff2050")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(embed);
        }

        //End

    }
};