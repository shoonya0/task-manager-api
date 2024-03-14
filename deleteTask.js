// importing express module
const express = require('express');

// used to create new router object
const router = express.Router();

// importing MYSQL module
const MYSQL = require('./app');

// handeling the delete request for deleting an specific title or description
router.delete('/deleteTask/:title',(req, res)=>{
    const title = req.params.title;

    // check if title or description is provided | not
    if(!title && !desc){
        console.log('Title or description are required');
        res.status(400).json('Title or description are required');    
    }

    // create a dynamic query to delete the task accroding to title
    const query = `DELETE FROM task WHERE title = '${title}';`;

    // log the query to the console
    console.log('Query : '+query);

    // execute the query
    MYSQL.query(query, (err, result)=>{
        if(err){
            console.log('Error in deleting the task');
            res.status(500).json('Error in deleting the task');
        }
        else{
            // check if given task is present in the database
            if(result.affectedRows > 0){
                console.log('Task deleted successfully', result.affectedRows);
                res.status(200).json('Task deleted successfully');
            }else{
                console.log('Task not found');
                res.status(404).json('Task not found');
            }
        }
    });
});

// exporting the router module
module.exports = router;