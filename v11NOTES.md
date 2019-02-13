V11 NOTES 

OBJECT ID 

FINDING A RECORD BY ID 

-----------------------------------------------------------------------------
- CREATE A NEW IT BLOCK 

MarioChar.findOne({_id: myChar._id}).then(function(result){
      assert(result.name === 'Mario');
      done();
    
      
      
    });
    
  });
  
-----------------------------------------------------------------------------
- because myChar is defined inside of the beforeEach object, we need to define it outside 
- so we must declare the variable above the beforeEach


var char;

and then delete the var before other char's

- before 


  
beforeEach(function(done){
     var char = new MarioChar({ 
       name:'Mario'
       
     });
     
- after 

  var char;
  
beforeEach(function(done){
     char = new MarioChar({ 
       name:'Mario'
       
     });
     
-----------------------------------------------------------------------------
- now we have access to the char inside of the it statement, but now it's just char not myChar
- and make sure to assert the id of char 

 MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result.id === 'char._id');
      done();
-----------------------------------------------------------------------------
 - the result of this test is errors (fail)
 - because we are not calling on strings, we are calling on objects
 - the id's are objects
 - the id is wrapped within the object 
 - we are comparing 2 objects, 1 from local and 1 from "mongodb"
 - the are not actually the same 
 - so to get around it we add .toString()
 - and remove the quotes 
 


    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result.id.toString() === char._id.toString());
      done();