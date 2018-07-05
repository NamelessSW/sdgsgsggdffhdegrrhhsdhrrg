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
  client.user.setActivity(` ON ${client.guilds.size} Servers - #help`,"#")
  client.user.setStatus("Online")
  });
  client.on("guildCreate", guild => {
    console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
  });

//warn 
client.on('message', msg => { 
    if (msg.content.startsWith('#warn')) {
      if(!msg.member.hasPermission("MUTE_MEMBERS")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('mention a user/player')
      if (!args[1]) return msg.reply('Reason for warning ')
      if (msg.guild.channels.find('name', '⚠-warns')) {
        msg.guild.channels.find('name', '⚠-warns').send(`
      ***You have been warned*** : ${msg.mentions.members.first()}
      ***___Because you did the following___***
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})




client.login(process.env.BOT_TOKEN);
