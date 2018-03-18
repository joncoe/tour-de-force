const express = require('express');
const PORT = 8080;

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/tourDeForce';

mongoose.connect(uri);

const app = express();


// get a single event
app.get('/event', (req, res) => {
    res.status(200).send({
        message: 'Here is your event'
    })
});

// get a list of all events
app.get('/allEvents', (req, res) => {
    res.status(200).send({
        message: 'These are all your events'
    })
});


// Sign up a new agent
app.post('/registerAgent', (req, res) => {
    res.status(200).send({
        message: 'Successful registration of a new agent'
    })
});


// Sign up a new Promoter
app.post('/registerPromoter', (req, res) => {
    res.status(200).send({
        message: 'Successful registration of a new promoter'
    })
});


//
app.post("/addEvent", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});