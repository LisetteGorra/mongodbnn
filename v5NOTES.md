V5 NOTES 

WHAT IS MOCHA 

- MOCHA IS A TESTING FRAMEWORK 
- USE IT TO PERFORM TESTS WITHIN OUR APPLICATION
- MAKE SURE EVRYTHING WORKS CORRECTLY

IN OUR CASE

- TEST OUR CONNECTION WITH THE DATABASE:
        - CREATING RECORDS 
        - READING RECORDS 
        - UPDATING RECORDS 
        - DELETING RECORDS

-------------------------------------------------------------------------------
- 1st we will install Mocha using (npm install mocha --save)
- Then we will require it 

const mocha = require('mocha');

--------------------------------------------------------------------------------
- next we wil describe the test 

describe('some demo tests', function(){
--------------------------------------------------------------------------------
- then we will assert 2 numbers to equal something true 
- this will create the test we described 


 
  // Create tests 
  it('adds two numbers together', function(){
     assert(2 + 3 === 5);
      
  });
    
});
--------------------------------------------------------------------------------
- next we will goto package.json and add mocha to the test dependency  
- then got to console and type (npm run test)

--------------------------------------------------------------------------------
- if we add up 2 numbers and the result isn't true the test will fail and show false in red
- 0 passing 
- 1 failing 


describe('some demo tests', function(){
 
  // Create tests 
  it('adds two numbers together', function(){
     assert(2 + 4 === 5);
      
  });
    
});


