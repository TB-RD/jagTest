/* === basic stuff === */
const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';


client.commands = new Discord.Collection();

require("dotenv").config();
client.login(process.env.JAGUAR_TEST_TOKEN);

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'info') {   
		client.commands.get('info').execute(message, args);
	} else if (command == 'idk') {

    }

});


/* === basic commands === */
/* === commands === */
/* === replies === */
/*
client.on('message', jagReplies);

function jagReplies(message) {

let arg = message.content.substring(prefix.length).split(" ");

    switch(arg[0]) {

        case 'nice':
        message.reply('aychon')
            break;
        case 'biji':
            if(arg[1] === 'berxwedan'){
                message.channel.send('biji kurdu kurdistan')
            }else {
                message.channel.send('we dont have this here!')
            }
            break;
        case 'i':
            if(arg[1] === 'will'){
                if(arg[2] === 'sleep'){
                    message.reply('shew shad')
                }
            }
            break;
        
    }


}



client.on('message', jagSong);

function jagSong(msg) {

    if (msg.content === 'pom pom pa pory pory') {
        msg.reply('pory pam pa pory pam pa');
    }
}



client.on('message', jagLive);

function jagLive(msg) {

    if (msg.content === 'is jaguar alive?') {
        msg.reply('yes man im here');
    }
}

*/
/* === avatar accessor === */
/*
client.on('message', jagAvatar);

function jagAvatar(msg) {

    if(msg.content === 'my avatar') {
        msg.channel.send(msg.author.displayAvatarURL());
    }
}
*/
/* === message reactor === */

/*
client.on('message', jaguarsheart);

function jaguarsheart(msgrct) {
   if(msgrct.content === 'jaguar is jaguar') {
   msgrct.react('😘')
.then(console.log)
.catch(console.error);
   }  
};
*/
/* === Role giver === */

/* === User info embed === */
//const commandHandler = require("./commands/userInfo");
//client.on('message', commandHandler);


