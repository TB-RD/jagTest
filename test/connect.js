const mongoose = require('mongoose');
const lunch = require('./demo_test');
require("dotenv").config();

// Connect to db
mongoose.connect(process.env.MONGO_ATLAS_URI,
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false });

    mongoose.connection.once("open", function () {
      console.log("I work men do your stuff");
    }).on("error", function (error) {
      console.log("Connection error:", error);
    });
