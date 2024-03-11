// importing express module
const express = require('express');

// make an instance of express
const router = express.Router();

// import MYSQLDB module
const {MYSQLDB} = require('./app');

router.post('./addTask',(req, res)=>{
    
});



// exporting the router module
module.exports = router;