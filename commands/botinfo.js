const Discord = require('discord.js');


module.exports = {
	name: 'bot-info',
	description: 'Bot info',

	// eslint-disable-next-line no-unused-vars
	async run(client, message, _args) {
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('bot')
			.setDescription(`***Bot Name:***YanZ\n***Bot Prefix:***L!\n***Bot ID:***740447451307180104\n***In***:${client.guilds.cache.size} Servers`)
			.setTimestamp();
		message.channel.send(embed);
	},
};