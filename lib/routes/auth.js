const express = require('express');
const Router = express.Router;
const router = Router();
const { findUserByEmail, issueToken } = require('../middleware/auth');
const User = require('../models/user');

router.post('/login', findUserByEmail, issueToken);

router.post('/signup', (req, res) => {
  const { userName, userEmail, password } = req.body;
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
      // console.log(err.errors);
      res.status(500).json({
        // message: err.message, payload: {
        //   name: err.name,
        //   message: err.message,
        //   problem: 'duplicate',
        //   path: err.path,
        //   value: err.value
        // }

        message: err.message,
        payload: {
          message: err.message,
          problem: 'duplicate',
          info: err
        }
      });
      // console.log(err.code);
      // console.log(err.errors);
    });
});

module.exports = router;
