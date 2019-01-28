const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'togkvvghjgkgkgkgkkgg') {
    msg.reply('صح !');
  }
});
client.login("MjcwOTk2NzA4NTg0OTgwNDgy.DzAlLQ.9Al5CVbUXk5xKjaEg7PtetUsDis");