const assert = require("assert");
const Countries = require('../models/countries');

//saving records to database with mocha
describe("saving records to the database", function() {
    it("save new record",  function(done) {
      const country1 = new Countries({
          name: 'Kurdistan',
          alpha3: 'KRD'
      })
      country1.save().then(function(){
       assert(country1.isNew === false);
         done();
      });
    });
  });