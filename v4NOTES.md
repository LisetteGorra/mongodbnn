V4 NOTES 

MODELS/COLLECTIONS, AND SCHEMAS 


- First we need to require mongoose 


const mongoose = require('mongoose');

-------------------------------------------------------------------------------
- second thing we are using the schema so we make a const for schema and mongoose


const Schema = mongoose.Schema;

-------------------------------------------------------------------------------

- Create Schema and Model 
- With this schema we can create new characters in the future and replace string and number with specific values
- new schema is relative to the const schema 

const MarioCharSchema = new Schema ({ 
    name: String,
    weight: Number
});
-------------------------------------------------------------------------------
- Next we create our model
- we use the method called model 
- the name of the model is mariochar, that is the collection 



const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;


-------------------------------------------------------------------------------
- this is basically saying that everytime we create a new character it's going to be created in the collection 'mariochar' and it will be based on the schema marioCharSchema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model 

const MarioCharSchema = new Schema ({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;



