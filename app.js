// nodemon -app.js

// importing express module
const express = require('express');

// make an instance of express
const app = express();

// use express to parse incoming request with JSON payload
app.use(express.json());

// make a port in which server will listen
const PORT = process.env.PORT || 3000;
// pocess.env.PORT is used to get the port from enviroment variable

// listen to the port
app.listen(PORT ,(req, res)=>{
    console.log(`Server is running at port ${PORT}`);
    console.log('Press Ctrl+C to stop');
});

// Import MYSQL database
const mysql = require('mysql');

// create a connection to the database
// MYSQL is a object created by calling the createConnection method of the mysql module
// The createConnection returns a connection object that is used to communicate with the database
const MYSQLDB = mysql.createConnection({
    host:  'localhost',
    connectionLimit: 10,
    user: 'krishan',
    password: '1234',
    database: 'taskmanagerdb'
});

// connect to the database
MYSQLDB.connect((err)=>{
    if(err){
        console.log('Error in connecting to the database : '+err.message);
    }
    else{
        console.log('Connected to the database');
    }
})

// export the MYSQLDB module(a block of code that communicates with external applications)
module.exports = MYSQLDB;

// CRUD operations

// CREATE
// creating routes to hendal the post request
// using a build in method (require) of express to import the postTask.js file
const addTask = require('./postTask');
app.use('/api/v1',addTask);

// READ
// creating routes to hendal the get request
const getTask = require('./getTask');
app.use('/api/v1',getTask);

// UPDATE
// creating routes to hendal the put request
const updateTask = require('./updateTask');
app.use('/api/v1',updateTask);

// DELETE
// creating routes to hendal the delete requese
const deleteTask = require('./deleteTask');
app.use('/api/v1',deleteTask);