const Countries = require("../models/countries");
const mongoose = require("mongoose");

//to drop the collection (we use nodemon habibi)
Countries.collection.drop();

//saving documents to Atlas cloud
const country1 = new Countries({ name: "Syria" },);
country1.save().then(() => console.log("bruh its fucking easy"));
const country2 = new Countries({ name: "Kurdistan" },);
country2.save().then(() => console.log("bruh its fucking easy"));

//updating records
Countries.findOneAndUpdate({name:'Syria'}, {name:'Iraq'},  ).then(()=> console.log('updated!'));

//removing collection from the cloud
Countries.findOneAndRemove({name:'Syria'}).then(()=>{console.log('Removed!')});

// deleting documents as us remove tho
Countries.deleteMany({name:'Kurdistan'}).then(()=>{console.log('deleted!')});

//finding records
Countries.find({ name: 'Syria',},  (err, docs) =>{console.log(docs)});
