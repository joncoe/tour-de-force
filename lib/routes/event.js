const express = require('express');
const Router = express.Router;
const router = Router();

const Event = require('../models/event');

// get a single event
router.get('/', (req, res) => {
  const { id } = req.query;
  Event.find({
    _id: id
  })
    .then(doc => {
      res.status(200).send({
        message: 'Here is your event',
        payload: doc
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});

// get a list of all events
router.get('/all', (req, res) => {
  Event.find({}).then(doc => {
    res.status(200).send({
      message: 'Here are your events',
      payload: doc
    });
  });
});

//  Add a new event
router.post('/add', (req, res) => {
  const {
    eventCity,
    eventCountry,
    venueName,
    performanceDate,
    userId
  } = req.body;

  const event = new Event({
    eventCity,
    eventCountry,
    venueName,
    performanceDate,
    userId
  });

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

module.exports = router;
