

// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors')

// Start up an instance of app
app.use(express);
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
const server = app.listen(port, listening);
// Setup Server

function listening(){
    console.log("server running"); 
    console.log(`running on localhost:${port}`);
}