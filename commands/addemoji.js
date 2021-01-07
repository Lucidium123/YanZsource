const Discord = require('discord.js');
const { parse } = require('twemoji-parser');

module.exports = {
	name: 'addemoji',
	description: 'adds emoji',

	async run(client, message, args) {
		const perms = new Discord.MessageEmbed()
			.setDescription('**You don\'t have permission**')
			.setColor('RED');
		if (!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send('YOU BETTER GIVE ME MY DANG PERMISSIONS BIG NOOB EEEEEEE');
		if (!message.member.hasPermission('MANAGE_EMOJIS')) {
			return message.channel.send(perms);
		}

		const pls = new Discord.MessageEmbed()
			.setDescription('**Please give me a Emoji**')
			.setColor('RED');
		const emoji = args[0];
		if (!emoji) return message.channel.send(pls);

		const customemoji = Discord.Util.parseEmoji(emoji);

		if (customemoji.id) {
			const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? 'gif' : 'png'
			}`;
			const name = args.slice(1).join(' ');
			message.guild.emojis.create(
				`${Link}`,
				`${name || `${customemoji.name}`}`,
			);
			const Added = new Discord.MessageEmbed()
				.setColor('GREEN')
				.setTitle('Emoji has been Added')
				.setDescription(`**Name:** \`${name || `${customemoji.name}`}\` \n**Preview: [Click me](${Link})**`);

			message.channel.startTyping();
			setTimeout(function() {
				message.channel.stopTyping();
				message.channel.send(Added);
			}, 2000);

		}
		else {
			const CheckEmoji = parse(emoji, {
				assetType: 'png',
			});

			const plsw = new Discord.MessageEmbed()
				.setDescription('**Please give me a __Valid__ Emoji**')
				.setColor('RED');
			if (!CheckEmoji[0]) { return message.channel.send(plsw); }
		}
	},
};