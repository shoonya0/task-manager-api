// importing express module
const express = require('express');

// used to create new router object
const router = express.Router();

// importing MYSQL module
const MYSQL = require('./app');

// handling delete request using the delete method
function deleteTask(ID, res){
    MYSQL.query(ID, (err, result)=>{
        if(err){
            console.log('Error in deleting the task : '+err.message);
            res.status(500).json('Error in deleting the task : '+err.message);
        }
        else{
            // check if given task is present in the database
            if(result.length > 0){
                console.log('Task found successfully', result);

                // get the ID of the task
                const id = result[0].ID;

                // create a dynamic query to delete the task
                query = `DELETE FROM task WHERE ID = ${id};`;

                // log the query to the console
                console.log('Query : '+query);

                // execute the query
                // Note : if we use res.send inplace of res.json then also it will work because we are using app.use(express.json()); to parse the request body
                MYSQL.query(query,(err, result)=>{
                    console.log('Task deleted successfully');
                    res.status(200).send('Task deleted successfully');
                });
            }else{
                console.log('Task not found');
                res.status(404).json('Task not found');
            }
        }
    });
}

// handeling the delete request for deleting an specific title
router.delete('/deleteTask/title/:title',(req, res)=>{
    const title = req.params.title;
    
    // check if title or description is provided | not
    if(!title){
        console.log('Title or description are required');
        res.status(400).json('Title or description are required');    
    }
    
    // create a dynamic query to delete the task accroding to title
    const ID = `SELECT ID FROM task WHERE title = '${title}';`;
    
    // call the deleteTask function to delete the task
    return deleteTask(ID, res);
});

// handeling the delete request for deleting modified task
router.delete('/deleteTask/status',(req, res)=>{

    const status = req.body.status;
    
    console.log(status);

    if(!status){
        console.log('Description , status or end_time are required');
        res.status(400).json('Description , status or end_time are required');
    }
    
    // create a dynamic query to delete the task accroding to title
    const ID = `SELECT ID FROM task WHERE status = '${status}';`;

    // log the query to the console
    console.log('Query : '+ID);
    
    // call the deleteTask function to deleting modifing task
    return deleteTask(ID, res);
});

router.delete('/deleteTask/time',(req ,res)=>{
    
    const time = req.body.time;
    
    if(!time){
        console.log('time is required');
        res.status(400).json('time is required');
    }
    
    // create a dynamic query to delete the task accroding to title
    const ID = `SELECT ID FROM task WHERE end_time <= '${time}';`;
    
    // log the query to the console
    console.log('Query : '+ID);

    // call the deleteTask function to deleting modifing task
    return deleteTask(ID, res);
});
// exporting the router module
module.exports = router;