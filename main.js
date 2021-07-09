const Discord = require('discord.js');

const client = new Discord.Client();

//Prefix for command in discord
const prefix = '?';

//Bot status
client.once('ready', () => {
  console.log('JobBuddy is working!');
});


client.on('message', message => {
  // validation
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === 'ping'){
    message.channel.send('Testinggg, I work!!!');
  }
});

//This line should always be the last
client.login('insert_bot_token_here')
