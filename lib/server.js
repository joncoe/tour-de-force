const express = require('express');
const Event = require('./models/event');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 8080;

const uri = 'mongodb://localhost:27017/tourDeForce';

mongoose.connect(uri).then(() => {
  console.log(`Successfully connected to ${uri}`);
});

const app = express();

app.use(bodyParser.json());

// get a single event
app.get('/getEvent', (req, res) => {
  const { id } = req.query;
  Event.find({
    _id: id
  }).then(doc => {
    res.status(200).send({
      message: 'Here is your event',
      payload: doc
    });
  });
});

//  Add a new event
app.post('/addNewEvent', (req, res) => {
  const { eventCity, eventCountry, venueName, performanceDate } = req.body;
  //   console.log(req.body);

  const event = new Event({
    eventCity,
    eventCountry,
    venueName,
    performanceDate
  });

  console.log(event);

  event
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'Success! Add new Event',
        payload: doc
      });
    })
    .catch(err => {
      res.status(500).json({
        message: '⚡️' + err.message + '⚡️'
      });
    });
});

// get a list of all events
app.get('/getAllEvents', (req, res) => {
  Event.find({}).then(doc => {
    res.status(200).send({
      message: 'Here are your events',
      payload: doc
    });
  });
});

// Sign up a new agent
app.post('/registerUser', (req, res) => {
  res.status(200).send({
    message: 'Successful registration of a new agent'
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
