const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, codeBlock } = require("discord.js");
const Discord = require("discord.js");
const cooldownedUsers = new Discord.Collection();
const fs = require('fs')

const db = require("orio.db");

module.exports = async (client, interaction) => {

    if (interaction.isChatInputCommand()) {

        const startAt = Date.now();

        if (!interaction.guildId) return interaction.reply({ content: `**${client.user.username}** komutlarını Direkt Mesajlar bölümünde kullanamazsın.`, ephemeral: true });

        const cmd = client.commands.get(interaction.commandName || null);

        if (!cmd) return client.functions.log("Böyle bir komut yok", "RUN_COMMAND");
        const guild = client.guilds.cache.get(interaction.guildId);
        const member = interaction.member || await guild.members.fetch(interaction.user.id);
        if (!cmd.config.enabled) {
            return interaction.reply({ content: "Bu komut geçici olarak kullanıma kapalıdır." });
        };

        const userKey = `${interaction.user.id}${interaction.guild.id}`;
        const cooldownTime = cooldownedUsers.get(userKey);
        const currentDate = parseInt(Date.now() / 1000);
        if (cooldownTime) {
            const isExpired = cooldownTime <= currentDate;
            const remainingSeconds = cooldownTime - currentDate;
            if (!isExpired) {

                const embed = new Discord.EmbedBuilder()
                .setColor('#EB459E')
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setDescription("⏰ | Bu komutu tekrar kullanabilmek için `"+remainingSeconds+"` saniye beklemelisin.")

                return  interaction.reply({ embeds: [embed], ephemeral: true });
                
            }
        }


        try {
            cmd.execute(interaction.client, interaction, db);
            cooldownedUsers.set(userKey, 5 + currentDate);
        } catch (err) {
            return console.log(err);
        };
    };
  }