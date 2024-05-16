const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const ToDoRoute = require('./Routes/To-DoRoute')
const MuiRoute = require('./Routes/MuiRoute')
require('dotenv').config()

    
const MongoURL = process.env.MongoURL

const app = express()

//MIDDLE-WARE TO RECEIVE A BODY REQUEST
app.use(cors());
app.use(express.json());

//ROUTE
app.use('/todo', ToDoRoute)
app.use('/mui', MuiRoute)

//PORT NUMBER
const port = 5000

const start = async() => {
    try {
        await mongoose.connect(MongoURL)
        console.log("To-Do Connected...");

        app.listen(port, 'localhost', function () {
            console.log("Server is running on a port", port);
        })
    } 
    catch (error) {
        console.log(error);
    }
};

start();