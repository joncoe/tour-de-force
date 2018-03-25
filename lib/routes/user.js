const express = require('express');
const Router = express.Router;
const router = Router();

const User = require('../models/user');

// get a single event
router.get('/', (req, res) => {
  const { id } = req.query;
  User.find({
    _id: id
  })
    .then(doc => {
      res.status(200).send({
        message: 'Here is your USER',
        payload: doc
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});

// Sign up a new agent
router.post('/register', (req, res) => {
  res.status(200).send({
    message: 'Successful registration of a new user'
  });
});

module.exports = router;
