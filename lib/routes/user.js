const express = require('express');
const Router = express.Router;
const router = Router();

const User = require('../models/user');
const { verifyToken } = require('../middleware/auth');

// // get a single event
// router.get('/', (req, res) => {
//   const { id } = req.query;
//   User.find({
//     _id: id
//   })
//     .then(doc => {
//       res.status(200).send({
//         message: 'Here is your USER',
//         payload: doc
//       });
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

// // Sign up a new agent
// router.post('/register', (req, res) => {
//   res.status(200).send({
//     message: 'Successful registration of a new user'
//   });
// });

router.get('/current', verifyToken, (req, res) => {
  const { user } = req.token;
  if (user && user.id) {
    User.findById(user.id).then(user => {
      res.status(200).send({
        message: 'success',
        payload: user
      });
    });
  } else {
    res.status(401).send({
      message: 'forbidden'
    });
  }
});

module.exports = router;
