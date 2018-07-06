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
      if (!msg.mentions.members.first()) return msg.reply('**mention a user/player**')
      if (!args[1]) return msg.reply('**Reason for warning**')
      if (msg.guild.channels.find('name', '⚠-warns')) {
        msg.guild.channels.find('name', '⚠-warns').send(`
      ***You have been warned*** : ${msg.mentions.members.first()}
      ***___Because you did the following___***
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
});

//ban
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "#"
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});

//kick
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "#"
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

//jail
client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"jail")) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
    if (message.author.bot) return;
      if (!message.channel.guild) return;
      var mention = message.mentions.members.first
      let role = (message.guild.roles.find("name","jail"));      
      if (!role) message.guild.createRole({ name:'jail', permissions:[1] });
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("**Mention player**")
      let member = message.mentions.members.first()
member.addRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('The person entered the jail') 
             .setColor('RANDOM')
              message.channel.sendEmbed(ra3d);    
  }
});

//unjail
client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"unjail")) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
          if (message.author.bot) return;
      if (!message.channel.guild) return;
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("**Mention player**");
      let member = message.mentions.members.first()
member.removeRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('You were released')
             .setColor('RANDOM')  
              message.channel.sendEmbed(ra3d);    
  }
});

//clear
client.on('message', msg => {
  var prefix ="#"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Set the number of messages you want to delete 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n The number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//ping
client.on('message', message => {
    if (message.author.id === client.user.id) return;
  var prefix = "#"
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

//roll
client.on('message', function(message) {
  var prefix = "#"
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Subtract a certain number from which to withdraw**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//avatar 
client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//server
client.on('message', function(msg) {
         var prefix = "#"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Number of members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Number of members online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ Owner__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ Server Id__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ The server was done in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//id
client.on('message', message => {
    var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'Bot';
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| Your Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ID:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| Your account type:',"**"+ w + "**",true)    
.addField('📛| The code is right for your account:',"**#" +  `${z.discriminator}**`,true)
.addField('**The date in which your account was created | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**The date you entered the server| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | The date of creating your full account:**', message.author.createdAt.toLocaleString())
.addField("**The last message for you | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**Mention correctly  ❌ **').catch(console.error);

}

});

//member
client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

//uptime
client.on('message', message => {
    var prefix = "#"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

//say
client.on('message', message => {
  var prefix = "#"
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "say") {
     message.channel.sendMessage(args.join("  "))
     message.delete()
    }
});

//bot owner 
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["236192758765715456"]; 
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**   The owner of the bot is here**` + `✅`)
} else {
   message.reply('**You are not the owner of the bot**' + '❌');   
}
}
});

//bot type
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#type"){
message.channel.startTyping();
}
});
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#stype"){
message.channel.stopTyping();
}
});

//Welcome
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '👋-welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | Welcome to Codes' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| You are the member number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
//GoodBye
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`Good Bye! :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`Good bye Nice to meet you :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   remain',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== We wish you the best ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '😢-good-bye')
    if (!channel) return;
    channel.send({embed : embed});
    });

//Suggest
client.on('message', message => {
var prefix = "#"
  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("449243876817895434").send( //Room ID
      "\n" + "**" + "Server :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + "  Proposal : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " Suggestion : " + "**" +
      "\n" + "**" + args + "**")
  }
  }); 
