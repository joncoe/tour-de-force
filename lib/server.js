const express = require('express');
const Event = require('./models/event');
const bodyParser = require('body-parser');

const PORT = 8080;

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/tourDeForce';

mongoose.connect(uri).then(() => {
    console.log(`Successfully connected to ${uri}`)
});

const app = express();

app.use(bodyParser.json());


// get a single event
app.get('/event', (req, res) => {
    res.status(200).send({
        message: 'Here is your event'
    })
});

//  Add a new event
app.post("/addNewEvent", (req, res) => {

    const { artistName, artistEmail, artistPhone } = req.body;

    const event = new Event({
        artistName,
        artistEmail,
        artistPhone
    });

    event
        .save()
        .then(doc => {
            res.status(200).json({
                message: "Success! Add new Event",
                payload: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
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


// Sign up a new agent
app.post('/registerPromoter', (req, res) => {
    res.status(200).send({
        message: 'Successful registration of a new promoter'
    })
});




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});