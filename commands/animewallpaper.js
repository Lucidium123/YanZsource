const Discord = require('discord.js');
const wall = require("random-anime-wallpapers")

module.exports = {
    name: "animewallpaper",
    description: "gives a random anime wallpaper",

    async run(client, message, args) {
        const randomAnimeWallpapers = require('random-anime-wallpapers')
 
        randomAnimeWallpapers()
          .then(images => {
            message.channel.send(images)
            //=> [{id, thumb, full}, ...]
          })
         
    }
}
//HELP