//Report
client.on('message', msg => { 
if (msg.content.startsWith(`#report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`You must mention person first`)

  if (!args[1]) return msg.reply(`Ummm .. Write your message`)

  if (msg.guild.channels.find('name', '📝-report')) { //channel name

    msg.guild.channels.find('name', '📝-report').send(`
  **Report** : ${msg.mentions.members.first()}
  ***Reported by***:  : ${msg.member}
  **Room** : ${msg.channel.name}
  ***Reason*** : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
});
//your bot has been added to new server
client.on('guildCreate', guild => {
    client.channels.get("449245081011224577").send(`**Woops new server ✅
  Server name: __${guild.name}__
  Server owner: __${guild.owner}__**`)
  });
//All bots cmd
client.on('message', message => {
	if(!message.channel.guild) return;
var prefix = "#"
			   if(message.content.startsWith(prefix + 'bots')) {

   
   if (message.author.bot) return;
   let i = 1;
	   const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
		 const embed = new Discord.RichEmbed()
		 .setAuthor(message.author.tag, message.author.avatarURL)
		 .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}

});
//bot
client.on('message', message => {
    if(message.content === "#bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**Memory used 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**Connection Speed  📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**using the processor 💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 Number of servers**' , `${client.guilds.size}`, true)
        .addField('**users number 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
//MC skins
client.on("message", message => {
    var prefix = "#"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "MCskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
//Date and time
client.on('message' , async (message) => {
    var prefix = "#"
      if (message.content.startsWith(prefix + 'day')) {
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  }
  }); 
/////Voice count
let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("448944084326023169");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '457294153190080512').setName(" Voice Online  「"+rebel+"」");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("448944084326023169");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '457294153190080512').setName(" Voice Online  「"+rebel+"」");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '457294153190080512').setName(" Voice Online  「"+rebel+"」");
}
});
client.on('message', Codes => {
  
  if(Codes.content === "#voice") {
      Codes.channel.send(" Voice「"+rebel+"」");
}
});
//total
client.on('guildMemberAdd', member => {
    member.guild.channels.get('453645068524322816').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.memberCount - member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('453644997376475146').setName(`Total Humans: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('453645288737996811').setName(`Total Bots: ${bots}`);
});
//server stats
client.on("message",function(message) {
  var prefix = "#"
    if(message.content.startsWith(prefix + "st")) {
           let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | SenioR |") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("SenioR TeaM. |")
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
    }
});
//emoji 
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
  var prefix = "#"
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});
//embed
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


})
//help
client.on('message', message => {
    if (message.content === "#help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**─══════ {✯Choose✯} ══════─**')
.addField('     **❧ #help-1 ➺ Codes list** ','**════════════**') //done
.addField('     **❧ #help-2 ➺ General commands**','**════════════**') //done
.addField('     **❧ #help-3 ➺ Music Commands**' ,'**════════════**') //done
.addField('     **❧ #help-4 ➺ Management orders**' ,'**════════════**') //done
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
///Help Codes
client.on('message', message => {
    if (message.content === "#help-2") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:globe_with_meridians: General commands**","** **")
.addField("**#ping :stopwatch:**","**Check your connection speed**")
.addField("**#avatar :camping:**","**Pictures of the chosen person**")
.addField("**#bot :1234:**","**Info about the bot**")
.addField("**#server :recycle:**","**For server information**")
.addField("**#id :id: **", "**Shows your ID**")
.addField("**#st :sparkle: **", "**Shows your Server stats**")
.addField("**#member :hearts: **", "**Shows who everyone Status**")
.addField("**#emoji :gem: **", "**Write your word in emoji**")
.addField("**#embed :star: **", "**Write your word in embed**")
.addField("**#MCskin :heart_eyes:  **", "**Shows your minecraft skin**")
.addField("**#sug :notepad_spiral: **", "**Do #sug {Write your suggestion}**")
.addField("**#report :pencil: **","**Report members**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Music commands 
client.on('message', message => {
if (message.content === "#help-3") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("** :musical_note: Music Commands (Coming Soon) **","** **")
.addField("**#play :musical_note:**","**Turn on the desired**")
.addField("**#stop  :musical_keyboard:**","**Stop required**")
.addField("**#pause :musical_score:**","**Turn off the temp timer**")
.addField("**#resume :mute: **","**Turn on the desired after the stop**")
.addField("**#skip :left_right_arrow:**","**Skip the song**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Staff commands 
client.on('message', message => {
if (message.content === "#help-4") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('This property is for management only');
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:radioactive: Management orders**","** **")
.addField("**#clear :octagonal_sign:**","**Clear Chat**")
.addField("**#kick  :outbox_tray:**","**Kick memebers**")
.addField("**#ban  :no_entry:**","**Ban members**")
.addField("**#mutechannel and #unmutechannel :mute: **","**Mute and Unmute channels**")
.addField("**#jail and #unjail :skull_crossbones: **","**Jail and unjail members**")
.addField("**#warn :warning: **","**Warn members**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help-1
client.on('message', message => {
if (message.content === "#help-1") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**⦁All types of codes in Codes Server 💬⦁**')
.addField('     **❧ #help-js ➺ JS codes list** ','**════════════**') //done 
.addField('     **❧ #help-py ➺ PY codes list (Coming Soon)** ','**════════════**') //Not Ready yet!
.addField('     **❧ #help-eris  ➺ ERIS  codes list (Coming Soon)** ','**════════════**') //Not Ready yet!
.addField('     **❧ #help-io ➺ IO codes list (Coming Soon)** ','**════════════**') //Not Ready yet!
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help js
client.on('message', message => {
if (message.content === "#help-js") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**⦁All types of codes in __Codes__ Server (Coming Soon) 💬⦁**')
.addField('     **❧ #help-js-source ➺ ⦁Source Codes** ','**════════════**') //Done
.addField('     **❧ #help-js-general ➺ ⦁General Codes** ','**════════════**')//Done
.addField('     **❧ #help-js-welcome ➺ ⦁Welcome Codes** ','**════════════**')//Done
.addField('     **❧ #help-js-help ➺ ⦁Help Codes** ','**════════════**') //Done
.addField('     **❧ #help-js-bc ➺ ⦁Broadcast Codes** ','**════════════**')
.addField('     **❧ #help-js-admin ➺ ⦁Management Codes** ','**════════════**')

.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});


client.login(process.env.BOT_TOKEN);
