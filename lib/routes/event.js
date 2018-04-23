const express = require('express');
const Router = express.Router;
const router = Router();

const Event = require('../models/event');

// get a single event
router.get('/', (req, res) => {
  const { id } = req.query;
  console.log('event to query: ', id);
  Event.findOne({
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
  const { userId } = req.query;
  console.log('req body is ', req.query);
  Event.find({ userId }).then(doc => {
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


//  Add a new event
router.patch('/edit', (req, res) => {
  const {
    eventCity,
    eventCountry,
    venueName,
    performanceDate,
  } = req.body;

  const event = new Event({
    eventCity,
    eventCountry,
    venueName,
    performanceDate,
  });

  event
    .update()
    .then(doc => {
      res.status(200).json({
        message: 'Success!',
        payload: doc
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: '⚡️' + err.message + '⚡️'
      });
    });
});

module.exports = router;
