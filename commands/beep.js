const Discord = require('discord.js')


module.exports = {
    name: "beep",
    description: "Beep",

    async run(client, message, args) {
        message.channel.send(`${client.ws.ping} beeps maybe more idk xD`)
    }
}