V12 NOTES 

DELETING RECORDS FROM THE DATABASE

- FOCUS ON 3 MONGOOSE METHODS:
    - char.remove() - calling this on a single instance
    - MarioChar.remove() - this is the whole collection with the name Mario
    - MarioChar.findOneAndRemove() - this will remove the 1st one that mactes our criteria 
   
 
WE ARE GOING TO CREAT 1 TEST THAT WILL REMOVE THE RECORD FROM THE DATABASE

THE PROCESS 

- Create and save a new record to the db 
- Use findOneAndRemove() to remove the record
- Try to findOne int he db (the one we just removed) // this will assure the prev test was successful 
- Assert that the result is null 

---------------------------------------------------------------------------
- we are goint to delete Mario 

  // Create tests 
  it('Deletes one record from the database ', function(done){
    
    MarioChar.findOneAndRemove({name: 'Mario'})
     
  });
- this code is asynchronous, so we want it to be completed before the next code runs
- .then is a promise and we will fire a function in it so it runs after, and make sure mario has been removed

    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      
    })
---------------------------------------------------------------------------
- the following code will make sure the char has been removed

 
      MarioChar.findOne({name: 'Mario'}).then(function(result){
      
- once again the code begins asynchronous, so we use the promise .then and fire a function with result, meaning if it doesn't find the deleted char we will get the result null
- otherwise it will return the object 

---------------------------------------------------------------------------
- now we are going to assert that thre result is tripple === to null 


  assert(result === null);
  
---------------------------------------------------------------------------
- now we are going to call done()
