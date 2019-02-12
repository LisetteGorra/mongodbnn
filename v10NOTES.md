V10 NOTES 

FINDING RECORDS

FINDING AND READING DATA FROM THE DATABASE

- SO FAR WE HAVE MADE A CONNECTION TO MONGODB USING MONGOOSE
- SET UP A SIMPLE TEST ENVIRONMENT WITH MOCHA 
- CREATED A MODEL AND SCHEMA 
- CREATED AN INSTANCE OF A MODEL (A SINGLE RECORD) AND SAVED IT TO THE DATABASE
- DROPPED A COLLECTION FROM THE DATABASE


------------------------------------------------------------------------------
SAVING RECORDS 

- FOCUS ON 2 MONGOOSE METHODS:
    - find(criteria) - this will find every single record of the search name 
    - findOne(criteria) - this will find the 1st record with the search name 
    
- Use these methods on the models themselves, unlike teh save() method

Example:

The save() method was on a single instance 

 - myChar = new MarioChar({name:'Mario'})
 - myChar.save()

The find() methods are on the models...
 - MarioChar.find({name:'Mario'})


-----------------------------------------------------------------------------
- we move our code around to create a new char 

  
beforeEach(function(done){
     var char = new MarioChar({ 
       name:'Mario'
       
     });
      
     char.save().then(function(){
       assert(char.isNew === false);
       done();  
     });
});

-----------------------------------------------------------------------------
- now we can find
 

   
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    })
    
    
- now we are finding 1 record from the database 

