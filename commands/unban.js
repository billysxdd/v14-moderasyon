const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
  const data = new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unban Command!")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addStringOption(option =>
        option
            .setName('id')
            .setDescription('User ID')
            .setRequired(true))
            module.exports.execute = async (client, interaction, db) => {
                const target = interaction.options.getString('id');
        interaction.guild.members.unban(target).then(() => {
            interaction.reply({embeds: [new EmbedBuilder().setDescription(`**Kullanıcının yasağı başarıyla kaldırıldı**`)]})
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