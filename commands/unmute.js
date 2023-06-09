const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const data = new SlashCommandBuilder()
		.setName('unmute')
		.setDescription('Unmute Command')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to unmute')
                .setRequired(true));
                module.exports.execute = async (client, interaction, db) => {
                    const target = interaction.options.getUser('target');
        const member = interaction.guild.members.cache.get(target.id)
        member.timeout(1000).then(() => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(`**${target} adlı kullanıcıın susturulma cezası kaldırıldı**`)]})
          }).catch(err => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(`**Bir hata oluştu daha sonra tekrar deneyiniz**`)]})
          });
	}


    module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };
    