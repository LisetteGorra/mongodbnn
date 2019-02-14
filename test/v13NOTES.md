V13 NOTES 

UPDATING RECORDS 


- VARIOUS MONGOOSE METHODS:
    - char.update() updating a single record 
    - MarioChar.update() - calling on the model/updates all 
    - MarioChar.findOneAndUpdate() - updates 1 according to specific criteria
    

THE PROCESS 
- CREATE AND SAVE A NEW RECORD TO THE DB 
- USE findOneAndUpdate() to update the name of the record
- TRY TO findOne in the db (the one we just updated)
- Assert that the result has the updated property value


--------------------------------------------------------------------------------

describe('Updating Records', function(){

 it('Update one record from the database '
--------------------------------------------------------------------------------

