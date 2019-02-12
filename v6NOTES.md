V6 NOTES 

SAVING DATA TO MONGODB 

- we are giving properties rto the schema we created by creating an object for new MarioChar



describe('Saving Records', function(){
 
  // Create tests 
  it('Saves a record to the database ', function(){
     var char = new MarioChar({ 
       
     });
  });
    
});

---------------------------------------------------------------
 - now this is sitting locally, we used mongoose to create it , but it's not in our database
 - what we need to do is save it to the database
 

   var char = new MarioChar({ 
       name:'Mario'
       
---------------------------------------------------------------
- we are going to use the save method 
- save is an asynchronous request 
- it implements the promise interface for us, so we can chain 

     char.save().then(function(){
       
     });
  });
  
---------------------------------------------------------------
- now you can test with assert, and add properties 


char.save().then(function(){
       assert(char.isNew === false)
       
     });
  });
---------------------------------------------------------------
- mocha still doesn't know the char has been saved
- and mocha needs to know when we have complete the test
- the save method is asynchronous, so mocha doesn't automatically know when it's been completed 
- so we need to pass a done parameter 

   char.save().then(function(){
       assert(char.isNew === false);
       done();
     });
  });
    // next test
    
    
- and add the done parameter to the test you created 


 // Create tests 
  it('Saves a record to the database ', function(done){