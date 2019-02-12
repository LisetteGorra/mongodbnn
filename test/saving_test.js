
const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Tests

describe('Saving Records', function(){
 
  // Create tests 
  it('Saves a record to the database ', function(done){
     var char = new MarioChar({ 
       name:'Mario'
       
     });
      
     char.save().then(function(){
       assert(char.isNew === false);
       done();  
     });
      
  });
    // next test
});












// const assert = require('assert');
// const MarioChar = require('../models/mariochar');

// // Describe our tests
// describe('Saving records', function(){

//   // Create tests
//   it('Saves a record to the database', function(done){

//     const char = new MarioChar({
//       name: 'Mario'
//     });

//     char.save().then(function(){
//       assert(!char.isNew);
//       done();
//     });

//   });

// });
