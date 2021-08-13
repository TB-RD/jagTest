const {Message,MessageActionRow,MessageButton} = require('discord.js');
const prefix = ',';
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports = async (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === prefix + 'help') {

        const { MessageEmbed} = require('discord.js');
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffffff')
            .setTitle('im not sure what to type')
            .setDescription('just press a button mate')
            .setTimestamp()
            .setFooter('im just testing');

        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId("first")
            .setLabel("primary")
            .setStyle("PRIMARY"),
            new MessageButton()
            .setCustomId("second")
            .setLabel("success")
            .setStyle("SUCCESS")
        );

        message.channel.send({embeds: [exampleEmbed], components : [row]});
    
    }
}
