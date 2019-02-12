V9 NOTES 

DROPPING COLLECTIONS 

- When we saved our mariochar and ran it a few times, we resulted with several chars with the same properties and different unique keys, which could give us issues in the future while trying to run other tests
- for example, if we search the database for a mariochar with these properties then it will always pass regardless of any other test that we have done. 
- idealy what we want to do is clean the database collection, so each test can run without the influence of the other tetst 
- we need to clean the database before each test that we run 
- we have to delete the contect on of the cpllection before every single test 
- with a mocha hook ( like "before")

before(function(done){

-------------------------------------------------------------------------------
beforeEach(function(){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        
    });
    
- drop means delete, we access the files and then drop. 
- drop is an asynchronous method we we can callback a function and tell it to do something after 

-------------------------------------------------------------------------------
///Drop the character collection before each test 
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});
