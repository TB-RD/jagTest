const Countries = require("../models/countries");
const mongoose = require("mongoose");

//to drop the collection (we use nodemon habibi)
Countries.collection.drop();

//saving documents to Atlas cloud
const country1 = new Countries({ name: "Syria", _id: 1 });
country1.save().then(() => console.log("bruh its fucking easy"));
