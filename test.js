const {
    Client,
    Message,
    MessageActionRow,
    MessageButton
} = require('discord.js');
const prefix = ',';
module.exports = async (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === prefix + 'help') {

        const {
            MessageEmbed
        } = require('discord.js');
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffffff')
            .setTitle('im not sure what to type')
            .setDescription('just press a button mate')
            .setTimestamp()
            .setFooter('im just testing');

        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId("random")
            .setLabel("primary")
            .setStyle("PRIMARY")
        );

        message.channel.send({embeds: [exampleEmbed], components : [row]});
    
    
   
    }
}






/*
class questions {
                constructor(ques) {
                    this.ques = ques;
                }

                colorQues() {
                    if (message.content.toLowerCase() === prefix + this.ques) {
                        content() {

                                console.log('i work');   
                        
                            }
                    }
                }
            }
*/
/*     class questions {
            constructor(ques) {
                this.ques = ques;
            }

            colorQues() {
                if (message.content.toLowerCase() === prefix + this.ques) {

                    return msg.channel.send('first question is');

                }
            }
        }
        message.channel.send('pick your color')
            .then(async msg => {
                const colors = ['🔴', '🔵', '🟣'];
                for (let i = 0; i < colors.length; i++) {
                    await msg.react(colors[i]);

                }
                SecFilter = (reaction, user) =>
                    colors.includes(reaction.emoji.name) && user.id === message.author.id;
                collector = msg.createReactionCollector(SecFilter, {
                    time: 999999,
                });

                collector.on("collect", ({
                    emoji,
                    users
                }) => {
                    const index = colors.indexOf(emoji.name);
                    if (index === 0) {
                        console.log('first');
                        let quiz = new questions('first');
                        quiz.colorQues();
                    } else if (index === 1) {
                        console.log('second');
                        let quiz = new questions('second');
                        quiz.colorQues();
                    } else{
                        console.log('third');
                        let quiz = new questions('third');
                        quiz.colorQues();
                    }
                })
                collector.on("end", () => msg.edit("end collector"));
            }) */