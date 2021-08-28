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

//bro its mocha test here
/*
            /*const mongoose = require("mongoose");
require("dotenv").config();

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run
before(function (done) {
  // Connect to mongodb
  mongoose.connect(
    process.env.MONGO_ATLAS_URI,
    { useNewUrlParser: true, 
      useUnifiedTopology: true }
  );
  mongoose.connection.once("open", function () {
      console.log("I work men do your stuff");
      done();
    }).on("error", function (error) {
      console.log("Connection error:", error);
    });
});

// Drop the characters collection before each test
/*beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});*/
/*before( async (done) =>{
  mongoose.connection.close();
  done();
});
*/
//second file
/*// Describe our tests
/*describe("saving records to the database", () => {
    it("save new record",  async () => {
      try {
        const country1 = new Countries({
        name:"Canada",
       
        });
        await country1.save();
        assert(country1.isNew === false);
      } catch(err) {
        console.log(err)
      }  
    })
  })*/
