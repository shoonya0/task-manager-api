const express = require('express');

const router = express.Router();

const MYSQL = require('./app');

router.get('/showTask',(req, res)=>{
    const SQL = 'SELECT * FROM task';
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