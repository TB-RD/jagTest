/* === basic stuff === */
const fs = require('fs');
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = ',';

client.commands = new Discord.Collection();

require("dotenv").config();
client.login(process.env.JAGUAR_TEST_TOKEN);

//onst commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
/*
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};*/


/*
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'info') {   
		client.commands.get('info').execute(message, args);
	} case (command == 'idk') {

    }

});

*/
/* === basic commands === */
/* === commands === */
/* === replies === */



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

/* === Role giver === */


const test = require("./test");
client.on('messageCreate', test);

