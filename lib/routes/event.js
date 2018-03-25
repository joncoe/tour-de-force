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

module.exports = router;
