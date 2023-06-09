const { EmbedBuilder, PermissionsBitField,StringSelectMenuOptionBuilder,ActionRowBuilder,StringSelectMenuBuilder,ComponentType, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment')
require('moment-duration-format')
const Discord = require("discord.js");
const data = new SlashCommandBuilder()
    .setName('istatistik')
    .setDescription("Botun istatistiklerini gösterir.");
module.exports.execute = async (client, interaction, db) => {

        const embed = new EmbedBuilder()
.setDescription(`> **Aşağıda bot ile ilgili istatistikler verilmiştir** \u00A0 ** **`)
.addFields(
    {
        name: `Geliştirici`,
        value: `[${client.users.cache.get(`1108043141954674759`).username}](https://discord.com/users/1108043141954674759)`
    },
    {
        name: `Kullanıcı Sayısı`,
        value: `${client.users.cache.size}`
    },
    {
        name: `Sunucu Sayısı`,
        value: `${client.guilds.cache.size}`
    },
    {
        name: `Bellek Kullanımı`,
        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
    },
    {
        name: `Destek Sunucusu`,
        value: `[Tıkla!](https://discord.gg/1851)`
    },
    {
        name: `Gecikme`,
        value: `${client.ws.ping}`
    },
    {
        name: `Komut sayısı`,
        value: `${client.commands.size}`
    },
)
interaction.reply({embeds: [embed]})
    }

    module.exports.options = {
        ...data.toJSON()
    };
    
    
    module.exports.config = {
        enabled: true,
    };