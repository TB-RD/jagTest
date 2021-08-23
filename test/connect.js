const mongoose = require("mongoose");

//ES6 promises
mongoose.Promise = global.Promise;

//the hook
before(function (done) {
  //connecting with mongoDB
  mongoose.connect("mongodb://localhost:27027/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
      console.log("i work men do your stuff :)");
      done();
    }).on("error", (err) => {
      console.log("we have an error", err);
    });
});
