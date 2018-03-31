const express = require('express');
const Router = express.Router;
const router = Router();

const User = require('../models/user');
const { findUserByEmail, issueToken } = require('../middleware/auth');

router.post('/signup', (req, res) => {
  const { userName, userEmail, password } = req.body;
  console.log('req is ', req.body);
  const user = new User({ userName, userEmail, password });
  user
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'success',
        payload: doc
      });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
      //   console.log(err.message);
    });
});

module.exports = router;
