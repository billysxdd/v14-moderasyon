const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const data = new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban Command!")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('The member to ban')
            .setRequired(true))
            .addStringOption(option =>
                option
                    .setName('reason')
                    .setDescription('The reason for banning')
                    .setRequired(false))
                    module.exports.execute = async (client, interaction, db) => {
                        const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
          interaction.guild.members.ban(target, {reason: reason}).then(() => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(`**${target.username} adlı kullanıcı ${reason} sebebiyle başarıyla yasaklandı**`)]})
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