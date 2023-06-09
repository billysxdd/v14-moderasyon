const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment')
require('moment-duration-format')
    const data = new SlashCommandBuilder()
      .setName("hosgeldin-ayarla")
      .setDescription("Welcome Command!")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)

      .addChannelOption(option => 
        option 
        .setName('kanal')
        .setDescription('Mesajın gönderileceği kanal')
        .setRequired(true))
        module.exports.execute = async (client, interaction, db) => {
            const kanal = interaction.options.getChannel('kanal');
    db.set(`hosgeldinkanal_${interaction.guild.id}`, `${kanal.id}`)
    const embed = new EmbedBuilder()
    .setDescription(`> **Hoşegldin-BayBay kanalı başarıyla ayarlandı**`)
    await interaction.reply({embeds: [embed]})

      }


      
      module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };