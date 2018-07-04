const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Playing`,"#help")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 client.on('ready',  () => {
    console.log('By : _xShaDowZx');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  }); 
  
  client.on('ready', () => {
     console.log(`----------------`);
        console.log(`Made By _xShaDowZx - Script By : _xShaDowZx`);
          console.log(`----------------`);
        console.log(`ON ${client.guilds.size} Servers '     Script By : _xShaDowZx ' `);
      console.log(`----------------`);
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(` ON ${client.guilds.size} Servers - Server Maker`,"#")
  client.user.setStatus("Online")
  });
  client.on("guildCreate", guild => {
    console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
  });

client.on('message', message => {
    
    if(message.member.hasPermission('MANAGE_ROLES')) 
     if (message.content === "#roles") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
         client.guilds.forEach(m =>{
  message.guild.createRole({
        name : "Owner ",
        permissions :   [2146958591],
        color : " #e90a0a"
    }) 
    message.guild.createRole({
        name : "Co_Owner",
        permissions :   [326630611],
        color : " #f3ae10"
    })
    message.guild.createRole({
     name : "Manager",
     permissions :   [1],
     color : " #f0d504"
    }) 
    message.guild.createRole({
        name : "Admin",
        permissions :   [58195153],
        color : " #e74d07"
    })
    message.guild.createRole({
        name : "Developer",
        permissions :   [58195137],
        color : " #1385ee"
    })
    message.guild.createRole({
        name : "Moderator ",
        permissions :   [58195137],
        color : " #1292e7"
    })
 
    message.guild.createRole({
     name : "Helper",
     permissions :   [53992641],
     color : " #12e724"
    })
 
    message.guild.createRole({
     name : "Devs",
     permissions :   [58195137],
     color : " #1385ee"
    })
 
    message.guild.createRole({
     name : "Staff",
     permissions :   [58195137],
     color : " #f72a06"
    })
 
    message.guild.createRole({
     name : "Head Builder",
     permissions :   [58186945],
     color : " #9e69f5"
     })
    message.guild.createRole({
        name : "Builder",
        permissions :   [58186945],
        color : " #10b1ce"
    })
    message.guild.createRole({
        name : "Youtuber",
        permissions :   [53992641],
        color : " #b12b07"
    })
    message.guild.createRole({
     name : "Support Team",
     permissions :   [53992641],
     color : " #10e490"
 })
    message.guild.createRole({
     name : "Trusted",
     permissions :   [53992641],
     color : " #ad0ce0"
 })
 
    message.guild.createRole({
        name : "Donator",
        permissions :   [53992641],
        color : " #0cb5e0"
    })
 
       message.guild.createRole({
        name : "Member",
        permissions :   [1],
        color : " #000000"
    }) 
    message.guild.createRole({
        name : "Made By: Codes",
        permissions :   [1],
        color : " #000000"
    }) 
    message.guild.createRole({
     name : "Bot",
     permissions :   [1],
     color : " #000000"
 }) 
 })
 }
  
 });
 client.on('message', message => {
     if (message.content === "#channels") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
             
      message.guild.createChannel('Made By: Codes', 'voice')       
      message.guild.createChannel('Made By: Codes', 'text')
      message.guild.createChannel('👋-welcome', 'text')
      message.guild.createChannel('😢-goodbye', 'text')
      message.guild.createChannel('📢-announcements', 'text')
      message.guild.createChannel('🔥-news', 'text')
      message.guild.createChannel('🔨-changelog', 'text')
      message.guild.createChannel('🌍-general', 'text')
      message.guild.createChannel('💬-memes', 'text')
      message.guild.createChannel('🔧-support', 'text')
      message.guild.createChannel('🔩-bot-commands', 'text')
      message.guild.createChannel('💙-staff-chat', 'text')
      message.guild.createChannel('🏰-builders-chat', 'text')
      message.guild.createChannel('💎-donators-chat', 'text')
      message.guild.createChannel('📋-suggestions', 'text')
      message.guild.createChannel('📝-report', 'text')
      message.guild.createChannel('🌎 General', 'voice')
      message.guild.createChannel('💎 Donator Channel', 'voice')
      message.guild.createChannel('🏰 Builders Allround', 'voice')
      message.guild.createChannel('💙 Staff Allround', 'voice')
      message.guild.createChannel('❓ Help & Support', 'voice')
      message.guild.createChannel('💨 AFK', 'voice')
      message.guild.createChannel('🔊 Music Channel', 'voice')
      message.guild.createChannel('🔊 Music Channel', 'voice')
      message.guild.createChannel('⛔Private Channel 1', 'voice')
      message.guild.createChannel('⛔Private Channel 2', 'voice')
      message.guild.createChannel('⛔Private Channel 3', 'voice')
      message.guild.createChannel('⛔Private Channel 4', 'voice')
 
 message.channel.sendMessage('**Please wait while the Channels is being processed**')
 }
 });

client.on('message', omar => {
var prefix = "#";
if(omar.content.split(' ')[0] == prefix + 'delchaneels') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'delroles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**All roles got deleted**`")
}
});


client.login(process.env.BOT_TOKEN);
