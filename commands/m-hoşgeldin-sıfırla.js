const { EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment')
require('moment-duration-format')
   const data = new SlashCommandBuilder()
      .setName("hosgeldin-sıfırla")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .setDescription("Welcome Command!")
      module.exports.execute = async (client, interaction, db) => {

      if(!db.has(`hosgeldinkanal_${interaction.guild.id}`)) return interaction.reply("<:carpi:1114143676894031942> **Kanal zaten ayarlı değil**")
    db.delete(`hosgeldinkanal_${interaction.guild.id}`)
    const embed = new EmbedBuilder()
    .setDescription(`> **<:tik:1114142075005444226> Hoşegldin-BayBay kanalı başarıyla sıfırlandı**`)
    await interaction.reply({embeds: [embed]})

      }


      module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };