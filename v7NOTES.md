V7 NOTES 

ES6 PROMISES 

- How we can implement the ES6 promise librabry to use instead of the default   
- in our last test we ran we had this error: 


DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

- for whatever reason mongoose does not want us to use the mongoose default promise library 


------------------------------------------------------------------------------
- we go into our ocnnection.js file and override the default library liek so:


//ES6 Promise 
mongoose.Promise = global.Promise

------------------------------------------------------------------------------
- next we want to make sure that the connection is made before the test is run
- we can use a hook function 
- it will run a section of code either before or after the test 

//Connect to the db before tests run 
before(function(){
    
});
------------------------------------------------------------------------------
- then we can copy and paste the connection code in the hook function 


mongoose.connection.once('open', function(){
   console.log("Connection has been made! yay!"); 
}).on('error', function(error){
    console.log("connection error:", error);
});

    
});
------------------------------------------------------------------------------

- we still need to know when the connection code is done so we will add done to the parameter 

before(function(done){
    //Connect to mongodb
------------------------------------------------------------------------------
- once it's done it will run the call back code done like so:


mongoose.connection.once('open', function(){
   console.log("Connection has been made! yay!"); 
   done();

-------------------------------------------------------------------------
- to get rid of this error message 

DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`.

- use the following code 

   mongoose.connect('mongodb://localhost/testaroo', {
      
  useMongoClient: true,