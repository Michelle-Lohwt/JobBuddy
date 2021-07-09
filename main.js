const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('JobBuddy is online!')
})

client.login('insert_bot_token_here')
