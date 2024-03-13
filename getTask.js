// importing express module
const express = require('express');

// used to create new router object
const router = express.Router();

// import MYSQL module
const MYSQL = require('./app');

// handling get request using the get method
router.get('/showTask',(req, res)=>{
    // create a query to get all the task from the database
    const SQL = 'SELECT * FROM task';
    // excuting the query
    MYSQL.query(SQL,(err, result)=>{
        if(err){
            console.log('Error in getting task : '+err.message);
            res.status(500).send('Error in getting task');
        }else{
            console.log('Task get successfully');
            res.status(200).send(result);
        }
    });
});


module.exports = router;