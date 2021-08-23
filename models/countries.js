const mongoose = require('mongoose');
const { Schema } = mongoose;

//making Schemas
const CountriesSchema = new Schema({
    alpha3: String,
    name: String,
  });
  
  //connecting the schema with the collection
  const Countries = mongoose.model("countries", CountriesSchema);
  
  //exporting the model
  module.exports = Countries;
  