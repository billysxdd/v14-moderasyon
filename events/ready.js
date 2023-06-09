module.exports = async (client) => {
    client.functions.log("Bot giriş yaptı.", "READY");
  
    let usersCountjust = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    let users2Count = client.users.cache.size;
    let guild = client.guilds.cache.size;
    let channel = client.channels.cache.size;
    let emojis = client.emojis.cache.size;
    let role = client.guilds.cache.reduce((a, b) => a + b.roles.cache.size, 0)
    
    client.functions.log(`Kullanıcı: [${usersCountjust}]`, "READY");
    client.functions.log(`Kullanıcı: [${users2Count}]`, "READY");
    client.functions.log(`Sunucu: [${guild}]`, "READY");
    client.functions.log(`Kanal: [${channel}]`, "READY");
    client.functions.log(`Emoji: [${emojis}]`, "READY");
    client.functions.log(`Rol: [${role}]`, "READY");
    client.functions.log(`Davet LİNK:  https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`,"READY")
  
   client.user.setPresence({ activities: [{ name: `Yeni Güncelleme Yüklendi! - ${guild} Sunucu` }], status: 'online' });
  
};
