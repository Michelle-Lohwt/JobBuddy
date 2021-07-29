const Discord = require('discord.js');

const client = new Discord.Client();

//prefix for command in discord
const prefix = '?';

//common emoji
const briefcase = ('💼')

//Check if the bot is running in console
client.once('ready', () => {
  console.log('JobBuddy is working!');
});

client.on('message', message => {
  //log messages from users
  console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
  // validation to do nothing if command does not start with prefix or message is from bot
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  //Check if command is valid
  if (command === 'ping'){
    message.channel.send('Testinggg, I work!!!');
  }
  else if (command === 'embed'){
    //Embed for job posting
    //References: https://discordjs.guide/popular-topics/embeds.html
    const botEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`JobBuddy helps with your job posting ${briefcase}`)
    .setDescription(`Have a job opening? React with "${briefcase}" under this message!`)
    .addFields(
      //Spacing
      { name: '\u200B', value: '\u200B' },
      {
        name: 'Required information for job posting before reacting to this message',
        value: 'The bot will ask for:\n\:one: Employment form (Full-time/Part-time/Internship) \n\:two: Salary range \n\:three: Job location \n\:four: Job Work Scope \n\:five: Job Requirements \n\nJob Buddy will reach out via direct message in Discord!'
      },
      { name: '\u200B', value: '\u200B' },
      {
        name: "What's next?",
        value: 'If an interested candidate reacts to the job posting, you will receive their information via direct message with JobBuddy again. You can then proceed with the next steps from there.'
      },
    )
    .setTimestamp()
    .setFooter('JobBuddy Bot by the community, for the community');
    message.channel.send({embed: botEmbed}).then(embedMessage => {
      //Add default reaction after embed is sent
      embedMessage.react(briefcase);
  });
  }
});

//This line should always be the last
//insert bot's token
client.login('insert_token_here');
