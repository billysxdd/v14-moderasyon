
const { EmbedBuilder, PermissionsBitField,StringSelectMenuOptionBuilder,ActionRowBuilder,StringSelectMenuBuilder,ComponentType, Embed, PermissionFlagsBits } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment')
require('moment-duration-format')
  const data = new SlashCommandBuilder()
    .setName("sil")
    .setDescription("Clear Command!")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addNumberOption(option => 
        option
        .setName('value')
        .setDescription('Clear value')
        .setRequired(true))
        module.exports.execute = async (client, interaction, db) => {
            const amount = interaction.options.getNumber('value');
        await interaction.channel.bulkDelete(amount, true)
        interaction.reply({embeds: [new EmbedBuilder().setDescription(`**${amount}** adet mesaj silindi`)], ephemeral: true})
    }


    
    module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };