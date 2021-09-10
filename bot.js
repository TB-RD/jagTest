/* === basic stuff === */
const {Message,MessageActionRow,MessageButton,Discord,MessageEmbed} = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 
[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const prefix = ',';
const {stripIndents} = require('common-tags');
//client.commands = new Discord.Collection();
require("dotenv").config();
client.login(process.env.JAGUAR_TEST_TOKEN);

//onst commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
/*
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};*/

function jagReplies(message) {

let arg = message.content.substring(prefix.length).split(" ");

    switch(arg[0]) {

        case 'nice':
        message.reply('aychon')
            break;
        case 'biji':
            if(arg[1] === 'berxwedan'){
                message.channel.send('biji kurd u kurdistan')
            }else {
                message.channel.send('we dont have this here!')
            }
            break;
        case 'i':
            if(arg[1] === 'will'){
                if (arg[2] === 'sleep')
                    message.reply('shew shad')
                }
            
            break;
        case 'who':
        if(arg[1] === 'is'){
            switch(arg[2]) {

                case 'april'  :
                    message.reply('queen of colemêrg');
                break;
                 case 'jared' :

                    message.reply('jackboxer');
                    break;
                 case 'ilhem' :
                  
                    message.reply('life teacher');
                    break;
                 case 'jaguar': 

                    message.reply('a jaguar who else?');
                    break;
                 case 'jorah': 

                    message.reply('girl magnet');
                    break;
                 case 'dyari': 

                    message.reply('a racist nigger');
                    break;
                 case 'jon': 

                    message.reply('duhokî bale');
                    break;
                 case 'moha': 

                    message.reply('baklava zaxoyi');
                    break;
                 case 'chant': 

                    message.reply(' Great Kurdistan Commander');
                    break;
                 case 'poss': 

                    message.reply('a guy from silk road');
                    break;
                 case 'alan': 

                    message.reply('alan awrupi');
                    break;
                 case 'ares': 

                    message.reply('ares? 3aras? ayris? arez? aras?');
                    break;
                 case 'kurdo': 

                    message.reply('paracetamol');
                    break;
                 case 'connection': 

                    message.reply('poss knows! :man_shrugging: ');
                    break;
                
                }
            }
          
        }
    }

client.on('messageCreate', jagReplies);

/* === avatar accessor === */

client.on('messageCreate', jagAvatar);

function jagAvatar(msg) {

    if(msg.content === 'my avatar') {
        msg.channel.send(msg.author.displayAvatarURL());
    }
}

const test = require("./test");
client.on('messageCreate', test);


let list1 = stripIndents `
aaaa
one
`;
let list2 = stripIndents `
aaaa
two
`;

let pages = [list1, list2];
let page = 1;

const embed = new MessageEmbed();
        embed.setTitle('just test');
        embed.setDescription(pages[page - 1]);
        embed.setColor(0x21c400);
        embed.setFooter('this bot is provided by jaguar');
        embed.setTimestamp();


client.on('interactionCreate', async (interaction) => {
if(interaction.customId === 'first'){
    
let message = await interaction.channel.send({ embeds: [embed]})
if (pages.length === 1) return;
await message.react('🔴');
const filter = (reaction, user) => {
	return reaction.emoji.name === '🔴' && user.id === message.author.id;
};
const next = message.createReactionCollector({filter, time: 999999});

next.on('collect', () => {

    console.log('works')})
    embed.setDescription('new des');
    message.edit(embed);

    } else if (interaction.customId === 'second'){
        interaction.reply({content: `it works son`})
    }
})

