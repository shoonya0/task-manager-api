// importing express module
const express = require('express');

// creating router object in express
const router = express.Router();

// importing MYSQL
const MYSQL = require("./app");

// handling put request using put method
router.put('/updateTask',(req,res)=>{
    // creating an query to update the provided task from user
    const {title ,description ,status ,start_time ,end_time} = req.body;

    start_time
    var query = `UPDATE task SET description = '${description}'` + 
        (status ? `, status = '${status}'` : '') + 
        (start_time ? `, start_time = '${start_time}' ` : '')  + (end_time ? `,end_time = '${end_time}' ` : '') +
         ` WHERE title = '${title}';`;

    // log the query to the console
    console.log('Query : '+query);

    MYSQL.query(query,(err, result)=>{
        if(err){
            console.log('Error in updating task : '+err.message);
            res.status(500).send('Error in updating task');
        }
        else{
            console.log('Task updated successfully');
            res.status(200).send('Task updated successfully');
        }
    });
});

module.exports = router;