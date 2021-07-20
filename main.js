const Discord = require('discord.js');

const client = new Discord.Client();

//prefix for command in discord
const prefix = '?';

//Check if the bot is running in console
client.once('ready', () => {
  console.log('JobBuddy is working!');
});


client.on('message', message => {
  // validation to do nothing if command does not start with prefix or message is from bot
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  //Check if command is valid
  if (command === 'ping'){
    message.channel.send('Testinggg, I work!!!');
  }
});

//This line should always be the last
//insert bot's token
client.login('insert_bot_token_here')
