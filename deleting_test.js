const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Tests

describe('Deleting Records', function(){
  
  var char;
  
beforeEach(function(done){
     char = new MarioChar({ 
       name:'Mario'
       
     });
      
     char.save().then(function(){
       assert(char.isNew === false);
       done();  
     });
});
 
  // Create tests 
  it('Deletes one record from the database ', function(done){
    
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });
     
  });

  
});
























// const assert = require('assert');
// const MarioChar = require('../models/mariochar');

// // Describe our tests
// describe('Deleting records', function(){
//   var char;
//   // Add a character to the db before each tests
//   beforeEach(function(done){
//     char = new MarioChar({
//       name: 'Mario'


// });
