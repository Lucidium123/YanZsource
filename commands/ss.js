const fetch = require('node-fetch');
const url = require('url');
module.exports = {
  name: "screenshot",
  description: "screenshot the homepage of the site you provide!",
  usage: "[sitelink]",
  category: "fun",
  cooldown: 5,
  run: async (client, message, args) => {
    if (!message.channel.nsfw) {
      message.react('🔞');
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "You can use this command in an NSFW Channel"
        }
      })
    }
    const urls = args[0];
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(`https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`);
      return message.channel.send(`Here is a screenshot from requested URL`, { files: [{ attachment: body, name: 'screenshot.png' }] });
    } catch (err) {
      if (err.status === 404) return message.channel.send('Could not find any results. Invalid URL?');
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}