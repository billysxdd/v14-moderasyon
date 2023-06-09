const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Timeout command with 60 seconds, 1 minute and 5 minutes options.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to mute')
                .setRequired(true))
		.addIntegerOption(option =>
			option
                .setName('time')
				.setDescription('Timeout duration in minutes')
				.setRequired(true)
                .addChoices(
                    {name: '1 minute', value: 60},
                    {name: '3 minute', value: 180},
                    {name: '5 minute', value: 300},
                    {name: '10 minute', value: 600},
                    {name: '1 hours', value: 3600}
                ))
                module.exports.execute = async (client, interaction, db) => {

                        const target = interaction.options.getUser('target');
        const member = interaction.guild.members.cache.get(target.id)
        const time = interaction.options.getInteger('time');
        let sure = time * 1000
        member.timeout(sure).then(() => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(`**${target} adlı kullanıcı ${time} saniye süreyle susturuldu**`)]})
          }).catch(err => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(` **Bir hata oluştu daha sonra tekrar deneyiniz**`)]})
          });
	}

    module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };