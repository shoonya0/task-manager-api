// importing express module
const express = require('express');

// used to create new router object
const router = express.Router();

// import MYSQL module
// the below example will work in case of importing more than one module
// however in this this is not working
// const {MYSQL, MYSQLDB} = require('./app');
const MYSQL = require('./app');

// handling the post request using the post method
router.post('/addTask/:title',(req, res)=>{
    // get the title from the request parameters
    const title = req.params.title;
    // get the description, status, start_time and end_time from the request body
    const {description, status, start_time, end_time} = req.body;
    if(!title || !description){
        console.log('Title or description are required');
        res.status(400).json('Title or description are required');
    }
    
    // create a dynamic query to insert the task into the database
    const query = `INSERT INTO task(title, description, status, start_time, end_time) VALUES ('${title}', '${description}', '${status ? status : "pending"}', '${start_time}', '${end_time}')`;
    
    // log the query to the console
    console.log('Query : '+query);

    // execute the query
    MYSQL.query(query,(err, result)=>{
        if(err){
            console.log('Error in adding task : '+err.message);
            res.status(500).send('Error in adding task');
        }
        else{
            console.log('Task added successfully');
            res.status(200).send(result);
        }
    });
});



// exporting the router module
module.exports = router;